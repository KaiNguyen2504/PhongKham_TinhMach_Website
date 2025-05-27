import {
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 justify-between gap-6 text-center md:grid-cols-3 md:text-left">
          {/* Cột 1 */}
          <div>
            <h2 className="text-xl font-bold uppercase leading-relaxed">
              Phòng Khám <br /> Tĩnh Mạch Sài Gòn
            </h2>
          </div>

          {/* Cột 2 */}
          <div className="space-y-2 text-base">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaMapMarkerAlt className="size-5" /> 606/24, Đường 3/2, P.14,
              Q.10, TP.HCM
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaPhone className="size-5" />
              <span>
                0987 95 45 45 /
                <span className="inline md:inline-block">0987 95 05 05</span>
              </span>
            </p>
          </div>

          {/* Cột 3 */}
          <div className="space-y-2 text-base">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaEnvelope className="size-5" /> giantinhmach@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaGlobe className="size-5" />
              <a
                href="http://www.phongkhamtinhmach.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                www.phongkhamtinhmach.com
              </a>
            </p>
          </div>
        </div>

        {/* Đường kẻ */}
        <div className="my-4 border-t border-teal-700"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between text-base md:flex-row">
          <p className="mb-3 text-center md:mb-0 md:text-left">
            Copyright 2025 © Phòng khám Tĩnh mạch Sài Gòn
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/giantinhmach/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-teal-900 transition hover:bg-yellow-300"
            >
              <FaFacebookF className="size-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLzuvq_WtwyvUtS16blys2A"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-teal-900 transition hover:bg-yellow-300"
            >
              <FaYoutube className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
