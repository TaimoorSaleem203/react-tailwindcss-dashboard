import { Command } from 'cmdk'
import { useState , useEffect } from 'react'

const CommandMenu = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu" className='fixed inset-0 bg-stone-950/50'>
      <div onClick={(e)=>e.stopPropagation()} className='bg-white rounded-lg max-w-lg mx-auto mt-12 overflow-hidden p-1 w-full shadow-xl border border-stone-200'>
        <Command.Input value={value} onValueChange={setValue} className='border-b border-stone-200 w-full relative p-3 text-lg focus:outline-none' placeholder='What do you need?' />
        <Command.List className='px-4 mb-2 mt-3'>
            <Command.Empty>No results found for{" "} <span className='text-violet-800'>"{value}"</span></Command.Empty>

            <Command.Group heading="Team">
            <Command.Item>a</Command.Item>
            <Command.Item>b</Command.Item>
            <Command.Separator />
            <Command.Item>c</Command.Item>
            </Command.Group>

            <Command.Item>Apple</Command.Item>
        </Command.List>

      </div>
    </Command.Dialog>
  )
}


export default CommandMenu