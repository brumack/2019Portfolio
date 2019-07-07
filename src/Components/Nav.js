import React from 'react'
import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div id='nav'>
                <a href='#' onClick={() => this.props.changeView('profile')}>
                    <div class='navIcon'>
                        <i class="fas fa-user-ninja"></i>
                    </div>
                </a>
                <a href='#' onClick={() => this.props.changeView('projects')}>
                    <div class='navIcon'>
                        <i class="fas fa-code"></i>
                    </div>
                </a>
                <a href='#' onClick={() => this.props.changeView('history')}>
                    <div class='navIcon'>
                        <i class="fas fa-history"></i>
                    </div>
                </a>
                <a href='https://github.com/brumack' target='_blank' rel='noopener noreferrer'>
                    <div class='navIcon'>
                        <i class="fab fa-github"></i>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/bradleyrumack' target='_blank' rel='noopener noreferrer'>
                    <div class='navIcon'>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </a>
                <a href='#'>
                    <div class='navIcon'>
                        <i class="fas fa-phone"></i>
                    </div>
                </a>
            </div>
        )
    }
}

export default Nav