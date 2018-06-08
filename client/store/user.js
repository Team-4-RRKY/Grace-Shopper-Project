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

/**
 * INITIAL STATE
 */
const initialState = { user: {}, guestCart: [] };

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

/**
 * THUNK CREATORS
 */

export const editUserData = editData => async dispatch => {
  try {
    const { data } = await axios.put(`/api/users/${editData.id}`, editData);
    console.log(data);
    dispatch(editedUser(data));
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
    const { data } = await axios.delete(`/api/users/${userId}/cart`);
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
  }
};

export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(gotUser(res.data || defaultUser)))
    .catch(err => console.log(err));

export const auth = (userData, method) => dispatch =>
  axios
    .post(`/auth/${method}`, userData)
    .then(
      res => {
        dispatch(gotUser(res.data));
        history.push('/home');
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
    // case ADDED_TO_CART:
    //   return { ...state, user: action.user };
    case EDITEDUSER:
      return { ...state, user: action.editData };
    default:
      return state;
  }
}
