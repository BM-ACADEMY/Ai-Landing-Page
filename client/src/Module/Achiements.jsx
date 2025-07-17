import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import leftLaurel from '../assets/images/left.png';
import rightLaurel from '../assets/images/right.png';

const CountUpItem = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <span className="block text-3xl md:text-5xl font-bold text-white">
        {count}+
      </span>
      <span className="block text-sm md:text-base text-gray-300 mt-2">
        {label}
      </span>
    </div>
  );
};

export default function AwardHeadingWithStats() {
  return (
    <div className="bg-gradient-to-b from-black to-[#02290c] w-full" id="achievements">
      {/* Award Heading */}
      <div className="flex items-center justify-center gap-4 md:gap-6 py-8 px-4 text-center">
        <img
          src={leftLaurel}
          alt="Left Laurel"
          className="w-14 md:w-14 h-auto object-contain"
        />
        <h1 className="text-base md:text-4xl font-extrabold leading-tight">
          <span className="block text-white">Our Achievements</span>
        </h1>
        <img
          src={rightLaurel}
          alt="Right Laurel"
          className="w-14 md:w-14 h-auto object-contain"
        />
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 pb-12">
        {/* Top 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CountUpItem target={10000} label="Students Trained Across India & Abroad" />
          <CountUpItem target={200} label="Campus Workshops Conducted" />
          <CountUpItem target={10} label="Countries our students come from" />
        </div>

        {/* Bottom 2 items centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <CountUpItem target={1000} label="Projects & Job Offers Enabled" />
          <CountUpItem target={25} label="hSmall Businesses Automated Using AI" />
        </div>
      </div>
    </div>
  );
}
