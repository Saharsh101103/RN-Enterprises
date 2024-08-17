"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <motion.div 
    initial={{ opacity:0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
transition={{duration: 1}} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex justify-center items-center space-x-10  px-4 md:px-6">
       
        <div className="space-y-6">
            <div className="container max-w-xl">

          <h1 className="text-4xl font-bold tracking-tighter">We provide expert advice for all size businesses</h1>
          <p className="text-secondary-foreground mb-8">Whether you're a startup or an established enterprise, our tailored expert advice is designed to meet the unique needs of businesses at any scale, ensuring your growth.</p>
            </div>
          <div className="flex flex-wrap justify-center gap-6">

          <div className="bg-white rounded-lg shadow-md p-6">

            <h2 className="text-xl font-bold mb-2">80</h2>

            <p className="text-gray-600">Industries Served</p>

          </div>

          <div className="bg-white rounded-lg shadow-md p-6">

            <h2 className="text-xl font-bold mb-2">95%</h2>

            <p className="text-gray-600">Client satisfaction rate</p>

          </div>

        </div>
        </div>
        <Image
          src="/expert.jpeg"
          width="500"
          height="500"
          alt="Expert"
          className="aspect-[1/1] object-cover object-center rounded-2xl"
        />

      </div>
      
    </motion.div>
  )
}