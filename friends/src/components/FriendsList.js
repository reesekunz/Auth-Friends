import React from "react";
import { Route, Redirect } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth.js";

import FriendForm from "./FriendForm.js";
import Friend from "./Friend.js";


class FriendsList extends React.Component {
  state = {
    friendsListData: []
  };

  componentDidMount() {
    this.getData();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(response => {
        this.setState({
          friendsListData: response.data
        });
      })
      .catch(error => console.log(error.response));
  };

  addFriends = friend => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(response => {
        this.setState({
          friendsListData: response.data
        });
      })
      .catch(error => console.log(error.response));
  };

  //   editFriends = friend => {
  //     axiosWithAuth().put(`http://localhost:5000/api/friends/${friend.id}`, friend)
  //       .then(response => {
  //           this.setState({
  //             friendsListData: response.data
  //           })

  //       })
  //       .catch(error => console.log(error.response));
  //   };

  //     deleteFriend = id => {
  //     axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
  //     .then(response => {
  //         this.setState({
  //           friendsListData: response.data
  //         })
  //     })
  //     .catch(error => console.log(error.response));
  // };

  render() {
    return (
<div>
        <h2>Friends List</h2>
                {friendsListData.map(friend => (
                  <div className="friends">
                   
                      <div className="friend-name">{friend.name}</div>
                      </div>
              )}}
export default FriendsList;
