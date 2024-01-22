import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Config/Firebase/config'

const Login = () => {
  // STATE
  const [ShowError, setshowError] = useState()
  const [Loading , setLoading] = useState(false)

  //REF
  const email = useRef()
  const password = useRef()
  const confirmpassword = useRef()

  //NAVIGATE
  const navigate = useNavigate()


  function LoginUser(e) {
    e.preventDefault();
    
    setLoading(!Loading)

    //REF VALUE CONVERT INTO VARAIBLES
    const Email = email.current.value;
    const Password = password.current.value;
    const ConfirmPassword = confirmpassword.current.value;

    // CHECK PASS FUNCTION
    if (Password === ConfirmPassword) {
      // LOGINUSER FUNCTION
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/Home')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setshowError(errorCode)
        });
    } else {
      setshowError("Password Are Not Same")
    }
  }
  return (
    <>
      <div className='mt-[60px] ml-[30%] mr-[35%] mb-[100px] border-[1px] border-solid border-black'>
        <h1 className='font-Lobster mt-[30px] text-[#5f6c76] text-center text-6xl'>Login</h1>
        <div>
          <form onSubmit={LoginUser}>
            <input className='w-[80%] h-[45px] mt-10 rounded-md ml-[9%] bg-gray-200 p-3' type="email" placeholder="Enter Your Email" ref={email} />

            <input className='w-[80%] mt-5 h-[45px]  ml-[9%] rounded-md bg-gray-200 p-3' type="Password" placeholder="Enter Your Password" ref={password} />

            <input type="password" className='mt-5 w-[80%] h-[45px] rounded-md ml-[9%] p-3 bg-gray-200' placeholder="Enter Your Confirm Password" ref={confirmpassword} /> <br />
            <p className='ml-[45px] text-red-600 font-poppins'>{ShowError}</p>

            <button className='ml-[45px] px-[173px] mt-5 font-Lobster rounded-md text-lg py-[8px] bg-[#5f6c76] text-white ' type='submit'>{Loading ? <span className="mt-2 loading loading-infinity loading-md"></span>: <span >login</span>}</button>
          </form>
          <p className='ml-[120px] mb-12 mt-7 text-sm font-poppins'>Dont have an account?<Link to={'/Register'}>sign up</Link>  </p>
        </div>
      </div>
    </>
  )
}

export default Login