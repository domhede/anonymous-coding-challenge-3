import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: none;
  text-align: center;
  position: absolute;
  top: 37%;
  left: 30%;
  width: 30%;
  margin: auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 32px;
  :hover {
    cursor: pointer;
  }
`;

const PropertyButton = ({ id, actionType, removeProperty, saveProperty, ...rest }) => {
  const clickHandler = actionType === 'Add' ? saveProperty : removeProperty;

  return (
    <Button onClick={() => clickHandler(id)} {...rest}>{actionType} property</Button>
  );
}

export default PropertyButton;