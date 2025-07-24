import rectangle3 from "/Rectangle3.svg";
import group20363 from "/public/Group20363.svg";
import group20364 from "/public/Group20364.svg";
const HeroSection = () => {
  return (
    <section className="bg-[#131313]">
      {/* Background Gradient */}
      <div className="bg-radial-[at_100%_50%] from-red-950 to-neutral-900 to-50% w-full h-full">
        <div className="text-white py-16 md:mx-4 flex flex-col md:flex-row items-center justify-start gap-4 relative">
          {/* Left: Text Area */}
          <div className="col-span-2">
            <h2 className="text-5xl font-bold mb-4">
              Unlock the Potential <br /> of Flutter
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Your Premier Partner for Cross-Platform <br />
              App Excellence!
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold">
              UPGRADE YOUR TECH
            </button>
          </div>

          {/* Right: Image Area */}
          <div className="col-span-3 relative flex justify-center items-center  w-xl">
            {/* Main Image */}
            <img
              src={rectangle3}
              alt="Main code block"
              className="rounded-lg shadow-lg w-full object-contain"
            />

            {/* Top Right Small Image */}
            <img
              src={group20363}
              alt="Code snippet 1"
              className="absolute top-36 -right-32 w-72 rounded-md shadow-md"
            />

            {/* Bottom Left Small Image */}
            <img
              src={group20364}
              alt="Code snippet 2"
              className="absolute -bottom-20 right-0 w-72 rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
