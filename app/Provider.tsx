"use client"
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react'
import React, { useEffect, useState } from 'react'
import { createContext } from 'vm';

function Provider({ children }: any) {

  const { user } = useUser();
  const CreateUser=useMutation(api.users.CreateNewUser);
  const [userDetail,setUserDetail]=useState<any>();
  console.log('user')
  useEffect(() => {
    user && CreateNewUser();
  }, [user])

  

   const CreateNewUser = async () =>{
    if (user){
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        name: user?.fullName ?? '',
        imageUrl: ''
      });
      console.log(result)
      setUserDetail(result);

    }
   }

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const UseDetailContext=()=>{
  return createContext(UserDetailContext);
}
