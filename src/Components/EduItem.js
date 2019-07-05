import React from 'react';
import './EduItem.css';

const EduItem = props => {
    const { image, name, date, detail, description } = props.info
    return (
        <div className='item'>
            <img src={ `${process.env.PUBLIC_URL}/images/${image}` } />
            <div>
                <h2>{ name }</h2>
                <span>{ date }</span>
                { linkOrNo(detail) }
            </div>
            <p>{ description ? description : null }</p>
        </div>
    )
}

function linkOrNo(detail) {
    if (detail.length > 1) {
        return <h6><a href={`'${ detail[1] }'`}>{ detail[0] }</a></h6>
    } else {
        return <h6>{ detail[0] }</h6>
    }
}

export default EduItem;