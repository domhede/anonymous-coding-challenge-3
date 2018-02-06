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

const PropertyButton = props => {
  return (
    <Button {...props}>{props.actionType} property</Button>
  );
}

export default PropertyButton;