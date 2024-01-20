import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { auth, db, storage } from '../../Config/Firebase/config'


const Register = () => {

  //State
  const [ShowError, setshowError] = useState()
  const [selectedFile, setselectedFile] = useState(null)
  const [Loading , setLoading] = useState(true)

  //REF
  const email = useRef()
  const firstname = useRef()
  const lastname = useRef()
  const password = useRef()
  const confirmpassword = useRef()

  // NAVIGATE
  const navigate = useNavigate()

  // Get Image Function
  function FileChange(e) {
    const File = e.target.files[0]
    setselectedFile(File)
  }



  function RegisterUser(e) {
    e.preventDefault();
    setLoading(!Loading)

    //REF VALUE CONVERT INTO VARAIBLES
    const FirstName = firstname.current.value;
    const LastName = lastname.current.value;
    const Email = email.current.value;
    const Password = password.current.value;
    const ConfirmPassword = confirmpassword.current.value;

    // CHECK PASS FUNCTION
    if (Password === ConfirmPassword) {
      // REGISTER USER FUNCTION
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          const user = userCredential.user;
          // UPLOAD IMAGE FUNCTION
          const file = selectedFile
          const storageRef = ref(storage, Email);
          uploadBytes(storageRef, file).then(() => {
            // GET IMAGE URL FUNCTION
            getDownloadURL(ref(storageRef))
              .then((url) => {
                // ADD DOCUMENT FUNCTION
                try {
                  addDoc(collection(db, "User"), {
                    FirstName: FirstName,
                    LastName: LastName,
                    Email: Email,
                    UserUid: user.uid,
                    Userimg: url 
                  });
                  navigate('/Home')
                } catch {
                  setshowError("Detial Are Not Add In Firebase")
                }
              })
              .catch((error) => {
                setshowError(error)
              });

          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setshowError(errorCode)
        });

    } else {
      setshowError('Password Are Not Same')
    }
}


  return (
    <>
      <div className='mt-[30px] ml-[30%] mr-[30%] mb-[100px] border-[1px] border-solid border-black'>
        <h1 className='font-Lobster mt-[30px] text-[#5f6c76] text-center text-6xl'>Register </h1>
        <div>
          <form onSubmit={RegisterUser}>
            <input className='w-[80%] h-[45px] mt-9 rounded-md ml-[9%] bg-gray-200 p-3' type="text" ref={firstname} placeholder="Enter your FirstName" required/>

            <input className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' type="text" ref={lastname} placeholder="Enter your LastName" required/>

            <input className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' type="email" ref={email} placeholder="Enter Your Email" required/>

            <input className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' type="Password" ref={password} placeholder="Enter your Password" required/>

            <input type="password" className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' ref={confirmpassword} placeholder="Enter your confirm Password" required/>
            <p className='ml-[50px]  text-red-500'>{ShowError}</p>

            <input type="file" className='ml-[50px]  rounded-md mt-3 bg-white' onChange={FileChange} required /> <br />
            <button className='ml-[50px] px-[187px] mt-6 font-Lobster rounded-md py-2 bg-[#5f6c76] text-lg text-white ' type='submit'>{Loading ? <span className="mt-2 loading loading-infinity loading-md"></span>: 'Register' }</button>
          </form>
          <p className='ml-[140px] mb-10 mt-6 font-poppins text-sm'>Already have an account: <span><Link to={'/'}>Login</Link></span></p>
        </div>
      </div>
    </>
  )
}

export default Register