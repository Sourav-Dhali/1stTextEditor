import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid ">
        <Link className="navbar-brand nav-title" to="/">{props.title}</Link>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
          <div className={`form-check form-switch text-${props.mode==='lighyt'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeIs}</label> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
