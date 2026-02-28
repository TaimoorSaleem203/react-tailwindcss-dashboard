
const Plan = () => {
  return (
    <div className='font-sans sticky top-[calc(100vh-5rem)] flex flex-col h-12 border-t border-stone-300 justify-end text-xs'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-bold'>Enterprise</p>
                <p className='text-stone-500'>Pay as you go</p>
            </div>
            <button className="bg-stone-400 transition-all duration-150 hover:bg-stone-500 active:scale-95 text-white p-2 px-3 rounded-lg mr-2">Support</button>
        </div>
    </div>
  )
}

export default Plan