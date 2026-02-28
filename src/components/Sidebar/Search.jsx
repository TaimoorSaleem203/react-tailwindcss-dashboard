import CommandMenu from './CommandMenu'

const Search = () => {
  return (
    <div className='relative text-sm flex items-center mb-4 bg-stone-300 px-2 rounded-lg py-1'>
        <i className="ri-search-line absolute translate-x-2 text-stone-800"></i>
        <input type="text" placeholder='Search' className='px-7 font-semibold py-2 w-full text-stone-800 bg-transparent focus:outline-none'/>
        <CommandMenu />
    </div>
  )
}

export default Search