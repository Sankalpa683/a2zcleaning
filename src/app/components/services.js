import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import Button from "@/components/button"


const services = [
  {
    title: "Galaicha Cleaning",
    description: "Get your galicha (rug) cleaned professionally for a fresh look.",
    benefits: ["Super Affordable Prices", "Available 7 Days A Week", "Fast & Reliable Service"],
    image: 'https://img.freepik.com/free-photo/people-housework-housekeeping-concept-close-up-woman-with-legs-vacuum-cleaner-cleaning-carpet-home_231208-13612.jpg',
  },
  {
    title: "Galaicha Colour",
    description: "Restore or change your rug's color for a renewed appearance.",
    benefits: ["Professional Restoration", "Custom Color Options", "100% Satisfaction Guarantee"],
    image: 'https://img.freepik.com/free-photo/full-frame-shot-multi-colored-glitter-background_23-2147878517.jpg',
  },
  {
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning to remove dirt and allergens.",
    benefits: ["Affordable Prices", "7-Day Availability", "Professional Equipment"],
    image: 'https://img.freepik.com/free-photo/woman-casual-wear-vacuum-cleaning-carpet_1163-2428.jpg',
  },
  {
    title: "Marble Cleaning & Polishing",
    description: "Polish your marble surfaces for a sparkling shine.",
    benefits: ["Expert Polishing", "Restores Shine", "Affordable Prices"],
    image: '/marble.jpeg',
  },
  {
    title: "Water Tank Cleaning",
    description: "Clean your water tank to ensure safe and hygienic water.",
    benefits: ["Health-Safe Cleaning", "Quick & Efficient", "Affordable Prices"],
    image: '/tankcleaning.jpg',
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning for homes that need extra attention.",
    benefits: ["Affordable Prices", "Professional Team", "Satisfaction Guaranteed"],
    image: 'https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg?t=st=1726327421~exp=1726331021~hmac=744f8a10e00697999226e73dad5d86a19296bb795c35bf0a1abdc18260d56aac&w=996',
  },
  {
    title: "Kitchen chimney cleaning and repair",
    description: "Clean your Kitchen from your cleaning services to ensure safe and hygienic Kitchen",
    benefits: ["Health-Safe Cleaning", "Affordable Prices", "Quick & Efficient"],
    image: '/kitchen.jpeg',
  },
  {
    title: "Pigeon Net Installing",
    description: "Install nets to keep pigeons away from your space.",
    benefits: ["Durable Nets", "Affordable Prices", "Quick Installation"],
    image: '/pegionnet.jpg',
  },
  {
    title: "Bird Spikes Installing",
    description: "Prevent birds from nesting on your property with bird spikes.",
    benefits: ["Professional Installation", "Effective Solution", "Affordable Prices"],
    image: '/birdspkies.jpeg',
  },
  {
    title: "Pest Control",
    description: "Eliminate pests with our professional pest control service.",
    benefits: ["Safe Chemicals", "Effective Pest Removal", "7-Day Availability"],
    image: '/pest.jpeg',
  },
  {
    title: "Parquet Cleaning & Polishing",
    description: "Revive your parquet flooring with cleaning and polishing.",
    benefits: ["Restores Shine", "Professional Service", "Affordable Prices"],
    image: 'https://img.freepik.com/free-photo/man-vacuuming-with-vacuum-cleaner-parquet-floor-living-room_1398-3840.jpg?t=st=1726327465~exp=1726331065~hmac=dd680a99ad743969826a76b29877ab7e56b39fe953e4f1deeca0000936674937&w=900',
  },
  {
    title: "Glass Cleaning",
    description: "Crystal-clear glass cleaning for homes and businesses.",
    benefits: ["Streak-Free Results", "Professional Equipment", "Affordable Prices"],
    image: '/glasscleaning.jpg',
  },
  {
    title: "House Wiring",
    description: "Safe and reliable electrical wiring for your home.",
    benefits: ["Certified Electricians", "Affordable Pricing", "Reliable Service"],
    image: 'https://img.freepik.com/free-photo/electrician-is-mounting-electric-sockets-white-wall-indoors_169016-17799.jpg?t=st=1726327526~exp=1726331126~hmac=bafba842a43104f4f166c808f032547000694504d0b16d44b9bf5c981bcef7fa&w=996',
  },
  {
    title: "Sofa Cleaning",
    description: "Safe and reliable Sofa Cleaning for your home.",
    benefits: ["Certified CLeaning", "Affordable Pricing", "Reliable Service"],
    image: '/sofacleaning.jpg',
  },
  {
    title: "Plumber Service",
    description: "Professional plumbing services for all your needs.",
    benefits: ["Expert Plumbers", "Affordable Prices", "Quick Response"],
    image: 'https://img.freepik.com/free-photo/side-view-woman-working-as-plumber_23-2150746373.jpg?t=st=1726327588~exp=1726331188~hmac=0991964019eee0d483283974eff9c4e56de8f5c9c55ba1ead387c335e54109a2&w=996',
  },
  {
    title: "Electrician Service",
    description: "Licensed electricians for home and commercial services.",
    benefits: ["Certified Professionals", "Affordable Prices", "Quick Response"],
    image: '/electiricalservice.jpg',
  },
  {
    title: "Washing Machine Repair & Installation",
    description: "Quick and reliable washing machine repair and installation.",
    benefits: ["Expert Technicians", "Affordable Prices", "Same-Day Service"],
    image: 'https://img.freepik.com/free-photo/high-angle-man-working-as-plumber_23-2150746327.jpg?t=st=1726326387~exp=1726329987~hmac=a945f26420e589102a60e8d9073f967d8e2d5437620c16c513bec7393875a09a&w=996',
  },
  {
    title: "Fridge Repair",
    description: "Get your fridge fixed by experienced technicians.",
    benefits: ["Affordable Prices", "7-Day Availability", "Professional Repair"],
    image: 'https://img.freepik.com/free-photo/young-man-working-as-electrician-exposing-back-fridge-check-repair-it_662251-2712.jpg?t=st=1726326362~exp=1726329962~hmac=c83a783eca232d2db2e5a216490d90c2627e5bbe4d3f4f6b8d93d23bc267f624&w=996',
  },
  {
    title: "AC Repair & Installation",
    description: "Professional AC repair and installation services.",
    benefits: ["Expert Technicians", "Affordable Pricing", "Same-Day Service"],
    image: 'https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit_155003-20894.jpg?t=st=1726327613~exp=1726331213~hmac=74f5a8f8ae479119d149870a966f7760fd8948f9b62596f5e1873e97155e3f51&w=996',
  },
  {
    title: "LED TV Repair & Installation",
    description: "Repair or install your LED TV with our expert service.",
    benefits: ["Expert Technicians", "Affordable Prices", "Same-Day Service"],
    image: 'https://img.freepik.com/free-photo/front-view-man-repairing-computer_23-2148419159.jpg?t=st=1726326326~exp=1726329926~hmac=afc3557474d232978f6452f39eb77ddc7e8de0e840f5b2189b6d195df72a778c&w=996',
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
