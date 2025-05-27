import React from "react";
import MethodCard from "./MethodCard";

const MethodList = ({ methods }) => {
  return (
    <section id="method" className="scroll-mt-16">
      <div className="animate-fadeIn mx-auto max-w-5xl p-7">
        <h1 className="mb-8 text-center text-4xl font-bold uppercase text-gray-800">
          Các phương pháp điều trị giãn tĩnh mạch
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {methods.map((method, index) => (
            <div
              key={index}
              className={`${
                methods.length === 3 && index === 2
                  ? "flex justify-center sm:col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <MethodCard method={method} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodList;
