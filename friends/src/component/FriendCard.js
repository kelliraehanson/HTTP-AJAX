import React from 'react';

const FriendCard = props => {
    console.log(props)
    return(
        <div className="friendCard">
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        <h3>Email: {props.email}</h3>
        
        </div>
    )
}

export default FriendCard;