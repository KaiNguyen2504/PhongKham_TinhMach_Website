import React, { useRef, useState } from "react";
import DoctorCard from "./DoctorCard";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import doctors from "../../data/doctorData";
import DoctorModal from "../../modal/DoctorModal";

export default function About() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const slider = useRef(null);

  var settings = {
    accessibility: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          initialSlide: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl p-7">
        <h1 className="mb-8 text-center text-4xl font-bold uppercase text-gray-800">
          Đội ngũ bác sĩ
        </h1>

        <div className="relative">
          <div className="mb-4 flex justify-end gap-2">
            <button
              onClick={() => slider.current.slickPrev()}
              className="rounded bg-teal-100 p-2 hover:bg-teal-200"
            >
              <ChevronDoubleLeftIcon className="size-7 text-gray-800" />
            </button>
            <button
              onClick={() => slider.current.slickNext()}
              className="rounded bg-teal-100 p-2 hover:bg-teal-200"
            >
              <ChevronDoubleRightIcon className="size-7 text-gray-800" />
            </button>
          </div>

          <div>
            <Slider ref={slider} {...settings}>
              {doctors.map((item) => (
                <DoctorCard
                  key={item.id}
                  doctor={item}
                  onClick_DoctorModal={() => setSelectedDoctor(item)}
                />
              ))}
            </Slider>
          </div>

          <DoctorModal
            doctor={selectedDoctor}
            onClose_DoctorModal={() => setSelectedDoctor(null)}
          />
        </div>
      </div>
    </section>
  );
}
