import './App.css';
import Login from './login/Login'
import React from 'react';
import Home from './home/Home';

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
        <Login onSubmit={(username, password) => {
          console.log(username);
          this.setState({
            isLoggedIn: true,
            username: username
          });
        }} />
      </div>
    );
  }
}

export default App;
