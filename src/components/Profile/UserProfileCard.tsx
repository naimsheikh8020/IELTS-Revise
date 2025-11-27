import React from "react";
import { Crown, LogOut } from "lucide-react";

interface Props {
  name: string;
  email: string;
  questions: number;
  avgScore: number;
  memberLevel: string;
  memberSince: string;
}

const UserProfileCard: React.FC<Props> = ({
  name,
  email,
  questions,
  avgScore,
  memberLevel,
  memberSince,
}) => {
  return (
    <div className="w-full max-w-xs mt-5">
      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl p-6  shadow-[0_6px_22px_rgba(0,0,0,0.06)]">
        {/* GRADIENT BORDER WRAPPER */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px] rounded-2xl">
          {/* REAL CARD INSIDE */}
          <div className="bg-white rounded-2xl p-6">
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-2xl font-semibold">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
            </div>

            {/* Name + Email */}
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-500">{email}</p>
            </div>

            {/* Membership Card */}
            <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 text-center">
              <Crown size={20} className="mx-auto mb-1 opacity-90" />
              <p className="text-sm font-medium">{memberLevel}</p>
              <p className="text-xs opacity-80">Member since {memberSince}</p>
            </div>

            {/* Stats */}
            <div className="flex justify-between mt-6">
              <div className="w-1/2 text-center">
                <h3 className="text-xl font-semibold">{questions}</h3>
                <p className="text-gray-500 text-sm">Questions</p>
              </div>

              <div className="w-1/2 text-center border-l border-gray-200">
                <h3 className="text-xl font-semibold">{avgScore}</h3>
                <p className="text-gray-500 text-sm">Avg Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION (Inside same card) */}
        <div className="mt-5 md:mt-50 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 font-medium">{name}</p>
              <p className="text-sm text-yellow-600 flex items-center gap-1">
                <Crown size={14} className="text-yellow-500" /> Premium Plan
              </p>
            </div>

            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-lg text-gray-700">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
