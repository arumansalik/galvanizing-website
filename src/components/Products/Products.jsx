// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '../constants'

const Products = () => {
    return (
        <div className='py-20 bg-gray-200' >
        <div className="space-y-2 p-3 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-amber-500">Our Premium Products</h1>
          <p className="fontsemibold text-3xl">
          Built to Last: Superior Galvanized Steel & Iron Products
          </p>
        </div>
        <div className="flex items-center justify-center flex-col h-[400px]">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[70%] lg:max-w-[80%]"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <h1 className="text-xl lg:text-2xl text-black group-hover:text-white">{item.title} </h1>
                    <p className="text-[10px] lg:text-[18px] text-white opacity-0 group-hover:opacity-100">{item.content} </p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      );
    };

export default Products
