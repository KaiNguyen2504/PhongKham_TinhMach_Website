import React from "react";
import reviewData from "../../data/reviewData";

const Review = () => {
  return (
    <section id="review" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl p-7">
        <h1 className="mb-8 text-center text-4xl font-bold uppercase text-gray-800">
          Góc chia sẻ
        </h1>

        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {reviewData.map((data) => (
            <li key={data.id}>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <div className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <div className="relative">
                      <p className="text-lg tracking-tight text-gray-700">
                        {data.desc}
                      </p>
                    </div>
                    <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="text-xl font-semibold text-gray-800">
                          {data.name}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt={data.name}
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }}
                          src={data.img}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Review;
