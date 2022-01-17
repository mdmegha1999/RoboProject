import React from 'react';
import './App.css';

export default function Card({id, name, email, age}) {

return(
    
    <div className="robocard">
        
        <img src={`https://robohash.org/set_set4/${id}`} alt="profile_img_robot"/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <h4>{age}</h4>
        </div>
    </div>
    
)
}