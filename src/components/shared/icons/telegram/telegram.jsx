const IconTelegram = ( {className, width = '20px', height='21px'} ) => {
  return (
  <svg 
    className={className}
    width={width}
    height={height} 
    viewBox="0 0 20 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M17.2089 3.99741L2.56595 9.644C1.56662 10.0454 1.5724 10.6029 2.3826 10.8515L6.14204 12.0242L14.8403 6.53619C15.2516 6.28594 15.6274 6.42056 15.3185 6.69476L8.27118 13.0549H8.26953L8.27118 13.0557L8.01185 16.9308C8.39176 16.9308 8.55941 16.7565 8.77249 16.5509L10.5985 14.7752L14.3968 17.5808C15.0971 17.9665 15.6001 17.7683 15.7744 16.9325L18.2677 5.18173C18.5229 4.15846 17.8771 3.69513 17.2089 3.99741Z" fill="currentColor"/>
  </svg>
  )
}

export default IconTelegram;