import React from 'react'
import './Project.css'

const Project = props => {
    const { name, long_description, repo, live, icon } = props.info;
    
    return (
        <div className='item'>
            <img src={ icon } />
            <div class='title'>
                <h2>{ name }</h2>
            </div>
            <p>{ long_description }</p>
        </div>  
    )
}

export default Project
