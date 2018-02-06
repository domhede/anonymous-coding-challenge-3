import React from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';

const Header = styled.div`
  text-align: center;
  padding: 8px;
  font-size: 22px;
  margin-bottom: 32px;
`;
const Empty = styled.div`
  text-align: center;
  padding: 64px;
`;
Empty.displayName = 'Empty';

const renderProperties = (properties, listType) => {
  if (!properties.length) {
    return <Empty>You have no saved properties. <br></br>To save, hover over a property and click the add button</Empty>
  }
  return properties.map(property => {
    return <PropertyCard listType={listType} key={property.id} {...property} />
  })
}

const PropertyList = ({listType, properties}) => {
  const headerText = listType === 'all' ? 'Results' : 'Saved Properties';

  return (
    <div>
      <Header>{headerText}</Header>
      <div>
        {renderProperties(properties, listType)}
      </div>
    </div>
  );
}

export default PropertyList;
