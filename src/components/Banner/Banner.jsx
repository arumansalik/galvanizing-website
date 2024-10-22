import { motion } from "framer-motion";
import { SlideUp } from "../../animation";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="pb-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 20, delay: 0.2 }}
              src={image}
              alt=""
              className="w-[600px] h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[700px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-amber-500 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-xl lg:text-2xl font-semibold capitalize "
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm lg:text-xl text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Get Started</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
