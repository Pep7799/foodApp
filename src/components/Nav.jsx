import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import user from '../images/user.png'
import { motion } from 'framer-motion'          //framer-motion for my animations
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";       //firebase 
import {app} from '../firebase.config'



const Nav = () => {
        /*Firebase imports**/
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider() 

           /*sign in function for picture click*/ 
    const signin = async() => {
        const response = await signInWithPopup(firebaseAuth, provider);
        console.log(response);
    }

  return (
    <header className='fixed w-screen z-50 py-4 px-12'>
        {/*Desktop*/}
        <div className='hidden md:flex items-center justify-between h-full w-full'>
            <div className='flex items-center gap-2'>
                {/*Logo here*/}
                <p className='text-bold text-xl text-navColor'>Fast food</p>
            </div>

            <div className='items-center flex gap-8'>

                <ul className='flex gap-10 ml-auto items-center'>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>Home</li>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>Menu</li>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>About us</li>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>Contact us</li>
                </ul>
                <div className='relative items-center justify-center flex'>
                    <FiShoppingBag className='text-textColor text-2xl cursor-pointer'/>
                    <div className='absolute -top-3 -right-2 h-5 w-5 bg-cartNBg rounded-full flex justify-center items-center'>
                        <p className='text-xs text-bold text-white'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img

                        whileTap={{scale: 1.5}}
                        src={user} 
                        alt="no user" 
                        className='w-9 h-9 cursor-pointer min-w-[40px] min-h-[40px]'
                        onClick={signin}  
                    />
                </div>

            </div>
        </div>

        {/*Mobile*/}
        <div className='md:hidden flex bg-purple-700 h-full w-full p-2'></div>
    </header>
  )
}

export default Nav