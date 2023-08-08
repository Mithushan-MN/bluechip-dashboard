import React,{useState} from 'react'
import {FaRegChartBar,FaThList, FaShoppingBag, FaTh, FaUserAlt, FaBars,FaArrowAltCircleLeft,} from "react-icons/fa"
import { NavLink, Link} from 'react-router-dom'



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen]=useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/products",
            name:"Products",
            icon:<FaShoppingBag/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:< FaRegChartBar/>
        },
        
        {
            path:"/customers",
            name:"Customers",
            icon:<FaUserAlt/>
        },
        {
            path:"/order",
            name:"Order",
            icon:<FaThList/>
        },
      
       
        
    ]


  return (
    <div className='container'>
      <div style={{width:isOpen ? "250px":"50px"}} className='sidebar'>
        <div className='top_section'>
            {/* <h1 style={{display:isOpen ? "block":"none"}} className='logo'>logo</h1> */}
            <div style={{marginLeft:isOpen ? "150px":"0px"}} className='bars'>
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div style={{display:isOpen ? "block":"none"}} className='link-text'>{item.name}</div>
                </NavLink>
            ))
        }

        <div className='logoutbtn'>
            <Link to='/'>
            <FaArrowAltCircleLeft className='lgtbtn'/> 
            </Link>
        </div>

      </div>

      <div className='contents'>
      <main>{children}</main>
      </div>
    
      
    </div> 
  )
}

export default Sidebar
