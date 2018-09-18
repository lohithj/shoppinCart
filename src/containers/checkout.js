import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PromoBox from './promoBox.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  margin: 30px 0;
  font-family: 'Lato', sans-serif;
`;

const ValuesCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px dashed #00b9dc;
  border-top: 2px dashed #00b9dc;
  padding: 30px 0;
  font-size: 20px;
`;

const Values  = styled.div`
  display : ${(props) => (props.hide) ? 'none' : 'flex'};
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

const Promo  = styled.div`
  display : ${(props) => (props.hide) ? 'none' : 'flex'};
  justify-content: space-between;
  margin: 0 0 20px 0;
  font-family : 'Lato', cursive;
  font-style: italic;
  background-color: #eee;
  padding: 5px 0px;
  border-radius: 3px;
`;

const CheckoutBtn = styled.div`
  width: 50%;
  height: 55px;
  background-color: #eee;
  margin: auto;
  text-align: center;
  font-size: 25px;
  padding-top: 20px;
  background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
  border-radius: 5px;
`;

class Checkout extends React.Component{
  constructor(props){
    super(props);
    let values = this.calcValues(props.cartSubTotal,props.promoCodeCent);
    this.state={
      ...values
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.cartSubTotal!=nextProps.cartSubTotal||this.props.promoCodeCent!=nextProps.promoCodeCent){
      this.setState(this.calcValues(nextProps.cartSubTotal,nextProps.promoCodeCent));
    }
  }

  calcValues = (subTotal,promoCodeCent) => {
    return{
      subTotal,
      promoOff:subTotal*promoCodeCent/100.0,
      total:subTotal-(subTotal*promoCodeCent/100.0)
    }
  }

  render(){
    return(
      <Div style={{...this.props.style}}>
        <PromoBox />
        <ValuesCont>
          <Values><span>SUB TOTAL</span><span>{' $ '+this.state.subTotal}</span></Values>
          <Promo hide={this.state.promoOff?false:true}><span>PROMO CODE APPLIED</span><span>{' - $ '+this.state.promoOff||''}</span></Promo>
          <Values style={{color:'#666'}}><span>ESTIMATED SHIPPING</span><span>{'FREE'}</span></Values>
          <Total><span>ESTIMATED TOTAL</span><span>{' $ '+this.state.total}</span></Total>
        </ValuesCont>
        <CheckoutBtn>CHECKOUT</CheckoutBtn>
      </Div>
    );
  }
}

Checkout.propTypes = {
  cartSubTotal : PropTypes.number.isRequired,
  promoCodeCent : PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  cartSubTotal : state.cart.cartSubTotal,
  promoCodeCent : state.checkout.promoCodeCent
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
