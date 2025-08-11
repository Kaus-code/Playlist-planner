import react from 'react'
import bgImg from '../assets/bgImg1.png'

function SignIn() {
    return (
        <>
            <div className="mt-20 absolute img w-180">
                <img src={bgImg} alt="" />
            </div>
            <div className="box absolute right-0 bottom-0 mr-30 mb-28 gap-10 flex flex-col">
                <div className="welcome text-white font-[900] text-6xl">Welcome.</div>

                <div className="welcome text-[#a7a7a7] font-[400] max-w-60 text-right text-sm ml-auto">
                    Your journey of knowledge starts here. Give your life another chance to begin.
                </div>

                <div className="text-[#a7a7a7] font-medium text-xs text-right ml-auto max-w-60 mt-3">
                    Not a member?{" "}
                    <span className="text-white font-bold cursor-pointer hover:underline">Sign up now</span>
                </div>
            </div>
        </>

    )
}

export default SignIn           