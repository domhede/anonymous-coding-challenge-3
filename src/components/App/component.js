import React, { Component } from 'react';
import styled from 'styled-components';
import PropertyList from 'components/Common/PropertyList';

const Wrapper = styled.div`
  padding: 64px 0px;
  width: 80%;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
        <Grid>
          <PropertyList listType='all' />
          <PropertyList listType='saved' />
        </Grid>
      </Wrapper>
    );
  }
}

export default App;