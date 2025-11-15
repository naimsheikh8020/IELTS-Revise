import React, { useState } from 'react';

// --- FAQ Data ---
const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for secure transactions. All payments are processed immediately upon subscription."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately. If you downgrade, your remaining paid time will be credited towards the new plan's rate."
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer a 7-day money-back guarantee for all new subscriptions. If you are not satisfied within the first week, please contact our support team for a full refund."
  },
  {
    question: "Is it possible to modify my subscription later?",
    answer: "Yes, you can manage, pause, or cancel your subscription directly from your user dashboard at any time. There are no long-term contracts for monthly plans."
  },
  {
    question: "What are the options for changing my IELTS test date?",
    answer: "We provide resources to help you prepare regardless of your test date. For official changes to your test date, you must contact the test centre where you booked your IELTS exam directly."
  }
];

// --- 1. AccordionItem Component ---
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    // Conditional styling for the active (open) card
    <div className={`
      mb-3 last:mb-0 rounded-xl shadow-sm transition-all duration-300 ease-in-out
      ${isOpen 
        ? 'border border-blue-400 bg-white shadow-lg' 
        : 'border border-gray-100 bg-white hover:border-gray-300'
      }
    `}>
      
      {/* Question Header */}
      <button
        className="flex justify-between items-center w-full p-5 text-left text-gray-800 font-semibold"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        
        {/* Arrow Icon */}
        <div className={`
          p-1 border border-gray-300 rounded-full transition-transform duration-300 ease-in-out
          ${isOpen 
            ? 'rotate-180 text-blue-500 border-blue-400' 
            : 'text-gray-500 hover:border-blue-400'
          }
        `}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>

      {/* Answer Content */}
      <div 
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        // Dynamically set max-height to handle content length (Tailwind trick for smooth transition)
        style={{ maxHeight: isOpen ? '200px' : '0' }}
      >
        <div className="px-5 pb-5 text-gray-600">
          {item.answer}
        </div>
      </div>
    </div>
  );
};


// --- 2. FAQSection Component (Main component) ---
const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(1); // Set the second item (index 1) to be open by default, matching the image

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Quick answers to help you get the most out of IELTS Revise.</p>
        </div>
        
        {/* Accordion List */}
        <div>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;