// eslint-disable-next-line no-unused-vars
import { React } from "react";
import Img1 from "./assets/banner.png";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Testtimonials from "./components/Testimonials/Testtimonials";
import Contact from "./components/Contact/Contact";
// import HotDip from "./components/HotDip/hotdip";

const BannerData = {
  image: Img1,
  tag: "our main services",
  title: "HOT-DIP GALVANIZING",
  subtitle:
    "Hot dip galvanizing is a process of coating steel or iron with a layer of zinc by immersing the metal in a bath of molten zinc. The process involves cleaning and pre-treating the metal surface, followed by immersion in the zinc bath. The resulting zinc coating provides durable and long-lasting corrosion protection, making it a popular choice in construction, automotive manufacturing, and industrial settings.",
  link: "#",
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner {...BannerData} />
      <Services />
      <Products />
      {/* <HotDip /> */}
      <Testtimonials />
      <Contact />
    </div>
  );
};

export default App;
