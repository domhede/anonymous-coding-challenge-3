import React from 'react';
import styled from 'styled-components';

const AddButton = styled.div`
  display: none;
  text-align: center;
  position: absolute;
  top: 220px;
  left: 240px;
  width: 100px;
  margin: auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 32px;
  :hover {
    cursor: pointer;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;
  transition-duration: .2s, .2s;
  transition-timing-function:
`;
const Wrapper = styled.div`
  border-bottom: 2px solid #dcdcdd;
  margin-bottom: 30px;
  position: relative;
  &:hover {
    .addButton {
      display: inline;
    }
    .imageOverlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }

`;
const ImageWrapper = styled.div`
  position: relative;
  line-height: 0;
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
      <ImageWrapper>
        <Overlay className='imageOverlay' />
        <img src={mainImage} />
      </ImageWrapper>
      <Footer>
        <Price>{price}</Price>
      </Footer>
      <AddButton className='addButton'>Add property</AddButton>
    </Wrapper>
  );
}

export default PropertyCard;