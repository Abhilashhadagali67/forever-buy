import React, { useState } from 'react'

const Login = () => { 

  const [currentState, setcurrentState] = useState('Sign up')

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4  ' >
        <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
        </div>

        {currentState ==='login' ? '': <input placeholder='Name' className='w-full px-3 py-2 border border-gray-800' type="text" required /> }
        
        <input placeholder='Email' className='w-full px-3 py-2 border border-gray-800' type="email" required /> 
        <input placeholder='Password' className='w-full px-3 py-2 border border-gray-800' type="password" required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'> Forgot your Password</p>
          {currentState ==='login' ? <p className='cursor-pointer' onClick={()=>setcurrentState('Sign up')} >Create Account</p>: <p className='cursor-pointer' onClick={()=>setcurrentState('login')} >Login Here</p>  }
        </div>

        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==='login'?'Sign in':'Sign up'} </button>
    </form>
  )
}

export default Login
