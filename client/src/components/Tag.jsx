import React from 'react'

const Tag = ({className}) => {
  return (
    <button className={`rounded-full border-gray-500 border px-5 py-1 text-xs transition-all hover:bg-slate-400 hover:border-transparent ${className}`}>
        Desenvolvimento
    </button>
  )
}

export default Tag