import React from 'react';

// motion
import { motion } from 'framer-motion';
// variants

import { fadeIn } from '../variants';
// Images
import Img1 from '../assets/portfolio-img1-1.png'; 
import Img2 from '../assets/portfolio-img2.png'; 
import Img3 from '../assets/portfolio-img3.png'; 



const Work = () => {
  return (
      <section className='section' id='work'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-10'>
            <motion.div 
               variants= {fadeIn('right', 0.3)}
               initial = "hidden"
               whileInView={"show"}
                viewport={{once: false, amount: 0.3}}
              className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0
            '>
              {/* text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>My <br/>
               Projects
                </h2>
                <p className='max-w-sm mb-16'>My latest projects include Bootstrap, React JS, and React Native. Check out my github repository to learn more.</p>
                <a href = 'https://github.com/alyssagabrie'>
                <button className='btn btn-sm'> View Github Repos</button> </a>
              </div>
              {/* Image 1 */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70
                 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full
                left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>React & React Native </span>
                  
                  </div>
                {/* title */}
                <div className='absolute -bottom-full
                left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>NuCamp Portfolio Project</span>
                </div>
              </div>


            </motion.div>
            <motion.div 
            variants= {fadeIn('left', 0.2)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'>
                {/* Image 2 */}
                 <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70
                 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full
                left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web Design & Development</span>
                  
                  </div>

                  
                {/* title */}
                <div className='absolute -bottom-full
                left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Space Portfolio</span>
                </div>
              </div>
              {/* Image  3*/}
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70
                 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full
                left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>React Native</span>
                  
                  </div>
                {/* title */}
                <div className='absolute -bottom-full
                left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Travel App</span>
                </div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>
  
    )
};

export default Work;
