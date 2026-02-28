import React from 'react'
import SideBar from "./components/Sidebar/SideBar"
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <>
      <main className='font-sans w-full h-full mx-auto p-4 grid grid-cols-[250px,_1fr] bg-black/10'>
        <SideBar />
        <Dashboard />
      </main>
    </>
  )
}

export default App