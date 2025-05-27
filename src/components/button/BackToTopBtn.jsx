import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll); //when click btn scroll to top
    return () => window.removeEventListener("scroll", handleScroll); // To top then remove function
  }, []);

  // function scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-5 right-5 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-700 sm:bottom-[365px] sm:p-4 md:bottom-[210px] ${
        showBtn ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <FaArrowUp className="size-5" />
    </button>
  );
};

export default BackToTopBtn;
