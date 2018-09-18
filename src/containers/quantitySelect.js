import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateCartItemQuantity } from '../actions';

const Button = styled.div`
  width: 30px;
  height: 24px;
  border-radius: 500px;
  background-color: #fff;
  margin: 10px auto;
  padding: 3px 0px;
`;

const Div = styled.div`
  width: 30%;
  margin: 10px 0;
`;

class QuantitySelect extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <Div style={{...this.props.style}}>
        <Button onClick={(e)=>{e.preventDefault();this.props.updateCartItemQuantity({qid:this.props.id,quantity:this.props.quantity+1})}}>+</Button>
        <span>{this.props.quantity}</span>
        <Button onClick={(e)=>{e.preventDefault();this.props.updateCartItemQuantity({qid:this.props.id,quantity:this.props.quantity-1||0})}}>-</Button>
      </Div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateCartItemQuantity : (payload) => {
    dispatch(updateCartItemQuantity(payload))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(QuantitySelect);
