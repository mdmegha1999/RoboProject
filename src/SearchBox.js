import React from 'react'
import './App.css'
export default function SearchBox({onInputChange}) {
    return (
        <div className='sbox'>
            <input 
                type='text' 
                placeholder="Search Robots" 
                
                onChange={(event) => onInputChange(event.target.value)}/>
        </div>
    )
}