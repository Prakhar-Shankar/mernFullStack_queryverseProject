import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assests/globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' className='side-nav-links' activeclassname='active' >
            <img src={Globe} alt="Globe" className='img-globe'/>
            <p style={{paddingLeft:"10px"}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeclassname='active'  >
              <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft:"20px"}}>
              <p>Users</p>
          </NavLink>
        </div>
      </nav>
      
    </div>
  )
}

export default LeftSidebar
