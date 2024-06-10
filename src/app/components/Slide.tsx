"use client"
import React from 'react'
import { motion } from 'framer-motion';


const slides = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
];
interface SlidePropsI{
    index:number,
    dir:"left"|"right"
}
const Slide = ({index,dir}:SlidePropsI) => {
    const duplicatedSlides = [...slides];
    console.log(index);
    return (
        <>
    {/* Wrapping div for seamless looping */}
    <motion.div
        className="flex w-full gap-4 h-full"
        animate={{
            x: dir === 'right' ? [`-${index}%`,`0%`] : [`0%`,`${index}%`],
            transition: {
              ease: 'linear',
              duration: 5,
              repeat: Infinity,
            },
          }}
    >
        {/* Render duplicated slides  style={{ width: `${100 / slides.length}%` }} */}
        {duplicatedSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 min-w-32 bg-white rounded-md h-full">
                <div className="flex flex-col items-center justify-center h-full text-2xl">
                    {slide.number}
                </div>
            </div>
        ))}
    </motion.div>
    </>
);
}

export default Slide