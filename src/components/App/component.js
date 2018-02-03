import React, { Component } from 'react';
import styled from 'styled-components';
import PropertyList from 'components/Common/PropertyList';

const Wrapper = styled.div`
  background: #f5f5f6;
  padding: 64px;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 32px;
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