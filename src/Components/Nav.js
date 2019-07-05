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
                <a href='#'>
                    <div class='navIcon'>
                        <i style={{'color': '#9c00c7'}} class="fas fa-code"></i>
                    </div>
                </a>
                <a href='#' onClick={() => this.props.changeView('history')}>
                    <div class='navIcon'>
                        <i style={{'color': '#FFA600'}} class="fas fa-history"></i>
                    </div>
                </a>
                <a href='https://github.com/brumack'>
                    <div class='navIcon'>
                        <i style={{'color': '#6CC644'}} class="fab fa-github"></i>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/bradleyrumack'>
                    <div class='navIcon'>
                        <i style={{'color': '#0077B5'}} class="fab fa-linkedin"></i>
                    </div>
                </a>
                <a href='#'>
                    <div class='navIcon'>
                        <i style={{'color': '#D1002A'}} class="fas fa-phone"></i>
                    </div>
                </a>
            </div>
        )
    }
}

export default Nav