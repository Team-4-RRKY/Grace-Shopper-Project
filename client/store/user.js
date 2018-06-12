import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER';
const REMOVE_USER = 'REMOVE_USER';
const ADDED_TO_CART = 'ADDED_TO_CART';
const ADDED_TO_GUEST_CART = 'ADDED_TO_GUEST_CART';
const EDITEDUSER = 'EDITEDUSER';
const REMOVED_FROM_CART = 'REMOVED_FROM_CART';
const GOT_GUEST_CART = 'GOT_GUEST_CART';
const GOT_USER_AND_MERGED_CART = 'GOT_USER_AND_MERGED_CART';
const PURCHASED = 'PURCHASED';

/**
 * INITIAL STATE
 */
const initialState = { user: {}, guestCart: [], recentlyPurchased: [] };

/**
 * ACTION CREATORS
 */
const gotUser = user => ({ type: GOT_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const editedUser = editedData => ({
  type: EDITEDUSER,
  editedData,
});
const addedToCart = watch => ({ type: ADDED_TO_CART, watch });
const removedFromCart = watch => ({ type: REMOVED_FROM_CART, watch });
const gotGuestCart = cart => ({ type: GOT_GUEST_CART, cart });
const gotUserAndMergedCart = user => ({ type: GOT_USER_AND_MERGED_CART, user });
const purchased = (items, user) => ({ type: PURCHASED, items, user });

/**
 * THUNK CREATORS
 */

export const getGuestCart = () => dispatch => {
  let str = localStorage.cartItems || undefined;
  let arr = str ? JSON.parse(str) : [];
  dispatch(gotGuestCart(arr));
};

export const addToGuestCart = (watch, guestCart) => dispatch => {
  // localStorage.removeItem('cartItems');
  const arr = guestCart.slice();
  const watchIndex = arr.findIndex(e => e.id === watch.id);
  if (watchIndex > -1) {
    arr[watchIndex].cart.quantity++;
  } else {
    watch.cart = { quantity: 1 };
    arr.push(watch);
  }
  arr.sort((a, b) => (a.id > b.id ? -1 : 1));
  dispatch(gotGuestCart(arr));
  localStorage.cartItems = JSON.stringify(arr);
  // localStorage.removeItem('cartItems');
};

export const updateGuestCart = (watch, guestCart, num) => dispatch => {
  const arr = guestCart.slice();
  const watchIndex = arr.findIndex(e => e.id === watch.id);
  arr[watchIndex].cart.quantity += num;
  arr.sort((a, b) => (a.id > b.id ? -1 : 1));
  dispatch(gotGuestCart(arr));
  localStorage.cartItems = JSON.stringify(arr);
};

export const removeFromGuestCart = (watch, guestCart) => dispatch => {
  const arr = guestCart.slice();
  const watchIndex = arr.findIndex(e => e.id === watch.id);
  arr.splice(watchIndex, 1);
  arr.sort((a, b) => (a.id > b.id ? -1 : 1));
  dispatch(gotGuestCart(arr));
  if (!arr.length) {
    localStorage.removeItem('cartItems');
  } else {
    localStorage.cartItems = JSON.stringify(arr);
  }
};

export const editUserData = editData => async dispatch => {
  try {
    const { data } = await axios.put(`/api/users/${editData.id}`, editData);
    console.log(data);
    dispatch(editedUser(data));
    history.push('/user');
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = cartData => async dispatch => {
  const { userId } = cartData;
  try {
    const { data } = await axios.post(`/api/users/${userId}/cart`, cartData);
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
  }
};

export const removeFromCart = cartData => async dispatch => {
  const { userId } = cartData;
  try {
    const { data } = await axios.delete(`/api/users/${userId}/cart`, {
      data: cartData,
    });
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
  }
};

export const postPayment = (token, amount, user) => async dispatch => {
  try {
    const { data } = await axios.post('/api/stripe', { token, amount, user });
    localStorage.removeItem('cartItems');
    dispatch(purchased(data.cartItems, data.user));
    history.push('/checkoutconfirmation');
  } catch (error) {
    console.error(error);
  }
};

const mergeCarts = user => async dispatch => {
  try {
    const { id } = user;
    const localCart = JSON.parse(localStorage.cartItems);
    const { data } = await axios.post(`/api/users/${id}/cart/merge`, localCart);
    localStorage.removeItem('cartItems');
    dispatch(gotUserAndMergedCart(data));
  } catch (error) {
    console.error(error);
  }
};

export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => {
      if (localStorage.cartItems && res.data) {
        dispatch(mergeCarts(res.data));
      } else {
        dispatch(gotUser(res.data || initialState.user));
      }
    })
    .catch(err => console.log(err));

export const auth = (userData, method) => dispatch =>
  axios
    .post(`/auth/${method}`, userData)
    .then(
      res => {
        if (localStorage.cartItems && res.data) {
          dispatch(mergeCarts(res.data));
        } else {
          dispatch(gotUser(res.data));
          history.push('/home');
        }
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(gotUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const logout = () => dispatch =>
  axios
    .post('/auth/logout')
    .then(_ => {
      dispatch(removeUser());
      history.push('/login');
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_USER:
      return { ...state, user: action.user };
    case REMOVE_USER:
      return { ...state, user: {} };
    case EDITEDUSER:
      return { ...state, user: action.editData };
    case GOT_GUEST_CART:
      return { ...state, guestCart: action.cart };
    case GOT_USER_AND_MERGED_CART:
      return { ...state, guestCart: [], user: action.user };
    case PURCHASED:
      return {
        ...state,
        recentlyPurchased: action.items,
        user: action.user,
        guestCart: [],
      };
    default:
      return state;
  }
}
