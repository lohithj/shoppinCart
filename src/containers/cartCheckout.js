import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PromoBox from './promoBox.js';
import Cart from '../containers/cart.js'
import Checkout from '../containers/checkout.js'
import styled from 'styled-components';

const Div = styled.div`
  display : flex;
  @media only screen and (max-width: 450px){
    flex-direction: column;
  }
`;

class CartCheckout extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fixIt:false
    };
    this.onScroll=this.onScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll',this.onScroll);
  }

  onScroll(e){
    if(e) e.preventDefault();
    let ypos=ReactDOM.findDOMNode(this.refs['cart']).getBoundingClientRect().y;
    this.setState({fixIt:ypos<50?true:false});
  }

  render(){
    let { fixIt } = this.state;
    return(
      <Div>
        <Cart ref='cart'/>
        <Checkout style={{...this.props.style,position:fixIt?'fixed':'relative',marginLeft:fixIt?'59%':''}} />
      </Div>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(CartCheckout);
