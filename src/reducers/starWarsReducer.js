import { FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAIL, FETCH_PEOPLE_START } from "../actions";

const initialState = {
  characters: [],
  error: null,
  isFetchSuccess: false,
  fetching: false

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_PEOPLE_START:
      return {
        ...state,
        error: "",
        fetching: true,
        isFetchSuccess: false,
        characters: null
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        fetching: false,
        isFetchSuccess: true,
        characters: action.payload
      }
    case FETCH_PEOPLE_FAIL: 
      return {
        ...state,
        fetching: false,
        isFetchSuccess: false,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
