"use client"
import Image from 'next/image';
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { motion } from 'framer-motion';
function HomePage() {
  return (
    <motion.div 
    initial={{ opacity:0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
transition={{duration: 1}} className="w-full bg-HeroBG my-5 p-4">
      <div className="mx-auto px-4 ">
        <div className="flex flex-col items-center ">
        <AspectRatio ratio={3.5/1} className='container mx-auto '>
            <Image src={"/services.png"} alt={""} width={1400} height={800} className='rounded-2xl'/>
        </AspectRatio>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Driving Growth Through Strategic Marketing</h1>
          <p className="text-lg text-gray-600 mb-8">
            We are a team of experienced professionals dedicated to helping businesses achieve their goals. We offer a wide range of services, including consultancy, audit & assurance, and tax planning services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
              <h2 className="text-xl font-bold text-gray-800 ml-4">Consultancy</h2>
            </div>
            <p className="text-gray-600">
              Auditing advice helps you formulate your strategy for the future business diversifications and better Return on Investment (ROI)
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.5A4.5 4.5 0 1016 10.5a4.5 4.5 0 00-5-5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12H7.5m4.5 0H18" /></svg>
              <h2 className="text-xl font-bold text-gray-800 ml-4">Audit & Assurance</h2>
            </div>
            <p className="text-gray-600">
              Auditing needs to give authentic, actionable and insightful statements for the investors to base their investment decisions
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
              <h2 className="text-xl font-bold text-gray-800 ml-4">Tax Planning Services</h2>
            </div>
            <p className="text-gray-600">
              Our specialist's tax knowledge encompasses both national & global laws of taxation. As a result, you would get expert advice
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;