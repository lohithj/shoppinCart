export const applyPromoCode = (payload) => ({
  type: 'APPLY_PROMO_CODE',
  payload
});

export const updateCartSubTotal = (payload) => ({
  type: 'UPDATE_CART_SUB_TOTAL',
  payload
});

export const removeCartItem = (payload) => ({
  type: 'REMOVE_CART_ITEM',
  payload
})

export const updateCartItemQuantity = (payload) => ({
  type: 'UPDATE_CART_ITEM_QUANTITY',
  payload
})

export const updateCartItemSize = (payload) => ({
  type: 'UPDATE_CART_ITEM_SIZE',
  payload
})

export const updateCartItemColor = (payload) => ({
  type: 'UPDATE_CART_ITEM_COLOR',
  payload
})

export const saveForLater = (payload) => {
  return({
    type: 'SAVE_FOR_LATER',
    payload
  })
}

export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload
})
