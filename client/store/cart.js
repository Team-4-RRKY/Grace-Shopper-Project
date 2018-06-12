import axios from 'axios';
import history from '../history';

const POST_SINGLE_PAYMENT = 'POST_SINGLE_PAYMENT';

const postSinglePayment = emptyCart => ({
  type: POST_SINGLE_PAYMENT,
  emptyCart,
});

export const postPayment = (token, amount, user) => async dispatch => {
  try {
    const { data } = await axios.post('/api/stripe', { token, amount, user });
    if (data === 'payment successful') {
      dispatch(dealWithPurchase);
    }
  } catch (error) {
    console.error(error);
  }
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case POST_SINGLE_PAYMENT:
      return action.emptyCart;
    default:
      return state;
  }
}
