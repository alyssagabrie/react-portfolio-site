import React from 'react';

// icon 
import { BsPatchCheckFill } from 'react-icons/bs'
// motion 
import {motion} from 'framer-motion'; 
// variats 
import {fadeIn} from '../variants'; 

//  link 
import {Link} from 'react-scroll'; 


// services data 

const services = [
  {
      name: 'UI/UX Design', 
      description: 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      // link: 'Learn more'
  },

  {
    name: 'Web Design', 
    description: 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // link: 'Learn more'
},
{
  name: 'Web Development', 
  description:
    <div>
      <div>
      <BsPatchCheckFill />
      <h4>Javascript</h4>
      </div>
      <div>
      <BsPatchCheckFill />
      <h4>Javascript</h4>
      </div>
   
    </div> 
   
    
   
  // link: 'Learn more'
},
]

const Services = () => {
return (
  
  <section className='section' id='services'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* text  & image*/}
      <motion.div 
      variants= {fadeIn('right', 0.5)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6
         '>What I do.</h2>
         <h3 className='h3 max-w-[455px] mb-16'>
          I'm a Front-end Web and Mobile Developer who loves to design and code.
         </h3>
         <Link to='work'><button className='btn btn-sm'> See my work</button></Link>
      </motion.div>
      {/* services */}
      <motion.div 
         variants= {fadeIn('left', 0.5)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
      
        className='flex-1'>
        {/* service list */}
        <div>
        {services.map((service, index) => {

          // destructure service 
          const {name, description, link} = service; 

            return(
             <div className='border-b border-white/20 h-[166px] mb-[38px] flex' key= {index}>
              <div className='max-w-[476px]'> 
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{name}</h4>
                <p className='font-secondary leading-tight'>{description}</p>
              </div> 
              </div>
            );
        })}
        </div>
        </motion.div>
      </div>
    </div>
    
  </section>

  );
};

export default Services;
