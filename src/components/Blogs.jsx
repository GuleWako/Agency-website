import React from 'react'
import image1 from '../assets/1.png'
import image2 from '../assets/image22.png'
import image3 from '../assets/3.png'
const Blogs = () => {
    const blogs = [
        {
            id:1, images: image1, description:"Creating Streamlined Safeguarding Processes with OneRen", link:"Readmore"
       },
       {
        id:2, images: image2, description:"What are your safeguarding responsibilities and how can you manage them?", link:"Readmore"
   },
   {
    id:3, images: image3, description:"Revamping the Membership Model with Triathlon Australia", link:"Readmore"
}
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl font-semibold mb-4 text-neutralDGray'>Caring is the new marketing</h2>
     <p className='md:w-3/4 text-neutralDGray text-sm mb-8 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p> 
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map((item)=>(
                    <div key={item.id} className='mx-auto relative mb-12 cursor-pointer'>
                    
                            <img  src={item.images} alt='' className='hover:scale-95 transition-all duration-300'/>
                   
                        <div className='text-center px-4 py-4 text-sm bg-white shadow-lg rounded-md md:w-3/4 mx-auto
                        absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralDGray font-semibold'>{item.description}</h3>
                            <div>
                                <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700 justify-center'>Readmore</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs