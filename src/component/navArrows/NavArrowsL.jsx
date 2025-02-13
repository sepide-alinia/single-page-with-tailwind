import React from 'react'

export default function NavArrowsL(props) {
  
  const { onClick,class1 } = props;

if(class1){

  return (
    <>
   <span 
   onClick={onClick}
   className={class1}
   >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
  </>
)
}


  else{

    return (
      <>
     <span {...props}
     onClick={onClick}
     className="bg-white absolute -right-28 -top-20 hover:bg-black hover:text-white  h-fit p-3 rounded-[.3rem] mt-[18rem] mr-4 translate-x-16 group-hover:-translate-x-1 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer "
     >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
    </>
  )
}
}
