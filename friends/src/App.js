import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import FriendCard from './component/FriendCard';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      error: ''
    };
  }

  componentDidMount() {
    axios('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data }))
    .catch(err => console.log(err))

  }


  render() {

    return (
    <div className="App">

      {this.state.friends.map (friend => {

        return(

        <div className="friends">
        <h1>Friend:</h1>

          <Link to={`/friends/${friend.id}`}>

          <div className="friendsInfo">
          <FriendCard 
            name = {friend.name}
            age = {friend.age}
            email = {friend.email}
            key = {friend.id} />
          </div>


          </Link>
        </div>

        )

      })}
      
      
    </div> 

    )
  } 



} 

export default App;
