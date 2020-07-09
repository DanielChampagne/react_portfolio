import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
//importing the picture as "profilepic".
import profilepic from '../img/me.jpg';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">

                <img src={profilepic} className="profilepic"></img>
                
                <ReactTypingEffect className="typingeffect" text={ ['I am Daniel Champagne','I am a Web Developer']} speed={100} eraseDelay={700}/>

            </div>
        )
    }
}

export default Home