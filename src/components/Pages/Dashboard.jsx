import React from 'react'
import Sidebar from '../Sidebar'
import './Dashboard.css'
import Maindash from '../Maindash/Maindash'
import Rightside from '../Rightside/Rightside'
import { database } from '../../FirebaseConfig'
import { useNavigate,Outlet} from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Dashboard = () => {

  const history = useNavigate()

  const handleClick = ()=>{
      signOut(database).then(val=>{
          console.log(val,"val")
          history('/')
      })
  }

  return (
   
      <Sidebar>
      <h1>dashboard</h1>
      <div className='dashboarddiv'>
        <div>
        <Maindash/>
        </div>
      
      <Rightside/>
      </div>

      <Outlet/>
      </Sidebar>
     
   
  )
}

export default Dashboard
