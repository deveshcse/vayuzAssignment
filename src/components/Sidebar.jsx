import rect43 from "../../public/rect43.svg"
const Sidebar = () => {
  return (
    <section className="border-r border-white/20 w-96 flex flex-col gap-6 justify-start items-center p-4">
      <div className="flex items-center mt-4">
        <img className="w-full" src="/vayuzLogo.svg" alt="Logo" />
      </div>

      <button className="mt-4 relative inline-flex items-center justify-center px-[1px] py-[1px] text-white font-medium rounded-full bg-[#131313] before:absolute before:inset-0 before:rounded-full before:p-[1.5px] before:bg-[conic-gradient(from_90deg_at_50%_50%,#07A7CD_0deg,#FC0600_62.37deg,#09D809_173.97deg,#FF6600_255.65deg,#F60163_290.5deg,#07A7CD_360deg)] before:content-['']">
        <span className="relative z-10 bg-[#131313] rounded-full w-full h-full flex items-center justify-center py-4 px-6 text-lg">
          CONTACT US
        </span>
      </button>

      <div className="flex flex-col gap-6 mt-4 items-start">
        <button className="text-white font-medium text-md text-left">
          APP DEVELOPMENT
        </button>
        <button className="text-white font-medium text-md ">CHALLENGES</button>
        <button className="text-white font-medium text-md ">
          HIRE DEVELOPER
        </button>
        <button className="text-white font-medium text-md ">COMMUNITY</button>
      </div>

      <div className="flex flex-col gap-2 mt-56 items-center text-left text-white text-sm">
        <img src={rect43} alt="image" />
        <span className="">Lorem ipsum dolor sit <br /> amet consectetur. Enim <br /> tempor posuere rutrum.</span>
      </div>

    </section>
  );
};

export default Sidebar;
