const IconUser = ( {className, width = '20px', height='20px'} ) => {
  return (
  <svg
    className={className}
    width={width}  
    height={height}
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2831_1557)">
      <path d="M15.625 7.5H15V5C15 2.2425 12.7575 0 10 0C7.2425 0 5 2.2425 5 5V7.5H4.375C3.34167 7.5 2.5 8.34083 2.5 9.375V18.125C2.5 19.1592 3.34167 20 4.375 20H15.625C16.6583 20 17.5 19.1592 17.5 18.125V9.375C17.5 8.34083 16.6583 7.5 15.625 7.5ZM6.66667 5C6.66667 3.16167 8.16167 1.66667 10 1.66667C11.8383 1.66667 13.3333 3.16167 13.3333 5V7.5H6.66667V5ZM10.8333 13.935V15.8333C10.8333 16.2933 10.4608 16.6667 10 16.6667C9.53917 16.6667 9.16667 16.2933 9.16667 15.8333V13.935C8.67083 13.6458 8.33333 13.1142 8.33333 12.5C8.33333 11.5808 9.08083 10.8333 10 10.8333C10.9192 10.8333 11.6667 11.5808 11.6667 12.5C11.6667 13.1142 11.3292 13.6458 10.8333 13.935Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2831_1557">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  )
}

export default IconUser;