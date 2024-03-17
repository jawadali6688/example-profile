import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData();
  console.log(data)
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/jawadali6688")
    //     .then((response) => response.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     }, [])
    // })
  return (
    <div className='flex flex-col gap-14 py-8 bg-gray-200 items-center justify-center'>
      <h1 
      className='text-center  text-orange-700 font-bold text-lg'
      >Github Followers: {data.followers} </h1>
      <h1 
      className='text-center  text-orange-700 font-bold text-lg'
      >Github Account Name: {data.name} </h1>
            <h1 
      className='text-center  text-orange-700 font-bold text-lg'
      >Github Username: {data.login} </h1>
      <img src= {data.avatar_url} alt="" 
      className='w-44 h-44 object-contain rounded-[50%]'/>
    </div>
  )
}

export const gitHubApiHandle = async () => {
  const response = await fetch("https://api.github.com/users/jawadali6688")
  return response.json()         
}
