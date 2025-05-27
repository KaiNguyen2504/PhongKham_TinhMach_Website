import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { FaBusinessTime, FaMapMarkerAlt } from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu sau khi chọn
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-10 py-2">
        {/*--------------------- logo --------------------------*/}
        {/* col_1 */}
        <div className="flex flex-row items-center gap-3">
          <a href="">
            <img
              className="h-[60px] w-[45px]"
              src={logo}
              alt="Phòng khám Tĩnh mạch Sài Gòn"
            />
          </a>
          <div className="my-1 h-fit">
            <a href="">
              <h1 className="text-lg font-extrabold uppercase text-teal-700">
                Phòng khám <br />
                Tĩnh mạch Sài Gòn
              </h1>
            </a>
          </div>
        </div>

        {/* col_2 */}
        <div className="hidden flex-col gap-2 text-right text-base font-normal text-gray-800 md:flex">
          <div className="flex items-center justify-center gap-1">
            <FaMapMarkerAlt className="size-3" />
            <span className="italic">606/24 Đường 3/2, P.14, Q.10, TPHCM</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaBusinessTime className="size-3" />
            <span className="italic">
              Thứ 2 -Thứ 6: 8h-19h30 ,Thứ 7: 8h-12h
            </span>
          </div>
        </div>

        {/* Menu mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-teal-700 focus:outline-none"
          >
            <Bars3Icon className="size-8 font-bold" />
          </button>
        </div>
      </div>

      {/* Dropdown menu mobile */}
      {isOpen && (
        <div className="absolute z-10 w-full border-t border-gray-200 bg-white text-lg font-medium shadow-xl md:hidden">
          <a
            className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white"
            onClick={() => scrollToSection("sign")}
          >
            Dấu hiệu
          </a>
          <a
            className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white"
            onClick={() => scrollToSection("method")}
          >
            Phương pháp điều trị
          </a>
          <a
            className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white"
            onClick={() => scrollToSection("about")}
          >
            Đội ngũ bác sĩ
          </a>
          <a
            className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white"
            onClick={() => scrollToSection("review")}
          >
            Góc chia sẻ
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
