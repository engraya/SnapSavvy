import React from 'react'

const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="flex flex-col gap-1.5 mb-6">
      <h2 className="h2-bold gradient-accent-text">{title}</h2>
      {subtitle && (
        <p className="p-16-regular text-slate-500 dark:text-slate-400 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Header
