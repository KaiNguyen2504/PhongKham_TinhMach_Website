import React from "react";

const SignCard = ({ symptom }) => {
  return (
    <div>
      <div className="flex h-[380px] w-full select-none flex-col items-center rounded-xl bg-white text-center shadow-2xl">
        <img
          src={symptom.image}
          alt={symptom.name}
          className="mb-4 h-[300px] w-full rounded-t-xl object-cover"
        />
        <p className="text-lg font-medium text-gray-800">{symptom.name}</p>
      </div>
    </div>
  );
};

export default SignCard;
