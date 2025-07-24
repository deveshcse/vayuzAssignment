const ContactInfo = () => {
  return (
    <div className="bg-[#131313] col-span-3 text-white flex flex-col gap-30 animate-fadeInUp">
      <div className="mt-10 flex gap-4 mb-8">
        <h4 className="animate-fadeInUp delay-[0.1s]">Events</h4>
        <h4 className="animate-fadeInUp delay-[0.2s]">Gen AI</h4>
        <h4 className="animate-fadeInUp delay-[0.3s]">Carriers</h4>
        <h4 className="animate-fadeInUp delay-[0.4s]">Case study</h4>
        <h4 className="animate-fadeInUp delay-[0.5s]">SME Talks</h4>
      </div>
      <div className="animate-fadeInUp delay-[0.6s]">
        <p className="text-2xl md:text-3xl font-light leading-snug mb-4">
          For any collaborative <br />
          projects or enquiries feel free <br />
          to connect with us.
        </p>
        <p className="text-xl font-semibold mt-6">vayuz.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
