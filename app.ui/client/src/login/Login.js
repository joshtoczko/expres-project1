import React from 'react';
import logo from '../assets/zbd.png'
import '../index.css'

// can you use boostrap?
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, form) {
        e.preventDefault();
        console.log(`Login.Page.handleSubmit: ${form}`);
        this.props.onSubmit(form.username, form.password);

        return false;
    }

    render() {
        return <Modal onSubmit={this.handleSubmit} key='modal' />
    }
}

export default Page;

class Modal extends React.Component {
    constructor(props) {
        super(props);

        // this.onUsernameChange = this.onUsernameChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            form: {
                username: null,
                password: null
            }
        };
    }

    onSubmit(e) {
        console.log(`Modal.onSubmit: ${this.state.form}`)
        this.props.onSubmit(e, this.state.form);
    }

    render() {
        return <div className="Login">
            <Logo />
            <form onSubmit={this.onSubmit.bind(this)}>
                <Input type='text' name='username' placeholder='username' onChange={this.onUsernameChange.bind(this)} />
                <Input type='password' name='password' placeholder='password' />
                <button>Sign In</button>
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
