import React, { Component } from 'react';
import PropertyList from 'components/Common/PropertyList';

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
      <div>
        <PropertyList type='default' />
        <PropertyList type='saved' />
      </div>
    );
  }
}

export default App;