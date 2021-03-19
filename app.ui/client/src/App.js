import './App.css';
import Login from './login/Login'
import React from 'react';
//const Home = React.lazy(() => import('./home/Home'));
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
          <Home username={this.username} />
        </div>
      );
    }

    return (
      <div className="App" >
        <Login onSubmit={(username, password) => {
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
