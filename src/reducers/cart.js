import {
  raw,
  UPDATE_CART_SUB_TOTAL
} from '../constants.js';

const initialState = {
  cartItems: raw,
  cartSubTotal: raw.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0)
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART_SUB_TOTAL':
      const { cartSubTotal } = action.payload;
      return {
        ...state,
        cartSubTotal
      }
    case 'REMOVE_CART_ITEM':
      let cartItems = state.cartItems.filter((i)=>{if(i.p_id!=action.payload.id){return i;}})
      let subTotal = cartItems.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0)
      return {
        ...state,
        cartItems,
        cartSubTotal:subTotal
      }
    case 'UPDATE_CART_ITEM_QUANTITY':
      const { qid,quantity } = action.payload
      cartItems = state.cartItems.map((i)=>{if(i.p_id==qid&&quantity>0){i.p_quantity=quantity} return i;})
      subTotal = cartItems.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0)
      return {
        ...state,
        cartItems,
        cartSubTotal:subTotal
      }
    case 'UPDATE_CART_ITEM_COLOR':
      const { cid,color } = action.payload
      cartItems = state.cartItems.map((i)=>{if(i.p_id==cid){i.p_selected_color=color} return i;})
      return {
        ...state,
        cartItems,
      }
    case 'UPDATE_CART_ITEM_SIZE':
      const { sid,size} = action.payload
      cartItems = state.cartItems.map((i)=>{if(i.p_id==sid){i.p_selected_size=size} return i;})
      return {
        ...state,
        cartItems,
      }
    default:
      return state
  }
}

export default cart
