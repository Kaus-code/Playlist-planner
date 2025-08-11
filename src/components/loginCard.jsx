import React from 'react'

function LoginCard() {
    return (
        <div className="flex items-center h-[80vh] w-[30vw] justify-center">
            <div className="flex flex-col items-center w-full max-w-[23vw] gap-2 p-8 space-y-6">

                {/* Profile Icon */}
                <div className="img p-2 border-4 border-[#039ed7] w-fit rounded-full"><svg className='w-24 h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96" color="#039ed7" fill="none">
                    <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                {/* Username Input */}
                <div className="flex gap-2 items-center w-full px-4 py-2 border-3 focus-within:border-[#bdbdbdcc] border-[#bdbdbd7b] rounded-full bg-transparent text-white transition-all duration-300 ease-in-out">
                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <input type="text" placeholder="USERNAME" className="flex-1 text-sm bg-transparent outline-none text-white placeholder-gray-400" />
                </div>

                {/* Password Input */}
                <div className="flex gap-2 items-center w-full px-4 py-2 border-3 focus-within:border-[#bdbdbdcc] border-[#bdbdbd7b] rounded-full bg-transparent text-white transition-all duration-300 ease-in-out">
                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                        <path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-7H9V7a3 3 0 0 1 6 0v2z" />
                    </svg>

                    <input type="password" placeholder="PASSWORD" className="flex-1 text-sm bg-transparent outline-none text-white placeholder-gray-400" />
                </div>

                {/* Login Button */}
                <button className="w-full py-2 cursor-pointer text-white font-bold rounded-full bg-pink-500 hover:bg-pink-600 hover:scale-102 active:scale-95 transition-all duration-300">
                    LOGIN
                </button>



                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between w-full text-[12px] font-[600] text-gray-400 select-none">
                    <label className="flex items-center space-x-1 cursor-pointer hover:text-[#cdcdcd] transition-all duration-300 ease-in-out">
                        <input type="checkbox" className="accent-pink-500" />
                        <span>Remember me</span>
                    </label>
                    <a href="#" className="hover:text-white transition-all duration-300 ease-in-out">Forgot password?</a>
                </div>
            </div>
        </div>
    )
}

export default LoginCard 