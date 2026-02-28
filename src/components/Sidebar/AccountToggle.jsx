import React from 'react'

const AccountToggle = () => {
  return (
    <div className='font-sans border-b mb-4 mt-2 pb-4 border-stone-300'>
      <button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center'>
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className='size-8 rounded shrink-0 bg-violet-500 shadow'
        />
        <div className='text-start'>
          <span className='text-sm font-semibold block'>Tom is loading</span>
          <span className='text-xs block text-stone-500'>tom@hover.dev</span>
        </div>

        <div className='flex flex-col'>
          <i class="ri-arrow-up-s-line translate-y-2"></i>
          <i class="ri-arrow-down-s-line -translate-y-2"></i>

        </div>
      </button>

    </div> 
  )
}

export default AccountToggle