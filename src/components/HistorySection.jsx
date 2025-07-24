import { ArrowUpRight } from "lucide-react";
import React from "react";

const HistorySection = () => {
  return (
    <section className="w-full mx-auto flex flex-col md:grid grid-cols-3 items-center justify-between p-4 mt-10">
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

// //
// //  <section className="bg-[#121212] text-white px-6 py-12 md:py-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

//         {/* Left Title Section */}
//         <div className="text-center md:text-left md:w-1/4">
//           <h2 className="text-3xl md:text-4xl font-semibold">Flutter's<br />Dawn</h2>
//           <p className="mt-2 text-sm text-gray-400">History of flutter</p>
//         </div>

//         {/* Description Text */}
//         <div className="md:w-2/4 text-center md:text-left text-gray-300">
//           <p>
//             Uncover the fascinating story of Flutter in 'Flutter’s Dawn: History of Flutter.'
//             From humble origins to global acclaim, delve into its captivating narrative. Explore milestones,
//             triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey!{' '}
//             <a href="#" className="text-cyan-400 hover:underline">Click to begin!</a>
//           </p>
//         </div>

//         {/* Button */}
// <div className="md:w-1/4 flex justify-center md:justify-end">
//   <a href="#" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
//     BEGIN
//     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//     </svg>
//   </a>
// </div>

//       </div>
//     </section>
