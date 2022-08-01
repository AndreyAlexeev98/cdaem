const IconArrow = ( {className, width = '7px', height='12px'} ) => {
  return (
  <svg 
    className={className}
    width={width}  
    height={height}
    viewBox="0 0 7 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.21484 10.75L5.96484 6L1.21484 1.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  )
}

export default IconArrow;