
interface IErrorMessage {
  message: any
}

const ErrorMessage = ({ message }: IErrorMessage ) => {
  
  return (
    <div className={` flex items-center justify-start transition-all duration-400 ease-out ${message ? "h-6 " : " h-0"} `}>
      {message && 
        <div className="flex items-center justify-start gap-1 mt-4 w-full ">
          <figure className="w-4 h-4 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" >
              <path d="m9.88,2.4L1.65,16.6c-.46.79-.68,1.18-.65,1.51.03.28.18.54.41.71.26.19.72.19,1.63.19h16.45c.91,0,1.37,0,1.63-.19.23-.17.38-.42.41-.71.03-.32-.19-.72-.65-1.51L12.65,2.4c-.45-.79-.68-1.18-.98-1.31-.26-.12-.55-.12-.81,0-.3.13-.52.52-.98,1.31Z" fill="#f43f5e" stroke="#f43f5e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>    
              <line x1="11.25" y1="6.95" x2="11.25" y2="10.95" fill="#f43f5e" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
              <line x1="11.25" y1="14.95" x2="11.26" y2="14.95" fill="f43f5e" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            </svg>
    
          </figure>
          <p className="text-sm text-rose-500">{message}</p>
        </div>
      } 
    </div>  
  )
}

export default ErrorMessage