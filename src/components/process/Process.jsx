import React from "react";
import processData from "../../data/processData";

const Process = () => {
  return (
    <div className="mx-auto max-w-5xl p-7">
      <h1 className="mb-8 text-center text-4xl font-bold uppercase text-gray-800">
        Quy trình thăm khám
      </h1>

      {/* process */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {processData.map((item) => (
          <div
            className="h-80 w-[full] rounded-xl bg-white p-3 shadow-2xl"
            key={item.id}
          >
            <div className="flex h-[110px] items-center space-x-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-700">
                <span className="flex shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white">
                  {item.id}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
            </div>

            <div className="py-1">
              <p className="text-lg font-normal text-gray-800">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
