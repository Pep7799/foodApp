import React from 'react'
import cuttingb from '../images/cuttingb.svg'
import bgright from '../images/bgright.jpg'
import { homeData } from '../utils/data1'


const Home = () => {
  return (
    <section id = "home" className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
    <div className='gap-2 flex-1 flex flex-col items-start justify-center'>
      <div className='flex flex-row gap-2 rounded-full px-2 items-center bg-amber-100 shadow-md'>
        <h2 className='md:text-xl text-md text-rose-600'>Think it, we cook it!</h2>
        <div className='rounded-full bg-white w-10 h-10 items-center'>
          <img src={cuttingb} alt="knife" className='object-contain w-full h-full' />
        </div>
      </div> 
      <div className='my-4 md:mb-16'>
        <p className='text-[2.4rem] text-black font-bold lg:text-[3.5rem] tracking-wide'>
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

    <div className='py-2 flex-1 flex items-center relative'>
      <img src={bgright} className = "h-650 w-full rounded-xl lg:h-685 lg:w-auto ml-auto" alt="right-bckground" /> 
      <p className='rotate-90 absolute text-black text-md font-extrabold top-30 -left-40'>
          Today's order! Don't  wait....let's add your to the list🌹
        </p>

      <div className = 'w-full absolute h-full flex flex-wrap items-center sjustify-center top-0 left-0 px-32 py-4 gap-4'>
        

        {homeData && homeData.map (data => (

          <div key = {data.id}  className = "w-150 h-150 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col justify-center items-center">
            <br />
            <br />
          <img src={data.imagesrc} alt="c1" className='w-40 -mt-20 h-44' />
          <p className='text-base font-semibold text-textColor'>{data.name}</p>
          <p className='text-black text-sm font-bold'><span className='text-red-800'>$</span>{data.price}</p>
          <br />
          </div>


        ))}
      </div>
    </div>

  </section>
  )
}

export default Home;