import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import FriendCard from './component/FriendCard';
import './App.css';
import FriendForm from './component/FriendForm';

const baseUrl = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
    .get(`${baseUrl}/friends`)
    .then(response => {
      console.log(response.data);
      this.setState({ 
        friends: response.data 
      });

      })

      .catch(err => {
        console.log(err);

      });
  }  
      
    //   this.setState({ friends: response.data }))
    // .catch(err => console.log(err))


  addNewFriend = friend => {

    axios
    .post('http://localhost:5000/friends', friend)
    .then(response => {
      console.log(response.data);
      console.log(friend);
      this.setState({friends : response.data})

    })

    .catch(err => {console.log(err)
    })

  }

  render() {
    return (
      <div className="App">
       <span>Add a Friend:</span>
       <FriendForm addNewFriend={this.addNewFriend} />
       <span>List of Friends:</span>
       <FriendCard friends={this.state.friends} />
      
      </div>
    )
  }



} 

export default App;
