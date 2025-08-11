import React from 'react'

function Navbar(ref) {
  return (
    <>
      <div className="box text-white flex justify-between items-center px-9 py-8" >
        <div className="left text-4xl font-[900] select-none pl-3">LECTURA</div>
        <div className="right flex items-center gap-10 font-[600] text-sm">
          <div className='cursor-pointer text-white font-semibold transition-all duration-300 hover:text-[#0785b6] hover:scale-105 active:scale-95 select-none'>HOME</div>
          <div className='cursor-pointer text-white font-semibold transition-all duration-300 hover:text-[#0785b6] hover:scale-105 active:scale-95 select-none'>EXPLORE</div>
          <div className='cursor-pointer text-white font-semibold transition-all duration-300 hover:text-[#0785b6] hover:scale-105 active:scale-95 select-none'>ABOUT</div>
          <button className='cursor-pointer bg-[#0785b6] px-4 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-[#056b90] hover:shadow-lg hover:scale-105 active:scale-95'>SIGN IN</button>
          <div className='cursor-pointer p-2 rounded-md hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <rect y="4" width="24" height="2" rx="1" fill="white" opacity="0.7" />
              <rect y="11" width="24" height="2" rx="1" fill="white" opacity="0.7" />
              <rect y="18" width="24" height="2" rx="1" fill="white" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar 