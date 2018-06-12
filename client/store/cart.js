import axios from 'axios';
import history from '../history';

const POST_SINGLE_PAYMENT = 'POST_SINGLE_PAYMENT';

const postSinglePayment = emptyCart => ({
  type: POST_SINGLE_PAYMENT,
  emptyCart
});

export const postPayment = (token, amount) => async dispatch => {
  try {
    console.log('before zzzzzzzzz');
    const { data } = await axios.post('/api/stripe', { token, amount });
    console.log('after herezzzzzzzzz', data);
    /* dispatch(postSinglePayment(data)); */
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
