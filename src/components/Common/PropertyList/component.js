import React from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';

const Header = styled.div`
  text-align: center;
  padding: 8px;
`;

const PropertyList = ({listType, properties}) => {
  const headerText = listType === 'all' ? 'Results' : 'Saved Properties';

  return (
    <div>
      <Header>{headerText}</Header>
      <div>
        {properties.map(property => {
          return <PropertyCard key={property.id} {...property} />
        })}
      </div>
    </div>
  );
}

export default PropertyList;
