import React from 'react';
import './WorkItem.css';

const WorkItem = props => {
    const { image, name, date, detail, description } = props.info
    return (
        <div className='item'>
            <img src={ `${process.env.PUBLIC_URL}/images/${image}` } />
            <div>
                <h2>{ name }</h2>
                <span>{ date }</span>
                <h6>{ detail }</h6>
            </div>
            <p>{ description }</p>
        </div>
    )
}

export default WorkItem;