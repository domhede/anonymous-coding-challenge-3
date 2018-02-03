import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 45%;
`;
const Header = styled.div`
  text-align: center;
  padding: 8px;
`;

const PropertyList = ({listType}) => {
  const headerText = listType === 'all' ? 'Results' : 'Saved Properties';

  return (
    <Wrapper>
      <Header>{headerText}</Header>
    </Wrapper>
  );
}

export default PropertyList;
