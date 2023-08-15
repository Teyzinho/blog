import React from 'react'

const FormInput = ({type , placeholder, setValue, value, disabled}) => {
  return (
    <input 
        type={type} 
        placeholder={placeholder}
        className='px-2 py-2 rounded-lg border border-gray-500'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
    />
  )
}

export default FormInput