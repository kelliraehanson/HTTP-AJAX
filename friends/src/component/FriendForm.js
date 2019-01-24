import React, { Component } from 'react';

class FriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: {
                name: '',
                age: '',
                email: ''
            }

        }
    }

    handleChange = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        this.props.addNewFriend(this.state.friends);
        this.setState({
            friends: {
                name: '',
                age: '',
                email: '',

            }
        });
    }

    render() {

        return(
            <div>
                <form onSubmit={this.addFriend}>

                <input 
                type='text'
                name='name' 
                placeholder='Name' 
                value={this.state.friends.name}
                onChange={this.handleChange}
                />

                <input 
                type='number'
                name='age' 
                placeholder='Age' 
                value={this.state.friends.age}
                onChange={this.handleChange}
                />

                <input 
                type='text'
                name='email' 
                placeholder='Email' 
                value={this.state.friends.email}
                onChange={this.handleChange}
                />

                <div className="submit">
                <button type='submit' value='Submit' />
                </div>

                </form>


            </div>
        )
    }
}

export default FriendForm;