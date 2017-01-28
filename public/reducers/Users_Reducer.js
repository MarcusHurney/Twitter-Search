import * as types from '../actions/ActionTypes';
const INITIAL_STATE = { matchedUsers: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH_USERS:

      let matchedUsers = action.payload.data.users.reduce((condensedUsers, user) => {

        let reducedUser = {};
        reducedUser.name = user.name;
        reducedUser.screen_name = user.screen_name;
        reducedUser.profile_image_url = user.profile_image_url;
        return [ ...condensedUsers, reducedUser ];

      }, []);

      return { matchedUsers };

    case types.CLEAR_MATCHED_USERS:
      return INITIAL_STATE;

    default:
      return state;
  }
}
