import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email us for Jobs</h3>
                <p className='text-primary/75 text-base mb-4'>Immigration affects the number of workers in the economy, increasing labour supply in certain occupations and industries.
                     This means there are more people looking for jobs. 
                 However, immigration can also expand the demand for workers and thus create new jobs.</p>
                <div className='w-full space-y-4'>
                    <input type="email" name="email" id="email" placeholder='name@gmail.com' className='w-full block py-2
                    pl-3 border focus:outline-none'/>

                    <input type='submit' name='' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none
                    bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
                </div>

                
        </div>

        {/* second part */}

        <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get notified for job near you</h3>
                <p className='text-primary/75 text-base mb-4'>Immigration affects the number of workers in the economy, increasing labour supply in certain occupations and industries.
                     This means there are more people looking for jobs. 
                 However, immigration can also expand the demand for workers and thus create new jobs.</p>
            
                <input type='submit' name='' value={"Upload your CV"} className='w-full block py-2 pl-3 border focus:outline-none
                    bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
                </div>

                
        </div>
    </div>

    
    
  )
}

export default Newsletter