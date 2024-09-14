import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import Button from "@/components/button"


const services = [
  {
    title: "Galicha Cleaning",
    description: "Get your galicha (rug) cleaned professionally for a fresh look.",
    benefits: ["Super Affordable Prices", "Available 7 Days A Week", "Fast & Reliable Service"],
    image: 'https://example.com/galicha-cleaning.png',
  },
  {
    title: "Galaicha Colour",
    description: "Restore or change your rug's color for a renewed appearance.",
    benefits: ["Professional Restoration", "Custom Color Options", "100% Satisfaction Guarantee"],
    image: 'https://example.com/galaicha-colour.png',
  },
  {
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning to remove dirt and allergens.",
    benefits: ["Affordable Prices", "7-Day Availability", "Professional Equipment"],
    image: 'https://example.com/carpet-cleaning.png',
  },
  {
    title: "Marble Cleaning & Polishing",
    description: "Polish your marble surfaces for a sparkling shine.",
    benefits: ["Expert Polishing", "Restores Shine", "Affordable Prices"],
    image: 'https://example.com/marble-polishing.png',
  },
  {
    title: "Chimney Cleaning & Repair",
    description: "Ensure your chimney is clean and working efficiently.",
    benefits: ["Affordable Prices", "Safe & Professional", "Quick Service"],
    image: 'https://example.com/chimney-cleaning.png',
  },
  {
    title: "Water Tank Cleaning",
    description: "Clean your water tank to ensure safe and hygienic water.",
    benefits: ["Health-Safe Cleaning", "Quick & Efficient", "Affordable Prices"],
    image: 'https://example.com/water-tank-cleaning.png',
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning for homes that need extra attention.",
    benefits: ["Affordable Prices", "Professional Team", "Satisfaction Guaranteed"],
    image: 'https://example.com/deep-cleaning.png',
  },
  {
    title: "Pigeon Net Installing",
    description: "Install nets to keep pigeons away from your space.",
    benefits: ["Durable Nets", "Affordable Prices", "Quick Installation"],
    image: 'https://example.com/pigeon-net.png',
  },
  {
    title: "Bird Spikes Installing",
    description: "Prevent birds from nesting on your property with bird spikes.",
    benefits: ["Professional Installation", "Effective Solution", "Affordable Prices"],
    image: 'https://example.com/bird-spikes.png',
  },
  {
    title: "Pest Control",
    description: "Eliminate pests with our professional pest control service.",
    benefits: ["Safe Chemicals", "Effective Pest Removal", "7-Day Availability"],
    image: 'https://example.com/pest-control.png',
  },
  {
    title: "Parquet Cleaning & Polishing",
    description: "Revive your parquet flooring with cleaning and polishing.",
    benefits: ["Restores Shine", "Professional Service", "Affordable Prices"],
    image: 'https://example.com/parquet-cleaning.png',
  },
  {
    title: "Glass Cleaning",
    description: "Crystal-clear glass cleaning for homes and businesses.",
    benefits: ["Streak-Free Results", "Professional Equipment", "Affordable Prices"],
    image: 'https://example.com/glass-cleaning.png',
  },
  {
    title: "House Wiring",
    description: "Safe and reliable electrical wiring for your home.",
    benefits: ["Certified Electricians", "Affordable Pricing", "Reliable Service"],
    image: 'https://example.com/house-wiring.png',
  },
  {
    title: "Plumber Service",
    description: "Professional plumbing services for all your needs.",
    benefits: ["Expert Plumbers", "Affordable Prices", "Quick Response"],
    image: 'https://example.com/plumber-service.png',
  },
  {
    title: "Electrician Service",
    description: "Licensed electricians for home and commercial services.",
    benefits: ["Certified Professionals", "Affordable Prices", "Quick Response"],
    image: 'https://example.com/electrician-service.png',
  },
  {
    title: "Washing Machine Repair & Installation",
    description: "Quick and reliable washing machine repair and installation.",
    benefits: ["Expert Technicians", "Affordable Prices", "Same-Day Service"],
    image: 'https://example.com/washing-machine-repair.png',
  },
  {
    title: "Fridge Repair",
    description: "Get your fridge fixed by experienced technicians.",
    benefits: ["Affordable Prices", "7-Day Availability", "Professional Repair"],
    image: 'https://example.com/fridge-repair.png',
  },
  {
    title: "AC Repair & Installation",
    description: "Professional AC repair and installation services.",
    benefits: ["Expert Technicians", "Affordable Pricing", "Same-Day Service"],
    image: 'https://example.com/ac-repair.png',
  },
  {
    title: "LED TV Repair & Installation",
    description: "Repair or install your LED TV with our expert service.",
    benefits: ["Expert Technicians", "Affordable Prices", "Same-Day Service"],
    image: 'https://example.com/led-tv-repair.png',
  },
];


const Service = ({ title, description, benefits, image }) => {
  return (
    <div className='flex flex-col py-6 px-4 text-start border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 duration-300'>
      <img src={image} alt={title} className='rounded-lg mb-4 w-full h-48 object-cover' />
      <h3 className='text-2xl font-bold mb-2'>
        {title}
      </h3>
      <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
        {description}
      </p>
      <ul className='text-neutral-600 dark:text-neutral-400 mb-4'>
        {benefits.map((benefit, index) => (
          <li key={index} className='flex flex-wrap items-center justify-start gap-2 mb-1'>
            <HiCheck className='text-lg text-green-500' />
            {benefit}
          </li>
        ))}
      </ul>
      <div className='mt-auto'>
        <a href='/book-now'><button className='bg-[#007aff] py-3 w-full text-center justify-center capitalize flex items-center text-white gap-2 px-4 font-medium rounded-lg'>
          <MdCleaningServices /> Book this service ➜
        </button></a>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <>
      <section className='py-16 bg-white dark:bg-neutral-900'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <p className="font-medium text-lg text-[#007aff]">Our Services</p>
            <h2 className='text-4xl pt-10 font-extrabold text-neutral-800 dark:text-neutral-100'>
              Quality Cleaning Services <span className='text-[#007aff]'>Tailored to Your Needs</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <Service key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <br />
      <hr />
    </>
  );
};

export default OurServices;
