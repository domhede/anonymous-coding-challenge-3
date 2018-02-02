import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.fetchAppData();
  }
  fetchAppData() {
    this.props.fetchSavedProperties();
    this.props.fetchProperties();
  }
  render() {
    return (
      <div>App</div>
    );
  }
}

export default App;