// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
// import { div } from "framer-motion/client";
import pf from "../../assets/Profile/pf.png";
import pf1 from "../../assets/Profile/pf1.png";

const TestimonialsData = [
  {
    id: 1,
    name: "Ibrahim Abdul Hameed",
    desc: "2 reviews",
    text: "I appreciate SG for their excellent service, consistently delivering high-quality results while honoring commitments in a timely and professional manner.",
    img: pf,
    delay: 0.5,
  },
  {
    id: 2,
    name: "Md Sowban Firdaus",
    desc: "1 reviews",
    text: "Thanks to their exceptional customer-centric approach, collaborating with them has been a fantastic experience that I highly recommend to others! 👍",
    img: pf,
    delay: 0.2,
  },
  {
    id: 3,
    name: "Das Liton",
    desc: "4 reviews",
    text: "Thank you for everything! I truly appreciate your exceptional service, dedication, and customer-centric approach. It’s always a pleasure working with you! 🙏",
    img: pf1,
    delay: 0.8,
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
          infinte: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinte: true,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10" name="reviews">
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
                <div key={item.id}>
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
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testtimonials;
