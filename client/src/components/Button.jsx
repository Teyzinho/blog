
const Button = ({children , className, onClick }) => {
  return (
    <button 
      onClick={onClick || (() => {})}
      className={`px-3 py-2 rounded-lg text-white bg-gray-950 ${className}`
    }>
        {children}
    </button>
  )
}

export default Button