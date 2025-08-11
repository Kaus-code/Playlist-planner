import React from 'react'
import Navbar from '../components/navbar'
import LoginCard from '../components/loginCard'
import SignIn from '../components/SignIn'
import bgImg from '../assets/Img3.jpg'

function Login(ref) {
  return (
    <>
      <div
        className="absolute inset-0 -z-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="main bg-[#262054] h-[100vh]">
        <Navbar />
        <div className="main flex">
          <div className="left relative">
            <LoginCard />
            {/* Vertical Separator */}
            <div className="absolute top-0 right-0 w-[8px] h-full 
    bg-gradient-to-b from-transparent via-black/30 to-transparent 
    backdrop-blur-sm rounded-full">
</div>
          </div>
          <div className="right">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login