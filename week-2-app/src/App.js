import React, { Component } from 'react';
import logo from './logo.svg';

//what we want
import {Button, Paragraph} from './components';

import './App.css';
import {Post} from './components';
import {Timeline} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Timeline />
      </div>
    );
  }
}

export default App;
