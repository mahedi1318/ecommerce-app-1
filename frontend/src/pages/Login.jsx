import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign up')

  const onSubmetHandler = async (e)=>{
    e.preventDefault()
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={onSubmetHandler} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
          <div className="inline-flex items-center gap-2 mt-10 mb-2">
            <p className='prata-regular text-3xl josefin_sans font-medium'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
          </div>
          {currentState === "Login" ? "" : <input className='border border-gray-800 w-full px-3 py-2 josefin_sans' type="text" placeholder="Name" required />}
          <input className='border border-gray-800 w-full px-3 py-2 josefin_sans' type="email" placeholder="Email" required />
          <input className='border border-gray-800 w-full px-3 py-2 josefin_sans' type="password" placeholder="Password" required />
          <div className="flex justify-between w-full mt-[-8px]">
            <p className='josefin_sans text-[16px] font-medium cursor-pointer'>Forgot your password?</p>
            {
            currentState === 'Login'
            ? <p onClick={()=> setCurrentState('Sign up')} className='josefin_sans cursor-pointer'>Create account</p>
            : <p onClick={()=> setCurrentState('Login')} className='josefin_sans cursor-pointer'>Login Here</p>
            }
          </div>
          <button className='bg-black text-white px-8 py-2 mt-4 josefin_sans text-[16px] font-normal'>{currentState === 'Login' ? 'Sign In' : 'Sign up'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
