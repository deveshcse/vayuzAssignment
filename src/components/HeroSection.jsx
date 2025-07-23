import rectangle3 from "/Rectangle3.svg";
import group20363 from "/public/Group20363.svg";
import group20364 from "/public/Group20364.svg";
const HeroSection = () => {
  return (
    <section className="bg-[#131313] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 relative">
      
      {/* Left: Text Area */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Unlock the Potential <br /> of Flutter
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Your Premier Partner for Cross-Platform App Excellence!
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold">
          UPGRADE YOUR TECH
        </button>
      </div>

      {/* Right: Image Area */}
      <div className="flex-1 relative flex justify-center items-center">
        {/* Main Image */}
        <img
          src={rectangle3}
          alt="Main code block"
          className="rounded-lg shadow-lg w-full max-w-md object-contain"
        />

        {/* Top Right Small Image */}
        <img
          src={group20363}
          alt="Code snippet 1"
          className="absolute top-36 -right-4 w-44 rounded-md shadow-md"
        />

        {/* Bottom Left Small Image */}
        <img
          src={group20364}
          alt="Code snippet 2"
          className="absolute -bottom-10 right-8 w-44 rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
