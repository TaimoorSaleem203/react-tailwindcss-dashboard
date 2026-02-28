import AccountToggle from './AccountToggle'
import Search from './Search'
import RouteSelect from './RouteSelect'
import Plan from './Plan'

const SideBar = () => {
  return (
    <aside>
      <div className='overflow-y-scroll sticky px-1 top-4 h-[calc(100vh-1rem)]'>
        <AccountToggle />
        <Search />
        <RouteSelect />
        <Plan />
      </div>
    </aside>
  )
}

export default SideBar