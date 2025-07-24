
const HeroSection = () => {
  return (
    <section className="">

      {/* <div className="bg-radial-[at_95%_50%] from-[#00ffd5]/20 to-[#131313] to-50% w-full h-full"> */}
        <div className="text-white py-16 md:mx-4 flex flex-col md:flex-row items-center justify-start gap-4 relative">
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

          <div className="col-span-3 relative flex justify-center items-center  w-lg">
            <img
              src="/Rectangle3.svg"
              alt="Main code block"
              className="rounded-lg shadow-lg w-full object-contain"
            />

             <img
              src="/Group20363.svg"
              alt="Code snippet 1"
              className="absolute top-36 -right-32 w-76 rounded-md shadow-md"
            />

            <img
              src="Group20364.svg"
              alt="Code snippet 2"
              className="absolute -bottom-20 right-0 w-76 rounded-md shadow-md"
            /> 
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
