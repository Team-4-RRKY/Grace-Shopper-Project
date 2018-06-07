import axios from 'axios';
import history from '../history';

const GOT_WATCHES = 'GOT_WATCHES';
const EDITED_WATCH = 'EDITED_WATCH';
const DELETED_WATCH = 'DELETED_WATCH';
const SOLD_WATCH = 'SOLD_WATCH';
const SELECTED_WATCH = 'SELECTED_WATCH';
const FETCHING_WATCHES = 'FETCHING_WATCHES';
const EDITED_MANY_WATCHES = 'EDITED_MANY_WATCHES';
const LISTED_WATCH = 'LISTED_WATCH';

const gotWatches = watches => ({
  type: GOT_WATCHES,
  watches,
});

const deletedWatch = watch => ({
  type: DELETED_WATCH,
  watch,
});

export const deleteWatch = watch => async dispatch => {
  try {
    await axios.delete(`api/watches/${watch.id}`);
    dispatch(deletedWatch(watch));
  } catch (error) {
    console.error(error);
  }
};

const listedWatch = watch => ({
  type: LISTED_WATCH,
  watch,
});

export const listWatch = watch => async dispatch => {
  try {
    const { data } = await axios.post('/api/watches', watch);
    dispatch(listedWatch(data));
  } catch (error) {
    console.error(error);
  }
};

export const selectedWatch = watch => ({
  type: SELECTED_WATCH,
  watch,
});

export const fetchingWatches = () => ({
  type: FETCHING_WATCHES,
});

export const getWatches = () => async dispatch => {
  dispatch(fetchingWatches());
  try {
    const { data } = await axios.get('/api/watches');
    dispatch(gotWatches(data));
  } catch (error) {
    console.error(error);
  }
};

const intitialState = { isFetching: false, watches: [], watch: {} };

const watchReducer = (state = intitialState, action) => {
  switch (action.type) {
    case GOT_WATCHES:
      return { ...state, watches: action.watches, isFetching: false };
    case FETCHING_WATCHES:
      return { ...state, isFetching: true };
    case SELECTED_WATCH:
      return { ...state, watch: action.watch };
    case LISTED_WATCH:
      return { ...state, watches: [...state.watches, action.watch] };
    case DELETED_WATCH:
      return {
        ...state,
        watches: state.watches.filter(e => e.id !== action.watch.id),
      };
    default:
      return state;
  }
};

export default watchReducer;
