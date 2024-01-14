import React from 'react'
import { Navbar} from 'flowbite-react'
import { NavLink } from 'react-router-dom' 

const Nav = () => {
  return (
    <div className='sticky-top ' >

   <Navbar className='fluid sticky-top  bg-black'>
      
      <h4 className=" fw-bold self-center whitespace-nowrap text-white text-xl font-semibold mt-1"><i className="fa-solid fa-book text-danger mr-2 "></i>My Manga</h4>
      
      <Navbar className='mx-auto bg-black'>
       <NavLink to='/home'  style={{textDecoration:'none'}}>
        <span className='text-white fw-bold mr-5' style={{fontSize:'14px'}}>Home</span>
       </NavLink>
       <NavLink to='/menu' style={{textDecoration:'none'}}>
        <span className='text-white fw-bold ml-5 mr-5'  style={{fontSize:'14px'}}>For You</span>
       </NavLink>
       <NavLink to='/contact' style={{textDecoration:'none'}}>
        <span className='text-white fw-bold ml-5 mr-5'  style={{fontSize:'14px'}}>Popular</span>
       </NavLink>

       <NavLink to='/about' style={{textDecoration:'none'}}>
        <span className='text-white fw-bold ml-5 mr-5'  style={{fontSize:'14px'}}>All Books</span>
       </NavLink>
       
      </Navbar>

     <NavLink>
        <button className='btn btn-danger btn-sm mr-3' type="button">Login</button>
     </NavLink>
     <NavLink to=''><button type="button"><i className="fa-solid fa-bars text-white fs-4 ml-3 mr-2"></i></button></NavLink>
     
      
       </Navbar>




        </div>
  )
}

export default Nav