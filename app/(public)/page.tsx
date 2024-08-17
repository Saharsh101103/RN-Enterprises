"use client"
import Body from '@/components/Body';
import Expert from '@/components/Expert';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <Services/>
      <Body/>
      <Expert/>
      <Testimonial/>
      <motion.div 
    initial={{ scale: 0.8, opacity: 0}}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{duration: 1}} className="py-10 px-32 bg-gradient-to-br from-secondary to-black flex justify-around items-center">
        <div className="text-primary text-3xl font-bold text-wrap">
            Talk to our best accounting expert now
        </div>
        <Button className="text-secondary-foreground"> Contact Us </Button>
      </motion.div>
    </div>
  );
};

export default Home;
