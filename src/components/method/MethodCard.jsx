import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const MethodCard = ({ method }) => {
  return (
    <div className="flex h-[680px] w-full select-none flex-col rounded-xl bg-white text-center shadow-2xl sm:max-w-[330px]">
      <img
        src={method.image}
        alt={method.name}
        className="h-[300px] w-full rounded-t-xl object-cover"
      />
      <div className="w-full bg-teal-700 p-4">
        <span className="text-lg font-medium text-white">{method.name}</span>
      </div>
      <div className="w-full">
        <ul className="w-full space-y-3 text-left text-lg font-normal text-gray-800">
          {method.advantage.map((item, index) => (
            <li key={index} className="grid grid-cols-[auto,1fr] gap-2">
              <CheckCircleIcon className="mt-1 h-5 w-5 pl-1 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MethodCard;
