const IconHeart = ( {className, width = '24px', height='24px'} ) => {
  return (
    <svg 
      className={className}
      width={width}  
      height={height}
      viewBox="0 0 24 24" 
      fill="transparent" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  )
}

export default IconHeart;