import React from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';

const Wrapper = styled.div`
  width: 45%;
`;
const Header = styled.div`
  text-align: center;
  padding: 8px;
`;

const PropertyList = ({listType, properties}) => {
  const headerText = listType === 'all' ? 'Results' : 'Saved Properties';

  return (
    <Wrapper>
      <Header>{headerText}</Header>
      {properties.map(property => {
        return <PropertyCard key={property.id} {...property} />
      })}
    </Wrapper>
  );
}

export default PropertyList;
