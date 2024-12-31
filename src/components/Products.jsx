import React from 'react'
import product from '../assets/pana.png'
import product2 from '../assets/image9.png'
import logo1 from '../assets/icons/Logo.png'
import logo2 from '../assets/icons/Logo2.png'
import logo3 from '../assets/icons/Logo3.png'
import logo4 from '../assets/icons/Logo4.png'
import logo5 from '../assets/icons/Logo5.png'
import logo6 from '../assets/icons/Logo6.png'
import logo7 from '../assets/icons/Logo7.png'
const Products = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='product'>
    <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
        <div>
            <img src={product} alt=''/>
            </div>
            <div className='md:w-1/2 mb-16'>
                <h2 className='text-4xl font-semibold mb-4 text-neutralDGray md:w-4/5'>How to design your site footer like we did </h2>
                <p className='md:w-3/4 text-neutralDGray text-sm mb-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
    </div>

    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'>
            <img src={product2} alt=''/>
            </div>
            <div className='md:w-2/3 mx-auto'>
            <div>
                <p className=' text-neutralDGray text-sm mb-8 md:w-4/5 leading-7' >Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
               <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
               <p className='text-base text-neutralDGray mb-8'>British Dragon Boat Racing Association</p>
               <div>
                <div className='flex items-center gap-8 flex-wrap'>
                <img src={logo1} alt=''/>
            <img src={logo2} alt=''className='cursor-pointer'/>
            <img src={logo3} alt=''className='cursor-pointer'/>
            <img src={logo4} alt=''className='cursor-pointer'/>
            <img src={logo5} alt=''className='cursor-pointer'/>
            <img src={logo6} alt=''className='cursor-pointer'/>
            <div>
                <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>
                Meet all customers
                </a>
            </div>
                </div>
               </div>
            </div>
             
                
            </div>
        </div>
    </div>

</div>
  )
}

export default Products