"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { HiSearch, HiBell, HiChat } from 'react-icons/hi'
import app from '../Shared/firebaseConfig'
import { useRouter } from 'next/navigation'

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const db = getFirestore(app)
  useEffect(() => {
    saveUserInfo()
  }, [session])

  const saveUserInfo=async()=>{
    if(session?.user)
    {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  }

  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <Image 
            src='/logo.png' 
            alt='logo' 
            width={50} 
            height={50}
            className='hover:bg-gray-200 p-2 rounded-full cursor-pointer'
        />
        <button className='bg-black text-white p-2 px-4 rounded-full hidden md:block'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
        <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-gray-500 md:flex' />
            <input type="text" placeholder='Search' className='bg-transparent outline-none' />
        </div>
            <HiBell className='text-[25px] md:text-[40px] text-gray-500 cursor-pointer'/>
            <HiChat className='text-[25px] md:text-[40px] text-gray-500 cursor-pointer'/>
            {session?.user?
            <Image 
                src={session.user.image}
                onClick={()=>router.push('/'+session.user.email)}
                alt='user-image' 
                width={50} 
                height={50}
                className='hover:bg-gray-200 p-2 rounded-full cursor-pointer'
            /> :
            <button onClick={() => signIn()} className='font-semibold p-2 px-4 rounded-full'>Login</button>}
    </div>
  )
}

export default Header