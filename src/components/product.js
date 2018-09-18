import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuantitySelect from '../containers/quantitySelect.js';
import ColorSelect from '../containers/colorSelect.js';
import SizeSelect from '../containers/sizeSelect.js';

const ProductCont = styled.div`
  display: flex;
  position: relative;
  height : 300px;
  width : 90%;
  margin: 30px auto;
  text-align: center;
  font-family: 'Lato', sans-serif;
`;

const Img = styled.img`
  height : 300px;
  width: 50%;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: relative;
  margin: 0 20px;
`;

const Name = styled.span`
  font-size: 25px;
`;

const PriceCont = styled.div`
  display: flex;
  margin: 5px auto;
`;

const Price = styled.span`
  padding: 4px;
  font-size: 10px;
  text-decoration: line-through;
`;

const OrgPrice = styled.span`
  font-size: 15px;
`;

const SaveBtn = styled.div`
  width: 80%;
  position: absolute;
  bottom: 20px;
  padding: 25px 0px;
  left: 10%;
  border-radius: 6px;
  text-align: center;
  background-color: #74EBD5;
  background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
`;

const RemoveProduct = styled.div`
  width: 10%;
  height: 50px;
  font-size: 50px;
  text-align: right;
  margin: 90px 0px;
  font-family: 'Syncopate', sans-serif;
  position: relative;
  cursor: pointer;
`;

const Cross = styled.div`
  right: 0px;
  &:after {
    position: absolute;
    right: 15px;
    content: ' ';
    height: 50px;
    width: 2px;
    background-color: #333;
    transform: rotate(45deg);
  }
  &:before {
    position: absolute;
    right: 15px;
    content: ' ';
    height:50px;
    width: 2px;
    background-color: #333;
    transform: rotate(-45deg);
  }
`;

const SelectionCont = styled.div`
  display: flex;
`;

const Product = ({id,url,name,style,color,size,quantity,orgprice,price,currency,options,onRemove}) => (
  <ProductCont>
    <Img src={url}></Img>
    <ProductDetails>
      <Name>{name}</Name>
      <PriceCont>
        <Price>{orgprice!=price?(currency+' '+orgprice+'.00'):''}</Price>
        <OrgPrice>{currency+' '+price+'.00'}</OrgPrice>
      </PriceCont>
      <SelectionCont>
        <SizeSelect selected={size} id={id} options={options.sizes}></SizeSelect>
        <QuantitySelect quantity={quantity} id={id}></QuantitySelect>
        <ColorSelect selected={color} id={id} options={options.colors}></ColorSelect>
      </SelectionCont>
      <SaveBtn>SAVE FOR LATER</SaveBtn>
    </ProductDetails>
    <RemoveProduct onClick={onRemove}><Cross></Cross></RemoveProduct>
  </ProductCont>
);


Product.propTypes = {
  id: PropTypes.string.id,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Product;
