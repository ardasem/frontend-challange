import React from 'react'
import './darkmodeswitch.css'

function DarkModeSwitch() {
  return (
   <div className = 'toggle-switch'>
            <label className='switch-label'>
                <input type = 'checkbox'/>
                <span className = 'slider'></span>
            </label>
          
        </div>
  )
}

export default DarkModeSwitch