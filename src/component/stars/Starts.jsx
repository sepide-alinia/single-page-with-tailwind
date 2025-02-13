import React from 'react'
import { LiaStarSolid } from "react-icons/lia";

export default function Starts({rating}) {
  return (
    <div className='flex'>{Array(rating).fill(<LiaStarSolid className='text-primary_1'/>)}</div>
  )
}
