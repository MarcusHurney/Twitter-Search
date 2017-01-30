import * as types from '../actions/ActionTypes';
const INITIAL_STATE = { matchedUsers: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH_USERS:

      // the user object contains many properties,
      // reduce the user object to only contain
      // name, screen_name, and profile_image_url
      let matchedUsers = action.payload.data.users.reduce((condensedUsers, user) => {

        let reducedUser = {};
        reducedUser.name = user.name;
        reducedUser.screen_name = user.screen_name;
        reducedUser.profile_image_url = user.profile_image_url;
        return [ ...condensedUsers, reducedUser ];

      }, []);

      return { matchedUsers };

    // resets state to clear old results
    case types.CLEAR_MATCHED_USERS:
      return INITIAL_STATE;

    default:
      return state;
  }
}
