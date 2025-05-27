import { useState, useEffect } from "react";
import heroData from "../../data/heroData";
import {
  ArrowLeftCircleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // đổi slide sau mỗi 3000ms (3s)

    return () => clearInterval(interval); // clear khi unmount
  }, [currentIndex]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden md:h-[600px]">
      {heroData.map((item, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 h-full w-full bg-cover bg-center transition-opacity duration-700 ${
            index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* làm mờ ảnh */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-20 flex h-full flex-col items-start justify-center px-6 text-white md:px-24">
            <h2 className="mb-4 text-2xl font-bold uppercase md:text-5xl">
              {item.content[0]}
            </h2>
            <p className="text-base md:text-xl">{item.content[1]}</p>
          </div>
        </div>
      ))}

      {/* Nút Prev */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 transform rounded-full bg-black/40 p-2 text-3xl text-gray-500 transition hover:bg-black/60"
      >
        <ChevronDoubleLeftIcon className="size-7" />
      </button>

      {/* Nút Next */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 transform rounded-full bg-black/40 p-2 text-3xl text-gray-500 transition hover:bg-black/60"
      >
        <ChevronDoubleRightIcon className="size-7" />
      </button>

      <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center space-x-2">
        {heroData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === idx ? "bg-gray-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
