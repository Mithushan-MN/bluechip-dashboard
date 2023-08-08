import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [activeTab,setActiveTab] = useState("Home")
  return (
    <div className='header'>
        <div className='header-wrapper'>
        <p className='logo'>Contact App</p>
        <div className='header-right'>
            <Link to="#">
                <p className={`${activeTab === "Home" ? "active" : ""}`}
                onClick={()=> setActiveTab("Home")}
                >Home</p>
            </Link>
            <Link to="/Customers/addedit">
                <p className={`${activeTab === "AddContact" ? "active" : ""}`}
                onClick={()=> setActiveTab("AddContact")}
                >AddContact</p>
            </Link>
            <Link to='#'>
                <p className={`${activeTab === "About" ? "active" : ""}`}
                onClick={()=> setActiveTab("About")}
                >About</p>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Header
