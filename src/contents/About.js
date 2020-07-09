import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/me.jpg';

class XYZ extends Component {
    render() {
        return (
            <img src={profilepic} className="profilepic"></img>
        )
    }
}

export default XYZ
