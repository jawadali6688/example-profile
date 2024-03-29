import React from 'react'
import { useParams } from 'react-router-dom'
export default function Profile() {
    const { username } = useParams()
  return (
    <div>
      <h1 
      className='text-center py-8 bg-gray-200 text-orange-700 font-bold text-3xl'
      >User: {username} </h1>
      <h1  className='text-center py-8 bg-gray-200 text-orange-700 font-bold text-3xl'>Welcome {username}! </h1>
    </div>
  )
}
