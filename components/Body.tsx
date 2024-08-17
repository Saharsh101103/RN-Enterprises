"use client"
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Body() {
  return (
    <motion.div 
    initial={{ opacity:0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
transition={{duration: 1}}>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg shadow-md overflow-hidden">
            <AspectRatio ratio={1 / 1}>
              <Image
                src="/accountant.jpeg"
                alt="Accountant"
                className="w-full"
                fill
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Trust With Our Best Accountants
            </h2>
            <p className="text-gray-600 mb-4">
              Invess is the number one accounting & finance back office support
              provider in the market. We're pride of ourselves on transforming
              our clients for the better, helping them to grow & making them
              more resilient to in the business
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">500</h3>
                <p className="text-gray-600">Successful audits</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">98%</h3>
                <p className="text-gray-600">On-Time Filing Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-32 bg-secondary flex justify-around items-center">
        <div className="text-primary text-2xl font-bold text-wrap">
            Looking for a premium accounting for your business?
        </div>
        <Button className="text-secondary-foreground"> Get Started </Button>
      </div>
    </motion.div>
  );
}

export default Body;
