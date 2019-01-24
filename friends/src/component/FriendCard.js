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
                        <h1>FRIEND:</h1>
                        <h3>NAME: {friend.name}</h3>
                        <h3>AGE: {friend.age}</h3>
                        <h3>EMAIL: {friend.email}</h3>
                    </div>
                ))}
            </div>
        )
    }

}

export default FriendCard;
