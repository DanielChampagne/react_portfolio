import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
//importing the picture as "profilepic".
import profilepic from '../img/me.jpg';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <div>
                    <img src={profilepic} className="profilepic"></img>                
                </div>
                
                <div>
                    <ReactTypingEffect className="typingeffect" text={ ['Hello!' , 'I am Daniel Champagne','I am a Web Developer']} speed={100} eraseDelay={700}/>

                    <Social/>
                </div>
                
            </div>
        )
    }
}

export default Home