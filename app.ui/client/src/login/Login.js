import React from 'react';
//import { createUser } from '../services/users';
import Modal from './Modal';

// can you use bootstrap?
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, form) {
        e.preventDefault();
        console.log(`Login.Page.handleSubmit: ${form.username}`);
        console.log(e);
        this.props.onSubmit(form.username);
    }

    render() {
        return <Modal onSubmit={this.handleSubmit}
            key='modal' />
    }
}

export default Page;
