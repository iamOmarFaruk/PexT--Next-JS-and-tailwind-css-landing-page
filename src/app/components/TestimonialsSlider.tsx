"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TestimonialsSliderProps } from "@/app/types";

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({
  testimonials,
}) => {
  return (
    <section id="testimonials" className="container mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center min-h-[400px]">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="font-bold text-gray-900 text-lg">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {testimonial.position}
              </p>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="italic text-gray-700 mb-4 text-center">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSlider;
