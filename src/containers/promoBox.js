import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { applyPromoCode } from '../actions';
import styled from 'styled-components';

const Icon = styled.div`
  font-family: 'Lato', sans-serif;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #fff;
  background-color: #0e9fe1;
  text-align: center;
  border-radius: 3px;
  margin: 20px;
`;

const Input = styled.input`
  margin: 20px 0 20px 10%;
  width: calc(65% - 30px);
  height: 36px;
  font-size: 20px;
  padding-left: 30px;
`;

const Button = styled.button`
  width: 20%;
  text-align: center;
  margin: 5%;
  padding: 5px 0;
  background-color: #0e9fe1;
  color: #fff;
`;

const Span = styled.span`
  width: 100%;
  text-align: center;
`;

const Div = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin: 20px;
  padding: 20px;
  border-bottom: 2px dashed #00b9dc;
`;

class PromoBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      promoCode: null
    };
  }

  render(){
    return(
      <Div style={{...this.props.style}}>
        <Span>Enter Promo Code or Gift Code</Span>
        <Input type="text" onChange={(e)=>{e.preventDefault();this.setState({promoCode:e.target.value})}}></Input>
        <Icon onClick={(e)=>{e.preventDefault();this.props.applyPromoCode({promoCode:this.state.promoCode})}}>%</Icon>
      </Div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  applyPromoCode : (payload) => {
    dispatch(applyPromoCode(payload))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(PromoBox);
