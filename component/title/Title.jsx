import React from 'react'

export default function Title({text,class1,class2,class3}) {
  return (
    <div>
        <p className={class1}>{text}</p>
        <div className='flex justify-center gap-1 mt-12 text'>
            <div className={class2}></div>
            <div className={class3}></div>
            <div className={class2}></div>
        </div>
    </div>
  )
}
