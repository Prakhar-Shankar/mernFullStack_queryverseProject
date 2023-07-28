import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment.png'
import pen from '../../assests/pen.png'
import blacklogo from '../../assests/blacklogo.png'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overview</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen"  width={18}/>
        <p>User can ask any question they want</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen"  width={18}/>
        <p>Other users can answer the asked questions</p>
        </div>
      </div>

      <h4>Features of Query Verse</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen"  width={18}/>
        <p>User can up vote or down vote a question</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen"  width={18}/>
        <p>User can use tags for their question which will help other users to find similar questions</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen"  width={18}/>
        <p>You can go to users section and visit other user's profile</p>
        </div>
      </div>

      <h4>About the website</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <p>1</p>
        <p>It is completely based on MERN stack</p>
        </div>
        <div className='right-sidebar-div-2'>
        <p>2</p>
        <p>You can delete your question or answer whenever you want</p>
        </div>
        <div className='right-sidebar-div-2'>
        <p>3</p>
        <p>Keep your profile updated with bio and tags watched</p>
        </div>
        
      </div>
    </div>
  )
}

export default Widget
