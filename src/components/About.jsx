import React from 'react'
import mobile from '../assets/Frame.png'
import icon1 from '../assets/Icon4.png'
import icon2 from '../assets/Icon5.png'
import icon3 from '../assets/Icon6.png'
import icon4 from '../assets/Icon7.png'
const About = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={mobile} alt=''/>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-semibold mb-4 text-neutralDGray md:w-4/5'>The unseen of spending three years at Pixelgrade </h2>
                    <p className='md:w-3/4 text-neutralDGray text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
        </div>
   
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                <h2 className='text-4xl font-semibold mb-4 text-neutralDGray md:w-2/3'>Helping a local <span className='text-brandPrimary'>business reinvent itself</span></h2>
                    <p className='md:w-3/4 text-neutralDGray text-sm mb-8'>We reached here with our hard work and dedication.</p>
                   
                </div>
                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src={icon1} alt=''/>
                            <div>
                                <h4>
                                2,245,341
                                </h4>
                                <p>Members</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={icon2} alt=''/>
                            <div>
                                <h4>
                                2,245,341
                                </h4>
                                <p>Clubs</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src={icon3} alt=''/>
                            <div>
                                <h4>
                                2,245,341
                                </h4>
                                <p>Event Bookings</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={icon4} alt=''/>
                            <div>
                                <h4>
                                2,245,341
                                </h4>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  </div>
  )
}

export default About