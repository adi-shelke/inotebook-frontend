import React from 'react'
import { useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import "../about.css";
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
        <div className=" mainDiv mx-0 px-0">
        <div className=" head mx-0">
            <h2 className="text-center head-h2">If you can imagine it,</h2>
            <h2 className="text-center head-h2">You can do it!</h2>
        </div>
        <div className="bottom pt-4">
            <h2 className="text-center btm-h2">About us</h2>
            <div className="container btm-grey d-flex flex-column justify-content-center align-items-center">
                <p className="text-center btm-p ">I am a student and a web developer enthusiast<br /> currently learning and working on MERN projects.<br /> You can view my projects on github. <br />You connect with me by following me on social medias.</p>
                <div className="container d-flex flex-row justify-content-center align-items-center">
                    <a style={{color:"white"}} href="https://github.com/shelkeadinath" target="_blank"><i className="fa-brands fa-github mx-3 i-tag"></i></a>
                    <a style={{color:"white"}} href="https://www.linkedin.com/in/adinath-shelke-2519b4203/" target="_blank"><i className="fa-brands fa-linkedin mx-3 i-tag"></i></a>
                    <a style={{color:"white"}} href="https://www.instagram.com/adi_shelke_07/" target="_blank"><i className="fa-brands fa-instagram mx-3 i-tag"></i></a>
                </div>
            </div> 
        </div>
    </div>
    </div>
  )
}

