import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Product from '../components/product.js';
import { updateCartSubTotal,removeCartItem,saveForLater,addToCart } from '../actions';

const Div = styled.div`
  width: calc(60% - 32px);
  border-right: 2px dashed #00b9dc;
  margin: 30px 0;
  padding-right: 30px;
  min-height: 90vh;
  @media only screen and (max-width: 450px){
    width: 100%;
    margin: auto;
    padding-right: 0px;
  }
`;

const Span = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 2px dashed #00b9dc;
`;

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title : {
        cart : 'YOUR SHOPPING CART',
        saved : 'SAVED FOR LATER',
        products : 'PRODUCTS'
      },
      items : {
        cart : 'cartItems',
        saved : 'savedItems',
        products : 'listItems'
      }
    };
  }

  render(){
    return(
      <Div style={{...this.props.style,display:this.props[this.state.items[this.props.type]].length>0?'block':'none'}}>
        <Span>{this.state.title[this.props.type]}</Span>
        {
          this.props[this.state.items[this.props.type]].map((item,key)=>{
            let { p_id,p_image,p_name,p_style,p_available_options,p_selected_size,p_selected_color,p_quantity,p_originalprice,p_price,c_currency } = item;
            return(
              <Product
                key={key}
                id={p_id}
                options={p_available_options}
                url={p_image}
                style={p_style}
                name={p_name}
                color={p_selected_color}
                quantity={p_quantity}
                orgprice={p_originalprice}
                price={p_price}
                size={p_selected_size}
                currency={c_currency}
                type={this.props.type}
                onRemove={(e)=>{e.preventDefault();this.props.removeCartItem({id:p_id})}}
                saveItem={(e)=>{e.preventDefault();this.props.type=='cart'?this.props.saveForLater({saveId:p_id}):this.props.addToCart({id:p_id})}}
              />
            )
          })
        }
      </Div>
    )
  }
}

Cart.propTypes = {
  cartItems : PropTypes.array.isRequired,
  savedItems : PropTypes.array.isRequired,
  listItems : PropTypes.array.isRequired,
  updateCartSubTotal : PropTypes.func.isRequired,
  removeCartItem : PropTypes.func.isRequired,
  saveForLater : PropTypes.func.isRequired,
  addToCart : PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  cartItems : state.cart.cartItems,
  savedItems : state.cart.savedItems,
  listItems : state.cart.listItems
})

const mapDispatchToProps = (dispatch, props) => ({
  updateCartSubTotal : (payload) => {
    dispatch(updateCartSubTotal(payload))
  },
  removeCartItem : (payload) => {
    dispatch(removeCartItem(payload))
  },
  saveForLater : (payload) => {
    dispatch(saveForLater(payload))
  },
  addToCart : (payload) => {
    dispatch(addToCart(payload))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
