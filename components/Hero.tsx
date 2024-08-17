"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div 
    initial={{ opacity:0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
transition={{duration: 1}}
    className="bg-HeroBG bg-cover bg-center  flex items-center justify-center">
      <main className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        {/* Left side content */}
        <div className="max-w-4xl space-y-4">
          <Badge variant="outline">Your Success, Our Priority</Badge>
          <h1 className="text-7xl font-bold leading-tight md:text-5xl">
            Transform Your Business with Expert Accounting Services
          </h1>
          <p className="text-3xl text-gray-600">
            Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta testing. Override the
            digitalization divide with additional clickthroughs.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="px-6 py-3 bg-foreground text-primary">
              Get started
            </Button>
            <Button variant="outline" className="px-6 py-3">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Right side content (Image and Progress) */}
        <div className="relative">
          <Image
            src="/hero.png"
            alt="Business man"
            width={600}
            height={800}
            className="rounded-lg"
            style={{ aspectRatio: "300/400", objectFit: "cover" }}
          />
          <div className="absolute bottom-10 p-4 shadow-lg rounded-lg bg-primary ">
            <div className="flex items-center justify-between space-x-2">
              <span>Tax consultations</span>
              <span>91%</span>
            </div>
            <Progress value={91} className="w-full h-2 mt-2 " />
            <div className="flex items-center justify-between mt-4 space-x-2">
              <span>Budget management</span>
              <span>87%</span>
            </div>
            <Progress value={87} className="w-full h-2 mt-2 " />
          </div>
        </div>
      </main>
    </motion.div>
  )
}
