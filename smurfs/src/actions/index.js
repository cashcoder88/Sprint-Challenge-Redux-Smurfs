/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDING_SMURFS_SUCCESS = 'ADDING_SMURFS_SUCCESS';
export const ADDING_SMURFS_FAILURE = 'ADDING_SMURFS_FAILURE';



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf => getSmurfs
   R - getSmurfs => postSmurfs
  //  U - updateSmurf //
  //  D - deleteSmurf //
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS});
  const requestGet = axios.get('http://localhost:3333/smurfs');
  requestGet.then((res) => {
    console.log(res);
    dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data  })
  })
  .catch(err => {
    console.log(err);
    dispatch({type: FETCHING_SMURFS_FAILURE})
  })
}


export const postSmurfs = (smurf) => dispatch => {
  dispatch({type: ADDING_SMURFS})
  const requestPost = axios.post('http://localhost:3333/smurfs', smurf)
  requestPost.then((res) => {
    console.log(res);
    dispatch({type: ADDING_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log(err);
    dispatch({type: ADDING_SMURFS_FAILURE})
  })
}