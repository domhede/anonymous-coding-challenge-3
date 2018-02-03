import React, { Component } from 'react';
import styled from 'styled-components';
import PropertyList from 'components/Common/PropertyList';

const Wrapper = styled.div`
  padding-top: 64px;
  width: 800px;
  margin: 0 auto;
  display: flex;
`;

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
      <Wrapper>
        <PropertyList listType='all' />
        <PropertyList listType='saved' />
      </Wrapper>
    );
  }
}

export default App;