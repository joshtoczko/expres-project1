import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username
        }
    }

    render() {
        return (
            <h1>Home: Welcome {this.state.username}!</h1>
        )
    }
}

export default Home;