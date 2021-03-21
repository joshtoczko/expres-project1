import React from 'react';
import logo from '../assets/zbd.png';
import { userExists, createUser } from '../services/users';
import '../index.css';

class Modal extends React.Component {
    initialMessageState = {
        showUserAlreadyExists: false,
        showUserCreated: false,
        showError: false
    };

    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: null,
                password: null
            },
            ...this.initialMessageState
        };
    }

    onSubmit(e) {
        console.log(`Modal.onSubmit: ${this.state.form.username}`);
        this.props.onSubmit(e, this.state.form);
    }

    onCreateUser(e) {
        e.preventDefault();
        console.log(`Modal.onCreateUser: ${this.state.form.username}`);
        this.setState({ ...this.initialMessageState });


        userExists(this.state.form.username, (user) => {
            console.log('onCreateUser.userExistsResponse', user);

            if (user?.exists === null) {
                console.logError(`Unable to determine existence of user: ${this.state.form.username}`);
                return;
            } else if (user.exists) {
                this.setState({ showUserAlreadyExists: true });
                return;
            }

            createUser(this.state.form.username, (err, res) => {
                if (err) return this.setState({ showError: true });

                return this.setState({ showUserCreated: true });
            });
        });
    }

    render() {
        return <div className="Login">
            <Logo />
            <form>
                <Input type='text' name='username' placeholder='username' onChange={this.onUsernameChange.bind(this)} />
                <Input type='password' name='password' placeholder='password' />
                <div>
                    <button onClick={this.onSubmit.bind(this)}>Sign In</button>
                </div>
                <div>
                    <button onClick={this.onCreateUser.bind(this)}>Create User</button>
                </div>
            </form>
            {
                this.state.showUserAlreadyExists &&
                <h2 className="error">This user already exists!</h2>
            } {
                this.state.showError &&
                <h2 className="error">There was an error, please try again later.</h2>
            } {
                this.state.showUserCreated &&
                <h2 className="success">User created!</h2>
            }
        </div>
    }

    onUsernameChange(e) {
        this.setState({ form: { username: e.target.value } });
        console.log(this.state.username);
    }
}

class Input extends React.Component {
    render() {
        return <div>
            <input type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                required
                autoComplete='false'
                onChange={this.props.onChange} />
            <label htmlFor={this.props.name} ></label>
        </div>
    }
}

class Logo extends React.Component {
    render() {
        return <img src={logo} alt="Visit our website!" />
    }
}

export default Modal;
