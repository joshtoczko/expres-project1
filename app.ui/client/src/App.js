import './App.css';
import Login from './login/Login'
import React from 'react';
import Home from './home/Home';
import { login } from './services/login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          <Home username={this.state.username} />
        </div>
      );
    }

    return (
      <div className="App" >
        <Login onSubmit={this.login.bind(this)} />
      </div>
    );
  }

  login(username, spass) {
    console.log('[App.login] login with', username);

    login(username, spass, (err, res) => {
      if (err) return;

      this.setState({
        isLoggedIn: true,
        username: username
      });
    });
  }
}

export default App;
