import React from 'react'
import cuttingb from '../images/cuttingb.svg'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='gap-2 py-2 flex-1 flex flex-col items-start justify-center'>
        <div className='flex flex-row gap-2 rounded-full px-2 items-center bg-amber-100 shadow-md'>
          <h2 className='md:text-xl text-md text-rose-600'>Think it, we cook it!</h2>
          <div className='rounded-full bg-white w-10 h-10 items-center'>
            <img src={cuttingb} alt="knife" className='object-contain w-full h-full' />
          </div>
        </div> 
        <div className='my-4 md:my-2'>
          <p className='text-[2.4rem] text-black font-bold md:text-[3.5rem] tracking-wide'>
          Food is Our Priority, <br /> <span className='text-rose-700 text'>Our Money Comes Next!!</span> 
          </p>
          <p className='text-textColor text-lg md:text-left text-center md:w-[85%]'>
            We offer so many services here, your information and bank details are safe with us. Free delivery to neighbouring areas, 
           
            daily discounts on your favourite meals. 
          
            Daily within 30 to 45 minutes.
            Customer service here is top-notch
          
            Now is the time to order!       
          </p>
          <button className='bg-rose-600 w-full md:w-auto md:mt-2 mt-4  py-1 px-4 text-black rounded-lg hover:shadow-xl transition-all ease-in duration-150'>Order Now</button>
        </div>       
      </div>

      <div className='py-2 flex-1'>a</div>

    </div>
  )
}

export default MainContainer