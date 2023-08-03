import React from 'react'
import './Topbar.css'
import { Language, NotificationsNone, Settings } from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarwrapper'>
        <div className='topleft'>
            <span className='logo'>Mr.MN</span>
        </div>
            <div className='topright'>
            <div className='topbarIcon'>
                <Language />
            </div>
            <div className='topbarIcon'>
                <Settings/>
            </div>
            <div className='topbarIcon'>
                <NotificationsNone/>
                <span className='topiconbag'>3</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
