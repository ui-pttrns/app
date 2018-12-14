import React, { Component } from 'react';
import Hello from './hello';
import Header from './header';
import Navigation from './navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default App;
