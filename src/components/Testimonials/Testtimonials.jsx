// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
// import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import { SlideRight } from "../../animation";

const TestimonialsData = [
  {
    id: 1,
    name: "Aruman Salik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Aruman Salik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img: "https://picsum.photos/101/101",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Aruman Salik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img: "https://picsum.photos/101/101",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Aruman Salik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img: "https://picsum.photos/101/101",
    delay: 1.1,
  },
];
const Testtimonials = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinte: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinte: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl">What Our Customer Says</p>
        </div>
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <motion.div
                  variants={SlideRight(item.delay)}
                  initial="hidden"
                  whileInView={"visible"}
                  key={item.id}
                >
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-blue-100">
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testtimonials;
