import React from 'react';
import Nav from './Nav.js';
import Profile from './Profile';
import History from './History';
import Projects from './Projects';
import './App.css';

class App extends React.Component {
  state = { displayed: 'profile' }

  renderView = () => {
    switch (this.state.displayed) {
      case 'profile':
        return <Profile />;
      case 'history':
        return <History />;
      case 'projects':
        return <Projects />
      default:
        throw 'error'
    }
  }

  handleChange = view => {
    if (this.state.displayed !== view) {
      this.setState({ displayed: view })
    }
  }

  render () {
    return (
      <div className="App">
        <Nav changeView={this.handleChange}/>
        {this.renderView()}
      </div>
    )
  }
}


export default App;
