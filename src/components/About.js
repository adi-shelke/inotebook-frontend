import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
   if(!localStorage.getItem('token'))
   {
    navigate("/login")
   }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
        This is About page
    </div>
  )
}

