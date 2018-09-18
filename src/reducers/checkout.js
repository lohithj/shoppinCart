import {
  APPLY_PROMO_CODE
} from '../constants.js';

const initialState = {
  promoCodeCent : 0
};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case 'APPLY_PROMO_CODE':
      let promoCodeCent = action.payload.promoCode=='AJ10'?10:0;
      return {
        ...state,
        promoCodeCent
      }
    default:
      return state
  }
}

export default checkout
