import React from 'react';
import Me from '../assests/me.jpeg';
import './Introduction.css';

function Introduction() {
    return (
        <div className="navbar navbar-expand" style={{ marginTop : 20 }}>
            <div>
                <img className="photo" src={Me} alt="profile"/>
            </div>
            <div className="intro" style={{marginLeft : 20, color : "black"}} >
                I'm a Computer Science Student, Software Developer, and Competitive Programmer. 
                I like to build full-stack applications, solving complex Software engineering, 
                Data Structure, and Algorithm based problems, and designing highly scalable and 
                highly available systems. I have good knowledge of Computer Science fundamentals 
                including System Design, Computer Networks, Databases, Operating Systems, and 
                Object-Oriented Design. I love to compete in coding competitions and watch anime 
                in my spare time.
            </div>
        </div>
    )
}

export default Introduction
