import React from 'react'

function Container({children}) {
    const [left, right] = children
  return (
    <div className='grid grid-cols-12 '>
        <div className='col-span-3 md:col-span-2'>{left}</div>
        <div className='col-span-9 md:col-span-10'>{right}</div>
    </div>
  )
}

export default Container