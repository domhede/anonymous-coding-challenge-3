import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 2px solid #dcdcdd;
  margin-bottom: 30px;
`;

const Header = styled.div`
  background-color: ${props => props.bgColor};
  height: 27px;
  padding: 8px 7px;
`;
const Footer = styled.div`
  padding: 18px 24px;
  background-color: #FFF;
`;
const Price = styled.p`
  font-size: 20px;
`;
const PropertyCard = ({id, price, agency, mainImage}) => {
  return (
    <Wrapper>
      <Header bgColor={agency.brandingColors.primary} >
        <img src={agency.logo} />
      </Header>
      <img src={mainImage} />
      <Footer>
        <Price>{price}</Price>
      </Footer>
    </Wrapper>
  );
}

export default PropertyCard;