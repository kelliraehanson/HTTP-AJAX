import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import FriendCard from './component/FriendCard';
import './App.css';
import FriendForm from './component/FriendForm';

const baseUrl = 'http://localhost:5000/friends';

const clearedFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: clearedFriend
    };
  }

  componentDidMount() {
    axios
    .get(`${baseUrl}/friends`)
    .then(response => {
      console.log(response.data);
      this.setState({ friends: response.data });

      })

      .catch(err => { console.log(err);
      });
  }  

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
    })
  }


  addNewFriend = friend => {

    axios
    .post('http://localhost:5000/friends', friend) //the url can look like this or like it does above
    .then(response => {
      console.log(response.data);
      console.log(friend);
      this.setState({friends : response.data})

    })

    .catch(err => {console.log(err)
    })

  }

  deleteFriend = friend => {
    
    axios
    .delete('http://localhost:5000/friends', friend)
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">

      {/* <Link to='/'></Link>
      <Route
      path='/'
      render={props =>
      <FriendCard
    {...props}
    friendCard={this.state.friendCard}
  />} */}

       <span>ADD A FRIEND:</span>
       <FriendForm addNewFriend={this.addNewFriend} />
       
       <FriendCard friends={this.state.friends} />
      
      </div>
    )
  }



} 

export default App;
