import React from "react";

const DoctorCard = ({ doctor, onClick_DoctorModal }) => {
  return (
    <div
      onClick={onClick_DoctorModal}
      className="h-[300px] w-full cursor-pointer rounded-2xl p-4 text-center transition hover:scale-105"
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
      />
      <h3 className="text-wrap text-2xl font-semibold text-gray-800">
        {doctor.name}
      </h3>
    </div>
  );
};

export default DoctorCard;
