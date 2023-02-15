import React from 'react';
import { useRef } from 'react';
// motion
import {motion} from 'framer-motion'; 
// variants 
import {fadeIn} from '../variants'; 

import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_xxcw99n', 'template_x0v8d0y', form.current, '3Pb7kuKz5bE7Bgugt')
      .then((result) => {
          console.log(result.Success);
         
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return ( 
  
  <section className='py-16 lg:section' id='contact'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row
    '>
    {/* text */}
    <motion.div 
    variants= {fadeIn('right', 0.3)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
    className='flex-1 flex justify-start items-center'>
      <div>
        <h4 className='text-xl upper
         text-accent font-medium mb-2 tracking-wide '>
          Get in touch</h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '> Contact Me 
        </h2>
      </div>
    </motion.div>
    {/* form */}
    <motion.form 
    ref= {form}
    onSubmit={sendEmail}
    variants= {fadeIn('left', 0.3)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
    className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
      <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name = 'user_name' required type='text' placeholder='Your name'/>
      <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name = 'user_email' required type='text' placeholder='Your email'/>
      <textarea
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name= 'subject' placeholder='Your message'
      >
      </textarea>
    
      <button type="submit" className='btn btn-lg'>Send Message</button>
    </motion.form>
    </div>
  </div>
  </section>

  )
};

export default Contact;
