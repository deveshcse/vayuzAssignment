import { Minus, Plus } from 'lucide-react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="bg-[#131313] border-gray-700 pb-3 my-6 transition-all duration-300 ease-in-out">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-xl font-semibold text-white focus:outline-none"
      >
        {title}
        <span className="text-3xl">{isOpen ? <Minus /> : <Plus />}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm text-gray-300">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
