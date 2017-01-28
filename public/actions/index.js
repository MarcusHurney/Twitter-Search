import axios from 'axios';
import * as types from './ActionTypes';

export const searchUsers = userName => {
  const request = axios.get(`/twitter/user/search?username=${userName}`);

  return {
    type: types.SEARCH_USERS,
    payload: request
  };
};

export const clearMatchedUsers = () => {
  return {
    type: types.CLEAR_MATCHED_USERS
  };
}
