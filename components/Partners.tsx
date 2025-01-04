import React from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Truck,
  CheckCircle,
  Timer,
  PhoneCall,
  MapPin,
  Gift,
  Smile,
} from 'lucide-react';

const advantages = [
  { icon: Package, title: "Wide Range of Products", description: "Discover an extensive variety of items to suit your needs." },
  { icon: Truck, title: "Fast Delivery", description: "Get your orders delivered to your doorstep quickly and efficiently." },
  { icon: CheckCircle, title: "Quality Assurance", description: "We ensure that every product meets high-quality standards." },
  { icon: PhoneCall, title: "24/7 Customer Support", description: "Always here to assist you with any questions or issues." },
   { icon: Gift, title: "Exclusive Offers", description: "Enjoy amazing discounts and deals tailored just for you." },
  { icon: Smile, title: "Customer Satisfaction", description: "Your happiness is our top priority with every order." },
];

const AdvantageCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-blue-500"
  >
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-gradient-to-tr from-blue-300 to-blue-400 p-4 rounded-full">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export function AdvantagesSection() {
  return (
    <section id="AdvantagesSection" className="py-24 bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Why Shop with Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Experience the best market services designed to make your shopping seamless and satisfying.
          </p>
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
