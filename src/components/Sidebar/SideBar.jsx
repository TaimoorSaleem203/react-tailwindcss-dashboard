import React from 'react'
import AccountToggle from './AccountToggle'

const SideBar = () => {
  return (
    <aside>
      <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-1rem)]'>
        <AccountToggle />
      </div>
    </aside>
  )
}

export default SideBar