import React from 'react';

const UserPreview = ({ name, screen_name, profile_image_url }) => {
  return (
    <li>
      <ul>
        <li>{name}</li>
        <li>{screen_name}</li>
        <li>
          <img src={profile_image_url} />
        </li>
      </ul>
    </li>
  );
};

export default UserPreview;
