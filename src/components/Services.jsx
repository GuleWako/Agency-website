import React from 'react'
import logo1 from '../assets/icons/Logo.png'
import logo2 from '../assets/icons/Logo2.png'
import logo3 from '../assets/icons/Logo3.png'
import logo4 from '../assets/icons/Logo4.png'
import logo5 from '../assets/icons/Logo5.png'
import logo6 from '../assets/icons/Logo6.png'
import logo7 from '../assets/icons/Logo7.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
const Services = () => {
    const services = [
        {id:1, title:"Membership Organizations", description:"Our membership management software provides full automation of membership renewals and payments", image:icon1},
        {id:2, title:"National Associations", description:"Our membership management software provides full automation of membership renewals and payments", image:icon2},
        {id:3, title:"Clubs And Groups", description:"Our membership management software provides full automation of membership renewals and payments", image:icon3}
    ] 
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralDGray'>We have been working with some Fortune 500+ clients</p>
        </div>

        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src={logo1} alt=''/>
            <img src={logo2} alt=''/>
            <img src={logo3} alt=''/>
            <img src={logo4} alt=''/>
            <img src={logo5} alt=''/>
            <img src={logo6} alt=''/>
            <img src={logo7} alt=''/>
        </div>

        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGray font-semibold mb-3'>Manage your entire community in a single system</h2>
            <p className='text-neutralDGray'>Who is Nextcent suitable for?</p>
        </div>

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map((item)=>(
                        <div key={item.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 
                        rounded-md shadow cursor-pointer hover:translate-y-5 
                        hover:border-b-4 hover:border-indigo-700 transition-all 
                        duration-300 flex items-center justify-center h-full'>
                            <div>
                                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl
                                rounded-br-3xl'>
                        <img src={item.image} className='-ml-5'/></div>
                        <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'>{item.title}</h4>
                        <p className='text-sm text-neutralDGray'>{item.description}</p>
                        </div>
                        </div>
                    ))
                }
           
        </div>
    </div>
  )
}

export default Services