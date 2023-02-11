import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='px-8 md:px-16 lg:px-36'>
        {children}
    </div>
  )
}

export default Layout