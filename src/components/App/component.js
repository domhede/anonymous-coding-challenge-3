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
        <PropertyList listType='all' />
        <PropertyList listType='saved' />
      </div>
    );
  }
}

export default App;