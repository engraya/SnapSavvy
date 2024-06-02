import React from 'react'

const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <>
    <div className='flex justify-center items-center'>
      <h2 className="h2-bold text-dark-600 bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">{title}</h2>

    </div>
    {subtitle && <p className="p-16-regular mt-4 text-slate-100 text-center">{subtitle}</p>}
    </>
  )
}

export default Header