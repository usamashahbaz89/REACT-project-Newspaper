import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Switch from './Switch'


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.navbar} bg-${this.props.navbar}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Newspaper</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3" to="/health">Health</Link>
                                </li>

                            </ul>
                            <div className='switch'>
                            <Switch className='mx-3' darkMode={this.props.darkMode} />
                            </div>
                            <div className='navbar-img'>
                            <img src="Logo.png" alt="Logo" width="80" height="60" className="d-inline-block align-text-top" style={{ marginRight: "50px", cursor: 'pointer' }}></img>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
