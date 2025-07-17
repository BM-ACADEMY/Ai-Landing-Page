"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function CardStackDemo() {
  return (
    <section className="bg-gradient-to-b from-black to-[#02290c]  pb-20" id="reviews">
      <div className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Our <span className="text-[#facc15] not-italic">Testimonials</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Discover how our courses empower students, job seekers, and
            entrepreneurs to achieve more with AI.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 dark:bg-black">
        <CardStack items={CARDS} />
      </div>
    </section>
  );
}

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const Stars = () => (
  <div className="flex gap-1 mb-2 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400" />
    ))}
  </div>
);

const CARDS = [
  {
    id: 0,
    name: "Aravind S.",
    designation: "Engineering Student",
    content: (
      <div>
        <Stars />
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          I built my final year project using{" "}
          <Highlight>BM Academy’s AI course</Highlight>. The Tamil support was a
          bonus!
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "Fathima",
    designation: "Small Business Owner, Pondicherry",
    content: (
      <div>
        <Stars />
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          I automated customer replies with <Highlight>WhatsApp bots</Highlight>{" "}
          and boosted sales.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Mahesh P.",
    designation: "Job Seeker",
    content: (
      <div>
        <Stars />
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          Offline experience was great! The trainer explained everything clearly
          in <Highlight>Tamil</Highlight>.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Mrs. Shanti",
    designation: "Parent",
    content: (
      <div>
        <Stars />
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          My daughter loved the <Highlight>School AI course</Highlight> – she
          made an AI voice bot on her own!
        </p>
      </div>
    ),
  },
];
