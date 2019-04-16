import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Markdown Live Preview</h1>
            <hr />
          </div>
        </div>
        <UserInput />
      </div>
    );
  }
}

export default App;
