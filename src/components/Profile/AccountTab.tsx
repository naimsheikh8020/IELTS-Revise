import React from "react";

const AccountTab = () => {
  return (
    <div className="text-gray-700 ">

      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Personal Information
      </h2>

      {/* Name + Email */}
      <div className="flex flex-col sm:flex-row sm:gap-4">
        {/* Full Name */}
        <div className="mb-5 w-full sm:w-1/2">
          <label className="text-sm text-gray-600 font-medium">Full Name</label>
          <input
            type="text"
            defaultValue="Sarah Chen"
            className="w-full mt-1 bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 rounded-xl text-[15px] transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-5 w-full sm:w-1/2">
          <label className="text-sm text-gray-600 font-medium">Email Address</label>
          <input
            type="email"
            defaultValue="sarah.chen@example.com"
            className="w-full mt-1 bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 rounded-xl text-[15px] transition-all"
          />
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Change Password
      </h2>

      {/* Current Password */}
      <div className="mb-5">
        <label className="text-sm text-gray-600 font-medium">Current Password</label>
        <input
          type="password"
          placeholder="Enter current password"
          className="w-full mt-1 bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 rounded-xl text-[15px] transition-all"
        />
      </div>

      {/* New Password */}
      <div className="mb-5">
        <label className="text-sm text-gray-600 font-medium">New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full mt-1 bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 rounded-xl text-[15px] transition-all"
        />
      </div>

      {/* Confirm New Password */}
      <div className="mb-7">
        <label className="text-sm text-gray-600 font-medium">Confirm New Password</label>
        <input
          type="password"
          placeholder="Re-enter new password"
          className="w-full mt-1 bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 p-3 rounded-xl text-[15px] transition-all"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white text-[15px] font-medium hover:bg-blue-700 active:scale-95 transition-all">
          Save Changes
        </button>
        <button className="px-6 py-3 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 text-[15px] font-medium hover:bg-gray-200 active:scale-95 transition-all">
          Cancel
        </button>
      </div>

    </div>
  );
};

export default AccountTab;
