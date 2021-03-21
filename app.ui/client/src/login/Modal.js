import React from 'react';
import logo from '../assets/zbd.png';
import '../index.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: null,
                password: null
            }
        };
    }

    onSubmit(e) {
        console.log(`Modal.onSubmit: ${this.state.form.username}`);
        this.props.onSubmit(e, this.state.form);
    }

    onCreateUser(e) {
        console.log(`Modal.onCreateUser: ${this.state.form.username}`);
        this.props.onCreateUser(e, this.state.form);
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
            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required autoComplete='false' onChange={this.props.onChange} />
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
