import React from 'react'
import WorkItem from './WorkItem';
import EduItem from './EduItem';
import './History.css'
import history from '../lib/history.json'

const History = () => {
    return (
        <div id='History'>
            <div id='workBlock'>{ history.items.map(item => { if (item.type === 'work') return <WorkItem info={item} /> }) }</div>
            <div id='eduBlock'>{ history.items.map(item => { if (item.type === 'edu') return <EduItem info={item} /> }) }</div>
        </div>
    )
}

export default History;