const ContactInfo = () => {
  return (
    <div className="col-span-3 text-white flex flex-col gap-30">
      <div className="mt-10 flex gap-4 mb-8">
        <h4>Events</h4>
        <h4>Gen AI</h4>
        <h4>Carriers</h4>
        <h4>Case study</h4>
        <h4>SME Talks</h4>
      </div>
      <div>
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
