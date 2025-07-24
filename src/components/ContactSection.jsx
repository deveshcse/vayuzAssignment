import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className=" bg-[#131313] px-6 md:px-16 py-10">
      <div className="flex flex-col md:grid grid-cols-5 justify-between gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
