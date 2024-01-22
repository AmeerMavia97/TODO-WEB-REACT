import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from ".././Config/Firebase/config"
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../Config/Firebase/config'


const UserContextProvider = ({ children }) => {

  // NAVIGATE
  const [UserNames , setUserNames] = useState()
  const [UserImage , setUserImage] = useState()

  // ON AUTH STATE FUNCTION
  useEffect(()=>{
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const q = query(collection(db, "User"), where("UserUid", "==", uid));
  
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUserNames(doc.data().FirstName + doc.data().LastName)
          setUserImage(doc.data().Userimg)
        });
  
      } else {
        // navigate('/')
        console.log('Login karle bhai');
      }
    });
  
  }, [])
  

  return (
    <UserContext.Provider value={[UserNames , UserImage]} >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider