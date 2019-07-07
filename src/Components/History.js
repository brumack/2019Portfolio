import React from 'react'
import WorkItem from './WorkItem';
import EduItem from './EduItem';
import './History.css'
import './HistoryItem.css'
import history from '../lib/history.json'

const History = () => {
    return (
        <div id='History'>
            <div id='workBlock'>
                <h1>Work History</h1>
                { history.items.map(item => { if (item.type === 'work') return <WorkItem info={item} /> }) }
            </div>
            <div id='eduBlock'>
            <h1>Education</h1>
                { history.items.map(item => { if (item.type === 'edu') return <EduItem info={item} /> }) }
            </div>
        </div>
    )
}

export default History;