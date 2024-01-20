import React from 'react'
import UserContext from './UserContext'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from ".././Config/Firebase/config"

const UserContextProvider = ({children}) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
        } else {
        }
      });


  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider