import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";

const DoctorModal = ({ doctor, onClose_DoctorModal }) => {
  useEffect(() => {
    if (doctor) {
      document.body.classList.add("overflow-hidden");
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }
  }, [doctor]);

  if (!doctor) return null;

  return (
    <div>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose_DoctorModal}
      >
        <div
          className="relative max-h-[580px] w-11/12 max-w-lg overflow-y-auto rounded-xl bg-white p-5 sm:max-w-md sm:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose_DoctorModal}
            className="absolute right-3 top-3 rounded-full bg-gray-100 p-1 hover:bg-gray-200"
          >
            <XCircleIcon className="size-7 text-gray-800" />
          </button>

          <div className="flex cursor-default flex-col items-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="mx-auto mb-4 h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
            <div className="mt-2">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                {doctor.name}
              </h3>
              {doctor.description.map((desc, index) => (
                <p
                  key={index}
                  className="whitespace-pre-line text-justify font-normal leading-relaxed text-gray-800"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
