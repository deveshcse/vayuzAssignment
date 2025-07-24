import { useState } from "react";
import AccordionItem from "./AccordionItem";
const services = [
  {
    title: "Flutter App Development",
    content: (
      <>
        Unlock endless possibilities with Flutter App Development. Build beautiful,
        high-performance applications for any platform – faster and easier than ever before.
        Ready to revolutionize your app experience?{" "}
        <a href="#" className="text-cyan-400 underline">Let’s get started today!</a>
      </>
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <>
        We craft intuitive and engaging interfaces that put user experience at the forefront.
        From wireframes to pixel-perfect designs, we ensure a seamless flow that users love.
        <br />
        <span className="text-cyan-400">Let’s design excellence together!</span>
      </>
    ),
  },
  {
    title: "Customization & Integration",
    content: (
      <>
        Tailor your digital experience with our customization and integration services.
        We seamlessly connect your systems and tools to improve efficiency and user engagement.
        <br />
        <span className="text-cyan-400">Let's make it fit your needs!</span>
      </>
    ),
  },
  {
    title: "Testing & Quality Assurance",
    content: (
      <>
        Ensure your application is robust, secure, and bug-free with our expert QA services.
        We run comprehensive manual and automated tests to maintain high standards of quality.
        <br />
        <span className="text-cyan-400">Test early, test often, launch confidently!</span>
      </>
    ),
  },
  {
    title: "Maintenance & Support",
    content: (
      <>
        Our dedicated support team ensures your application stays updated, secure, and optimized.
        From routine checks to urgent fixes – we’ve got your back long after deployment.
        <br />
        <span className="text-cyan-400">Focus on growth, we’ll handle the rest.</span>
      </>
    ),
  },
  {
    title: "Consulting & Training",
    content: (
      <>
        Leverage our expertise through personalized consulting and team training.
        We empower your team with insights, best practices, and hands-on sessions tailored to your goals.
        <br />
        <span className="text-cyan-400">Build smarter, lead stronger.</span>
      </>
    ),
  },
  {
    title: "Migration & Upgrades",
    content: (
      <>
        Seamlessly migrate legacy systems or upgrade existing platforms with zero disruption.
        Our proven strategies ensure data integrity and minimal downtime throughout the process.
        <br />
        <span className="text-cyan-400">Let’s modernize your tech stack!</span>
      </>
    ),
  },
];


const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#131313] px-4 text-white py-16">
      <div className=" mx-auto flex flex-col items-center text-center mb-12">
        <h2 className="text-4xl font-semibold mb-2">
          Our Dynamic Services Suite!
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-sm text-gray-400 mb-8 max-w-xl">
          Step into innovation! Explore our range of services and let’s create
          something extraordinary together. Your vision, our expertise. Let’s
          begin!
        </p>
      </div>

      <div className="w-full flex flex-col md:grid grid-cols-5 space-x-5">
        <div className=" col-span-3">
            {services.map((service, index) => (
                <AccordionItem
                key={index}
                title={service.title}
                content={service.content}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
                />
            ))}
        </div>
        <div className=" col-span-2 ">
            <img src="/serviceImage.svg" alt="serviceImage" />
        </div>
      </div>
     
    </section>
  );
};

export default ServiceSection;
