
const Button = ({children , className, onClick , disabled, type}) => {
  return (
    <button 
      type={type || "button"}
      disabled={disabled}
      onClick={onClick || (() => {})}
      className={`px-3 py-2 rounded-lg text-white bg-gray-950 ${className}`
    }>
        {children}
    </button>
  )
}

export default Button