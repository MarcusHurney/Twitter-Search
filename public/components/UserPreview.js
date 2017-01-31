import React, { PropTypes } from 'react';

// stateless component where props are destructured as params
const UserPreview = ({ name, screen_name, profile_image_url, selectName }) => {
  return (
    <li className="matched-user" onClick={() => selectName(`@${screen_name}`)}>
      <ul>
        <li>
          <img src={profile_image_url} />
        </li>

        <li>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </li>

        <li className="screen_name">@{screen_name}</li>

        <li className="name">{name}</li>
      </ul>
    </li>
  );
};

UserPreview.propTypes = {
  name: PropTypes.string,
  screen_name: PropTypes.string,
  profile_image_url: PropTypes.string,
  selectName: PropTypes.func
};

export default UserPreview;
