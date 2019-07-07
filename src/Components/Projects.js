import React from 'react'
import Project from './Project';
import './Projects.css'
import projects from '../lib/projects.json'

class Projects extends React.Component {
    state = { displayed: null }

    updateDisplayed = displayed => this.setState({ displayed })

    render() {
        return (
            <div id='Projects'>
                <div id='projectBlock'>
                    <h1>Projects</h1>
                    { projects.items.map(item => 
                        <Project info={item} 
                                displayed={this.state.displayed}
                                updateDisplayed={this.updateDisplayed
                        }/>
                    )}
                </div>
            </div>
        )
    }
}

export default Projects;