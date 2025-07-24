import { Minus, Plus } from 'lucide-react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="bg-[#131313] border-gray-700 pb-3 my-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-xl font-semibold text-white focus:outline-none"
      >
        {title}
        <span className="text-3xl">{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      {isOpen && content && (
        <div className="mt-2 text-sm text-gray-300">{content}</div>
      )}
    </div>
  );
};

export default AccordionItem;
