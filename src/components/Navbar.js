import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={` navNav navbar-${props.mode} bg-${props.mode}`}>
        <div >
          <Link className="nav-title" to="/">{props.title}</Link>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'lighyt' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
        </div>
      </nav>
    </>
  )
}
