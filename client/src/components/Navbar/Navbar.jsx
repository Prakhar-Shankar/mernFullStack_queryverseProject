import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assests/logo.png'
import search from '../../assests/search.svg'
import Avatar from '../../components/Avatar/Avatar' // we are importing Avatar from the folder we created and we will use the .jsx file of Avatar in our code

import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const navbar = () => {

    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleLogout = () =>{
        dispatch({type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

  return (
   <nav className='main-nav'>
    <div className='navbar'>
    <Link to='/' className='nav-item nav-logo'>
        <img src={logo} alt="logo" width="80" />
    </Link>
    <Link to='/' className='nav-item nav-btn'>About</Link>
    <Link to='/' className='nav-item nav-btn'>Products</Link>
    <Link to='/' className='nav-item nav-btn'>For Teams</Link>
    <form>
        <input type="text" placeholder='Search...' />
        <img src={search} alt="search" width="14" className='search-icon' />
    </form>
   
    { User === null ? 
   
 
   <Link to='/Auth' className='nav-item nav-link'>Log In</Link>:  // the button will be set to 'login' untill the user === null, as soon as the value of user changes to anything except from null the value of button will get changes to 'logout'
    //react fragment  
   <> 
      <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white' ><Link to={`/Users/${User?.result?._id}`} style={{color:"white"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> 
      <button className='nav-item nav-link' onClick={handleLogout}>Log Out</button>
   </>
    }

    </div>
   </nav>



  )
}

export default navbar
