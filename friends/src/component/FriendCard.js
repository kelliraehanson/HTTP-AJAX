import React, { Component } from 'react';

class FriendCard extends Component{
    constructor(props){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div className='friendCard'>
                {this.props.friends.map(friend => (
                    <div className="friends">
                        <h1>Friend:</h1>
                        <h3>Name: {friend.name}</h3>
                        <h3>Age: {friend.age}</h3>
                        <h3>Email: {friend.email}</h3>
                        <h3>Key: {friend.id}</h3>
                    </div>
                ))}
            </div>
        )
    }

}

export default FriendCard;
