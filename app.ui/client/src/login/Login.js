import React from 'react';
import logo from '../assets/zbd.png'
import '../index.css'

// can you use boostrap?
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {};
    }

    handleSubmit(e, form) {
        //e.preventDefault();
        this.props.onSubmit(form.username, form.password);

        return false;
    }

    render() {
        return <Modal onSubmit={this.handleSubmit} key='modal' />
    }
}

export default Page;

class Modal extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         form: {
    //             username: null,
    //             password: null
    //         }
    //     }
    // }

    onUsernameChange(e) {
        console.log(this)
        this.setState({
            username: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        this.props.onSubmit(e);
    }

    render() {
        return <div className="Login">
            <Logo />
            <form onSubmit={this.onSubmit}>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button>Sign In</button>
            </form>
        </div>
    }
}

class Input extends React.Component {
    render() {
        return <div>
            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required autoComplete='false' />
            <label htmlFor={this.props.name} ></label>
        </div>
    }
}

class Logo extends React.Component {
    render() {
        return <img src={logo} alt="Visit our website!" />
    }
}
