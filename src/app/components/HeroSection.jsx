"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-green-300 to-green-700">Hello, I'm{" "}</span> 
      <br></br>
      <TypeAnimation
        sequence={[
          'Tirth Patel',
          2000, 
          'Web / Mobile Developer',
          2000,
        ]}
        wrapper="span"
        speed={20}
        repeat={Infinity}
      />
      </h1>
      <p className="text-white text-base sm:text-lg mb-6 mr-6 lg:text-xl"> Enthusiastic and detail-oriented IT student with a passion for technology and a solid foundation in key areas of information technology. Recently graduated from Concordia University of Edmonton in Bachelor of Science program, displaying a strong academic background in Development.</p>
      <div>
      
        <Link
        href="https://drive.google.com/file/d/1BIPBTPLea9K8UiID9an1DMHxdNiOYKOJ/view?usp=drive_link"
        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-green-300 to-green-600 hover:bg-slate-800 text-white mt-3">
        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download My Resume</span></Link>
      </div>
      
    </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >

      <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
      <Image src="/images/tirth.jpg" alt="Tirth Patel" width={300} height={300} className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      </div>

      </motion.div>
    </div>
    </section>
  )
}

export default HeroSection
