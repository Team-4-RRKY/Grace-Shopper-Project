import axios from "axios";
import history from "../history";

const GOT_WATCHES = "GOT_WATCHES";
const EDITED_WATCH = "EDITED_WATCH";
const DELETED_WATCH = "DELETED_WATCH";
const SOLD_WATCH = "SOLD_WATCH";
const SELECTED_WATCH = "SELECTED_WATCH";
const FETCHING_WATCHES = "FETCHING_WATCHES";
const EDITED_MANY_WATCHES = "EDITED_MANY_WATCHES";
const POSTED_WATCH = "POSTED_WATCH";

export const gotWatches = watches => ({
  type: GOT_WATCHES,
  watches
});

export const selectedWatch = watch => ({
  type: SELECTED_WATCH,
  watch
});

export const fetchingWatches = () => ({
  type: FETCHING_WATCHES
});

export const getWatches = () => async dispatch => {
  dispatch(fetchingWatches());
  try {
    const { data } = await axios.get('api/watches');
    dispatch(gotWatches(data));
  } catch (error) {
    console.log(error);
  }
};

const intitialState = { isFetching: false, watches: [], watch: {} };

export default function(state = intitialState, action) {
  switch (action.type) {
    case GOT_WATCHES:
      return { ...state, watches: action.watches, isFetching: false };
    case FETCHING_WATCHES:
      return { ...state, isFetching: true };
    case SELECTED_WATCH:
      return { ...state, watch: action.watch };
    default:
      return state;
  }
}
