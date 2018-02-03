import React from 'react';

const PropertyList = ({listType}) => {
  const headerText = listType === 'all' ? 'Results' : 'Saved Properties';

  return (
    <div>{headerText}</div>
  );
}

export default PropertyList;
