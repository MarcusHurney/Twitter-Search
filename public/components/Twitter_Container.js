import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserPreview from './UserPreview';

class TwitterContainer extends Component {
  // processInput(userInput) {
  //   function Name(rawText) {
  //     this.rawText = rawText;
  //     this.containsAtSymbol = (this.rawText.indexOf('@') >= 0);
  //     this.containsSpace = (this.rawText.indexOf(' ') >= 0);
  //     this.isTwoLong = (this.rawText.length > 0);
  //   }
  // }
  handleSearch(event) {
    let rawName, nameToSearch;
    rawName = event.target.value

    // if the user input contains a space
    if (rawName.indexOf(' ') > 1 && rawName.indexOf('@') >= 0) {
      // grab everything from the @ symbol up to the space
      nameToSearch = rawName.substr(rawName.indexOf('@') + 1, rawName.indexOf(' '));
    } else if (rawName.indexOf('@') >= 0) {
      // does not contain a space, so grab everything after the @ symbol
      nameToSearch = rawName.substr(rawName.indexOf('@') + 1);
    } else {
      nameToSearch = '';
    }

    // must be longer than 2 characters to trigger results
    // a space does NOT count as a character
    if (nameToSearch.length >= 2 && nameToSearch.indexOf(' ') < 0) {
      this.props.searchUsers(nameToSearch);
      console.log(nameToSearch);
    } else {
      // clear matchedUsers until input is valid
      this.props.clearMatchedUsers();
    }

  }

  renderMatchedUsers() {
    return this.props.matchedUsers.map(user => {
      let { name, screen_name, profile_image_url } = user;
      // pass name, screen_name, user_profile_image **strings**
      return (
        <UserPreview
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
      <div>
        <input onChange={this.handleSearch.bind(this)}></input>
        <ul>
          {this.renderMatchedUsers()}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  let { matchedUsers } = state.users;
  return { matchedUsers };
};




export default connect(mapStateToProps, actions)(TwitterContainer);
