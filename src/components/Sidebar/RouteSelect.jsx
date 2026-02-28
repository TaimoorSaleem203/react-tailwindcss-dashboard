import React, { useState } from 'react'

const RouteSelect = () => {

    const icons = [
        { id: 1, title: "Dashboard", icon: "ri-home-5-line" },
        { id: 2, title: "Team", icon: "ri-group-line" },
        { id: 3, title: "Invoices", icon: "ri-attachment-2" },
        { id: 4, title: "Integrations", icon: "ri-tools-line" },
        { id: 5, title: "Finance", icon: "ri-money-dollar-circle-fill" }
    ]

    const [selected, setSelected] = useState(null)

    const setToggle = (index) => {
        setSelected(selected == index ? null : index)
    }

    return (
        <div className='mt-5 flex flex-col items-start gap-2 font-sans'>
            {icons.map((item, index) => {
                const isOpen = index == selected
                return (
                    <button onClick={() => setToggle(index)} className={`w-full p-2 py-2 transiiton-all duration-150 rounded-lg flex items-center gap-2 ${isOpen ? "bg-white text-black shadow font-semibold" : "bg-transparent shadow-none hover:bg-stone-300 text-stone-700"}`}>
                        <i className={`${item.icon}`}></i>
                        {item.title}</button>
                )
            })}
        </div>
    )
}

export default RouteSelect