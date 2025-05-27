import React, { useState, useEffect } from "react";
import { FaFacebookMessenger, FaPhoneAlt, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const SpeedDial = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <div
      className={`fixed bottom-5 left-5 flex flex-col items-start space-y-3 sm:bottom-[365px] md:bottom-[210px] ${showBtn ? "opacity-100" : "pointer-events-none opacity-0"} `}
    >
      {open && (
        <div className="mb-2 flex flex-col items-start space-y-2">
          {/* Gọi điện */}
          <a
            href="tel:0987954545"
            className="flex items-center space-x-2 rounded-full bg-teal-700 px-4 py-2 text-white shadow transition hover:bg-green-700"
          >
            <FaPhoneAlt size={18} />
            <span>0987 95 45 45</span>
          </a>

          {/* Facebook Messenger */}
          <a
            href="https://www.facebook.com/giantinhmach/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow transition hover:bg-indigo-700"
          >
            <FaFacebookMessenger size={18} />
            <span>Messenger</span>
          </a>
        </div>
      )}

      {/* Nút chính */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-blue-600 p-3 text-white shadow-lg transition hover:bg-blue-700 sm:p-4"
      >
        {open ? <IoClose className="size-5" /> : <FaPlus className="size-5" />}
      </button>
    </div>
  );
};

export default SpeedDial;
