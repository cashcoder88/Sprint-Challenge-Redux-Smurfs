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

}

export const postSmurfs = () => dispatch => {

}