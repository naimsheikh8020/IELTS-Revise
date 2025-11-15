import React from 'react';

// --- 1. PricingCard Component (Uses plan props directly) ---
const PricingCard = ({ plan }) => {
  // --- Styling Logic for Borders and Colors ---
  const themeClasses = {
    light: 'bg-white text-gray-800 border-gray-200 border shadow-lg',
    pro: 'bg-white text-gray-800 border-blue-300 border-2 shadow-2xl',
    vip: 'bg-white text-gray-800 border-gray-200 border shadow-lg',
  };

  const primaryColor = {
    light: 'text-blue-600 border-blue-600 hover:bg-blue-50 border',
    pro: 'bg-blue-600 hover:bg-blue-700 text-white',
    vip: 'bg-blue-600 hover:bg-blue-700 text-white',
  };

  const isPro = plan.theme === 'pro';
  const isVip = plan.theme === 'vip';

  // --- Checkmark Icon Component using the PROVIDED IMAGE URL ---
  const CheckImage = () => (
    <img
      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1763235225/Icon_4_wmtjat.png"
      alt="Blue Checkmark Icon"
      className="h-5 w-5 mr-2 flex-shrink-0 object-contain"
    />
  );

  return (
    // Now uses natural height.
    <div className={`relative flex flex-col p-8 rounded-xl ${themeClasses[plan.theme]}`}>

      {/* 🚀 Pro Plan Badge (Most learners choose) */}
      {isPro && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1  ml-[90px] mt-3 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap">
          <span className="mr-1">
            {/* Crown/Star Icon kept for the badge */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block align-text-top" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4M17 3v4M12 21.03l-1.03-1.03M15.485 18.515l1.03 1.03M18.97 12l1.03 1.03M18.515 8.515l1.03-1.03M21 12h-4M7 9h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
            </svg>
          </span>
          {plan.badgeText}
        </div>
      )}

      {/* 💰 VIP Plan Badge (Save £100) */}
      {isVip && (
        <div className="absolute -top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-lg shadow-md">
          {plan.topBadgeText}
        </div>
      )}

      {/* Header (Title/Price/Period/Description are ALL left-aligned) */}
      <div className="mb-8"> 
        <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
        
        {/* === START: CHANGE for inline Price and Period === */}
        <p className="text-gray-900 flex items-end">
          <span className={`text-5xl font-extrabold ${isVip ? 'text-black' : 'text-gray-900'}`}>{plan.price}</span>
          <span className="text-sm text-gray-500 ml-1 pb-1">{plan.period}</span> {/* pb-1 for minor vertical alignment */}
        </p>
        {/* === END: CHANGE === */}
        
        <p className="mt-4 text-gray-600 font-medium text-left">{plan.description}</p>
      </div>

      {/* Features List (Left-aligned) */}
      <ul className="space-y-4 mb-8 text-left">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <CheckImage /> 
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Button: pt-4 ensures spacing above the button */}
      <div className="pt-4"> 
        <button
          className={`w-full py-3 rounded-lg font-bold transition duration-300 ${primaryColor[plan.theme]}`}
        >
          {plan.buttonText}
        </button>

        {/* VIP Additional Link */}
        {plan.additionalLink && (
          <a href="#" className="mt-3 block border-2 p-2 rounded-lg text-center text-xs text-blue-600 hover:text-blue-800 font-medium">
            {plan.additionalLink}
          </a>
        )}
      </div>
    </div>
  );
};


// --- 3. PricingPage Component (Main component with Inline Data) ---
const PricingPage = () => {
  
  // Data is defined here.
  const pricingPlans = [
    {
      "name": "Free Trial",
      "price": "£0",
      "period": "/ forever",
      "description": "Perfect to get started",
      "features": [
        "20 free questions total",
        "Access to all 4 sections",
        "Basic answer explanations",
        "No credit card required"
      ],
      "buttonText": "Try 20 Free Questions",
      "theme": "light",
    },
    {
      "name": "Pro plan",
      "price": "£19.99",
      "period": "/ per month",
      "description": "Focused IELTS practice",
      "features": [
        "25,000 practice questions",
        "All 4 IELTS sections covered",
        "Basic answer explanations",
        "Progress tracking",
        "Mobile-friendly platform",
        "Cancel anytime"
      ],
      "buttonText": "Get Pro Plan",
      "theme": "pro",
      "badgeText": "Most learners choose",
    },
    {
      "name": "VIP Access",
      "price": "£99",
      "period": "/ Life time",
      "description": "Complete IELTS mastery - Band 7-9",
      "features": [
        "100,000+ practice questions",
        "All 4 IELTS sections covered",
        "Detailed answer explanations",
        "Model answers for writing & speaking",
        "Advanced progress tracking",
        "Performance analytics",
        "Priority support",
        "Cancel anytime"
      ],
      "buttonText": "Get Premium Monthly",
      "theme": "vip",
      "additionalLink": "Get Premium Annual (Save 33%)",
      "topBadgeText": "Save £100",
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">

      {/* 📣 Top Banner */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="text-center">
          <div className="inline-block text-sm font-semibold text-red-700 bg-red-100 py-1.5 px-4 rounded-full shadow-md">
            Save £100/year - Limited spots
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h1>
        <p className="text-lg text-gray-600">Try free. Upgrade anytime.</p>
      </div>

      {/* Pricing Cards Layout: items-start ensures cards align to the top. */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 items-start">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="relative"> 
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;