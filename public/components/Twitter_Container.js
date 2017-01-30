import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserPreview from './UserPreview';

class TwitterContainer extends Component {

  handleSearch(event) {
    let rawName, nameToSearch;
    rawName = event.target.value.toLowerCase();

    // if the user input contains an @ symbol and a space,
    // grab everything between @ and the space
    if (rawName.indexOf('@') >= 0 && rawName.indexOf(' ') >= 0) {

      nameToSearch = rawName.substring(rawName.indexOf('@') + 1, rawName.indexOf(' '));

    } else if (rawName.indexOf('@') >= 0  && rawName.indexOf(' ') < 0) {
      // no space in user input, so grab everything after the @ symbol
      nameToSearch = rawName.substr(rawName.indexOf('@') + 1);

    } else {
      nameToSearch = '';
    }

    // only query Twitter API if user input is two chracters long +
    if (nameToSearch.length >= 2) {
      this.props.searchUsers(nameToSearch);
    } else {
      // clear matchedUsers until input is valid so as
      // not to show old results
      this.props.clearMatchedUsers();
    }
  }

  // selectName is the click handler for when user
  // clicks on one of the search results
  selectName(screen_name) {
    // set value of input tag to the selected user's screen name
    // this assumes that after the input tag's value is the selected
    // user's screen name, the enter key would search for that user
    document.querySelector('#userSearch').value = screen_name;
  }

  renderMatchedUsers() {
    return this.props.matchedUsers.map(user => {
      let { name, screen_name, profile_image_url } = user;
      // pass name, screen_name, user_profile_image **strings**
      return (
        <UserPreview
          selectName={this.selectName.bind(this)}
          key={screen_name}
          name={name}
          screen_name={screen_name}
          profile_image_url={profile_image_url}
        />
      );
    });
  }

  render() {
    return (
      <div id="root-container" className="container">
        <div className="col-lg-6 offset-lg-3">
          <input id="userSearch" placeholder='@SproutSocial' onChange={this.handleSearch.bind(this)}></input>
          <ul id="root-list">
            {this.renderMatchedUsers()}
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  let { matchedUsers } = state.users;
  return { matchedUsers };
};




export default connect(mapStateToProps, actions)(TwitterContainer);
