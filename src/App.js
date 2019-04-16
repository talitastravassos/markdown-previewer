import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;
