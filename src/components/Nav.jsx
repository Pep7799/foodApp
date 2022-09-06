import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import {TbLogout} from 'react-icons/tb' 
import {IoIosAddCircleOutline} from 'react-icons/io'
import Userpicture from '../images/user.png'
import { motion } from 'framer-motion'          //framer-motion for my animations
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";       //firebase 
import {app} from '../firebase.config'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom'



const Nav = () => {
        /*Firebase imports**/
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider() 

    const [{user}, dispatch] = useStateValue()

    const [isMenu, setIsMenu] = React.useState(false )

           /*sign in function for picture click*/ 
    const signin = async() => {
        if (!user){
        const {
            user: {refreshToken, providerData},
        }= await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0] 
        })
        localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu)
        }
    } 

  return (
    <header className='fixed w-screen z-50 py-4 px-12'>
        {/*Desktop*/}
        <div className='hidden md:flex items-center justify-between h-full w-full'>
            <Link to = "/" className='flex items-center gap-2'>
                {/*Logo here*/}
                <p className='text-bold text-xl text-navColor'>Fast food</p>
            </Link>

            <div className='items-center flex gap-8'>

                <motion.ul 
                    initial = {{x: 300, opacity: 0.1 }} 
                    animate = {{x: 0, opacity: 1 }} 
                    exit = {{x: 300, opacity: 0.1 }} 
                className='flex gap-10 ml-auto items-center'>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>Home</li>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>Menu</li>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>About us</li>
                    <li className='text-textColor cursor-pointer hover:text-navColor duration-150 transition-all ease-in'>Contact us</li>
                </motion.ul>
                <div className='relative items-center justify-center flex'>
                    <FiShoppingBag className='text-textColor text-2xl cursor-pointer'/>
                    <div className='absolute -top-3 -right-2 h-5 w-5 bg-cartNBg rounded-full flex justify-center items-center'>
                        <p className='text-xs text-bold text-white'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img

                        whileTap={{scale: 1.5}}
                        src={user ? user.photoURL : Userpicture}
                        alt="no user" 
                        className='w-9 h-9 rounded-full cursor-pointer min-w-[40px] min-h-[40px]'
                        onClick={signin}  
                    />
                   {
                    isMenu && (
                    <motion.div
                    initial = {{opacity: 0, scale: 0.4}}
                    animate = {{opacity: 1, scale: 1}}
                    exit = {{opacity: 0, scale: 0.4}}
                     className='w-40  absolute top-10 right-0  flex flex-col text-sm px-3 py-2 bg-neutral-200 shadow-lg'>
                        {user && user.email === "folamioluwapelumi1@gmail.com" && 
                        <Link to = '/create'>                        
                        <p className='p-2 items-center flex flex-row cursor-pointer hover:bg-slate-50 gap-2'>New Item <IoIosAddCircleOutline/> </p>
                        </Link>
                        }
                        <p className='p-2 items-center flex flex-row cursor-pointer hover:bg-slate-50 gap-2'>Log-out <TbLogout/></p>
                    </motion.div>
                    )
                   }
                </div>

            </div>
        </div>

        {/*Mobile*/}
        <div className='md:hidden flex bg-purple-700 h-full w-full p-2'>



        </div>
    </header>
  )
}

export default Nav