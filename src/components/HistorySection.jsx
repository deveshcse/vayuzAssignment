import { ArrowUpRight } from "lucide-react";
import React from "react";

const HistorySection = () => {
  return (
    <section className="bg-[#131313] w-full mx-auto flex flex-col md:grid grid-cols-3 items-center justify-between p-4 mt-10">
      <div className="col-span-1 text-left text-white">
        <h2 className="text-3xl font-semibold">Flutter's Dawn</h2>
        <p className="mt-2 text-sm text-gray-400">History of Flutter</p>
      </div>

      <div className="col-span-1 text-gray-300 text-left">
        <p>
          Uncover the fascinating story of Flutter in 'Flutter’s Dawn: History
          of Flutter.' From humble origins to global acclaim, delve into its
          captivating narrative. Explore milestones, triumphs, and challenges.
          Whether tech enthusiast or curious mind, join us on this captivating
          journey!{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Click to begin!
          </a>
        </p>
      </div>

      <div className="col-span-1 flex justify-end mt-4">
        <a
          href="#"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 text-lg"
        >
          BEGIN
           <ArrowUpRight />
        </a>
      </div>
    </section>
  );
};

export default HistorySection;

