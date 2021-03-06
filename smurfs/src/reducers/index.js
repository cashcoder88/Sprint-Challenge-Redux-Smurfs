/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURFS, ADDING_SMURFS_SUCCESS, ADDING_SMURFS_FAILURE} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: 'ERROR WITH FETCHING'
      }
    case ADDING_SMURFS:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADDING_SMURFS_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADDING_SMURFS_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: "ERROR WITH ADDING"
      }
    default:
      return state;
  }
};