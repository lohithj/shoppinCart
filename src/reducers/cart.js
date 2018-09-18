import {
  raw,
  UPDATE_CART_SUB_TOTAL
} from '../constants.js';

const initialState = {
  cartItems: raw,
  cartSubTotal: raw.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0),
  savedItems: [],
  listItems: []
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART_SUB_TOTAL':
      const { cartSubTotal } = action.payload;
      return {
        ...state,
        cartSubTotal
      }
    case 'ADD_TO_CART':
      let cartItems = state.cartItems.concat(raw.filter((i)=>{if(i.p_id==action.payload.id){return i;}}))
      let savedItems = state.savedItems.filter((i)=>{if(i.p_id!=action.payload.id){return i;}})
      let listItems = state.listItems.filter((i)=>{if(i.p_id!=action.payload.id){return i;}})
      let subTotal = cartItems.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0)
      return {
        ...state,
        cartItems,
        savedItems,
        listItems,
        cartSubTotal:subTotal
      }
    case 'REMOVE_CART_ITEM':
      cartItems = state.cartItems.filter((i)=>{if(i.p_id!=action.payload.id){return i;}})
      savedItems = state.savedItems.filter((i)=>{if(i.p_id!=action.payload.id){return i;}})
      listItems = state.listItems.concat(raw.filter((i)=>{if(i.p_id==action.payload.id){return i;}}))
      subTotal = cartItems.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0)
      return {
        ...state,
        cartItems,
        cartSubTotal:subTotal,
        savedItems,
        listItems
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
    case 'SAVE_FOR_LATER':
      let { saveId } = action.payload;
      cartItems=state.cartItems.filter((i,key)=>{if(parseInt(i.p_id)!=parseInt(saveId))return i;})
      return {
        ...state,
        savedItems:state.savedItems.concat(state.cartItems.filter((i,key)=>{if(parseInt(i.p_id)==parseInt(saveId))return i;})),
        cartItems,
        cartSubTotal:cartItems.reduce((acc,i)=>(acc+i.p_price*i.p_quantity),0)
      }
    case 'ADD_FROM_SAVED_TO_CART':
      saveId = action.payload;
      let idx;
      state.savedItems.filter((i,key)=>{if(parseInt(i.p_id)==parseInt(saveId)){idx=key}})[0];
      cartItems = idx?state.cartItems.push(state.savedItems[idx]):state.cartItems;
      savedItems = idx?state.savedItems.splice(idx,1):state.savedItems;
      return {
        ...state,
        savedItems,
        cartItems
      }
    default:
      return state
  }
}

export default cart
