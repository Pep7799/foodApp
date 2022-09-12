import React, {useState} from 'react'
import { motion } from 'framer-motion';
import {categories} from '../utils/data1'
import Load from './Load';
import {BsCloudUploadFill} from 'react-icons/bs'
import {MdDeleteForever} from 'react-icons/md'

const CreateContainer = () => {
    const[title, setTitle] = useState("");            //done
    const [price, setPrice] = useState("");           
    const [image, setImage] = useState(null);         //done
    const [category, setCategory] = useState(null);   //done
    const [field, setField] = useState(false);
    const [alert, setAlert] = useState("danger");
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const upload =() => {

    }

    const deleteImage = () => {

    }


    const saveData = () => {

    }
 


  return (
    <div className = "w-full min-h-screen flex items-center justify-center ">     
     <div className='w-[90%] md:w-[75%] border border-neutral-500 rounded-lg p-4 flex flex-col gap-4 items-center justify-center'>
      {field && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alert === "danger"
                ? "bg-red-600 text-red-800"
                : "bg-green-600 text-green-800"
            }`}
          >
           {message}
          </motion.p>
        )}

        <div className = "flex items-center w-full py-2 border-b border-neutral-300">
          <input className= "w-full h-full outline-none border-none text-lg font-semibold bg-transparent placeholder:text-black text-textColor" type = "text" required value = {title} placeholder = "Title..." onChange = {(e) => setTitle(e.target.value)}/>          
        </div>

        <div className= "w-full">
          <select onChange={(e) => setCategory(e.target.value)} className= "outline-none text-lg w-full border-b-2 p-2 rounded-md cursor-pointer">
            <option value="other" className=' px-8'>Select...</option>
            {categories && categories.map((item)=> (
              <option key = {categories.id} className = "bg-white outline-none capitalize text-sm text-textColor border-0" value={item.urlName}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className=' w-full rounded-lg flex justify-center items-center flex-col border-2 border-dotted border-neutral-400 h-225 md:h-420 cursor-pointer'>
             {isLoading ? (<Load/>
             ) : ( 
             <>
              {!image ? (
              <>
                <label className='flex flex-col w-full h-full justify-center items-center cursor-pointer'>
                  <div className = "flex flex-col w-full h-full justify-center items-center">
                    <BsCloudUploadFill className = "text-3xl text-neutral-500 hover:text-textColor" />
                    <p className = "text-3xl text-neutral-500 hover:text-textColor">Upload</p>
                  </div>
                  <input type="file" name='imageUpload accept ="image/*' onChange={upload} className= "w-0 h-0" />
                  
                </label>
              
              </>
             )  : (         /*if there is an asset url*/
              <>
                <div className='h-full relative'>
                  <img src={image} alt="food image" className = "w-full h-full object-cover"/>
                  <button type='button' className='absolute bottom-3 right-3 p-3 bg-red-600 outline-none cursor-pointer transition-all duration-150 ease-in' onClick={deleteImage}>
                    <MdDeleteForever className='text-red-300'/>
                  </button>
                </div>
              </>                
             
             
             )} 
             </> 
             )} 
        </div>

        <div className='w-full py-2 border-y border-neutral-500 gap-2 flex items-center '>
          <input required placeholder='Price...' type="text" value={price} onChange = {(e) => setPrice(e.target.value)} className= "w-full h-full text-lg bg-transparent outline-none text-black placeholder:text-textColor"/>

        </div>

        <div className = "flex items-center w-full ">
          <button type= "submit" className = "ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-green-500 text-black textlg rounded-md font-semibold px-5 " onClick = {saveData} >Save & Upload</button>

        </div>
       
        
      </div> 
    </div>
  );
};

export default CreateContainer