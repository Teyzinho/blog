
const Button = ({children , className}) => {
  return (
    <button className={`px-3 py-2 rounded-lg text-white bg-gray-950 ${className}`}>
        {children}
    </button>
  )
}

export default Button