import React from 'react'
import { twMerge } from 'tailwind-merge'

function Topbar({setOpen}) {
  return (
    <>
    <div onClick={()=>setOpen(state=>!state)} className='absolute left-0 top-2 z-30 block lg:hidden'>
        asdwqe
    </div>
    <div className={`h-12 w-full flex-none bg-green-500 flex justify-between items-center`}>
        <div>
            Home
        </div>
        <div>
            End
        </div>
    </div>
    </>
  )
}

export default Topbar