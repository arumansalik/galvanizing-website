import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";;
import { SlideLeft } from "../../animation";
import "./Services.css";
import { FaCheckCircle } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { MdMoneyOff } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa";

const Servicelist = [
  {
    id: 1,
    title: "Corrosion Resistance",
    desc: "Our hot-dip galvanizing process ensures a strong zinc coating, providing long-term protection against rust and corrosion in harsh conditions such as marine or industrial environments.",
    icon: <FaCheckCircle />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Durability",
    desc: "The zinc layer applied during galvanizing bonds tightly to steel, enhancing its durability. This significantly extends the product's lifespan, reducing wear, maintenance, and frequent repairs.",
    icon: <FaStarOfLife />,
    bgColor: "#fa6400",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Cost-Effective",
    desc: "Hot-dip galvanizing offers a one-time, low-maintenance solution that minimizes long-term expenses. Its durability eliminates the need for expensive repairs, repainting, or frequent replacement.",
    icon: <MdMoneyOff />,
    bgColor: "#73bc00",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fast Turnaround",
    desc: "With advanced facilities and efficient processes, we deliver high-quality galvanizing services quickly, ensuring your steel products are ready for use without delays in your project schedule.",
    icon: <GrCycle />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];

const Services = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container py-10">
        <div className="space-y-3 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-amber-500">Why Choose Hot-Dip Galvanizing</h1>
          <p className="fontsemibold text-3xl">
          The Key Benefits for Long-Lasting Steel Protection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Servicelist.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                <div
                  style={{ background: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
