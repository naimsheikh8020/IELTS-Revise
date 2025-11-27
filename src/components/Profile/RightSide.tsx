import React, { useState } from "react";
import AccountTab from "./AccountTab";
import SubscriptionTab from "./SubscriptionTab";
import BillingTab from "./BillingTab";

const tabs = ["Account", "Subscription", "Billing"];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <div className="w-full ">
      {/* Tabs Container */}
      <div className="flex bg-white p-2 rounded-full shadow-sm w-full max-w-lg mx-auto mb-6">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1 cursor-pointer py-2 rounded-full text-sm font-medium transition-all
              ${activeTab === tab
                ? "bg-blue-600 text-white shadow"
                : "text-gray-500 hover:bg-gray-100"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white border border-gray-200 shadow-[0_6px_22px_rgba(0,0,0,0.06)] rounded-2xl p-6 ">
        {activeTab === "Account" && (
          <AccountTab />
        )}

        {activeTab === "Subscription" && (
          <SubscriptionTab />
        )}

        {activeTab === "Billing" && (
          <BillingTab />
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
