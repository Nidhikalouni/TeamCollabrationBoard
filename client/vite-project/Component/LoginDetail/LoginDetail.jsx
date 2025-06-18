
import React,{useState} from 'react'
import './LoginDetail.css'
const LoginDetail = () => {
      const [state, setState] = useState('Login')
  return (
    <div className='container'>
       <h1 className='state'>{state}</h1>
       {state === 'Login' ? <p >Welcome back! please login to continue</p>

                    : <p >Welcome! please sign in to continue</p>
                }

        <div>
                   
                     <input className='email' type="email" placeholder='Email id' required />
                 </div>

                 <div >
                     <input className='password' type="password" placeholder='Password' required />
                 </div>

                 <p >Forgot password?</p>

                 <button >{state === 'Login' ? 'Login' : 'Create Account'}</button>

                 {state === 'Login' ? <p >Don't have an account?
                     <span> Sign up</span></p>
                    :
                    <p >Already have an account?
                        <span  onClick={() => setState('Login')}> Login
                        </span></p>}
    </div>
  )
}

export default LoginDetail
