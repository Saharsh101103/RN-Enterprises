"use client"
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <blockquote className="text-2xl italic text-gray-900">
          "When we needed funding to initiate a new project, their team provided us with excellent options and guided us through the loan process seamlessly. The personalized attention and tailored financial solutions were exactly what we were looking for."
        </blockquote>
        <cite className="mt-4 block text-gray-600">David Lee, Founder of GrowthVista Startups</cite>
      </div>
      
    </motion.section>
  );
};

export default Testimonial;
