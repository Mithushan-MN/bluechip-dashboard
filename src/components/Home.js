import { signOut } from 'firebase/auth'
import React from 'react'
import { database } from '../FirebaseConfig'
import { useNavigate,Outlet,Link} from 'react-router-dom'


import Sidebar from './Sidebar'

const Home = () => {

    const history = useNavigate()

    const handleClick = ()=>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }

  return (
    
    <div>
      <Sidebar>
      <h1>home</h1>
      <button onClick={handleClick}>SignOut</button>
      <Link to="/home/dashboard">Dashboard</Link>
      
      </Sidebar>
      <Outlet/>
    </div>
  
  )
}

export default Home
