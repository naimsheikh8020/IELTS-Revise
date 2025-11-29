import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { X } from "lucide-react";

interface BankCardProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CardFormValues {
  cardNumber: string;
  holderName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

const BankCard: React.FC<BankCardProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CardFormValues>();

  const cardNumber = watch("cardNumber");

  // Format #### #### #### ####
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // only numbers
    value = value.substring(0, 16); // max 16 digits
    value = value.replace(/(.{4})/g, "$1 ").trim(); // add spaces every 4 digits
    setValue("cardNumber", value);
  };

  // Prevent numbers in Card Holder Name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[0-9]/g, "");
    setValue("holderName", value);
  };

  const onSubmit: SubmitHandler<CardFormValues> = (data) => {
    console.log("FINAL CARD DATA:", data);
    onClose();
  };

  if (!isOpen) return null;

  // Generate Month & Year options
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 12 }, (_, i) => String(25 + i)); // 2025–2036

  return (
    <div className="
      fixed inset-0 bg-black/40 backdrop-blur-sm 
      flex items-center justify-center z-50 px-4 animate-fadeIn
    ">
      <div className="
        bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md 
        animate-scaleIn border border-gray-200
      ">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Add New Card</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Card Number */}
          <div>
            <label className="text-sm font-medium text-gray-700">Card Number</label>
            <input
              value={cardNumber || ""}
              onChange={handleCardNumberChange}
              required
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="
                w-full mt-1 px-4 py-2.5 bg-gray-100 border border-gray-300 
                rounded-xl focus:ring-blue-500 outline-none
              "
            />
          </div>

          {/* Card Holder Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Card Holder Name</label>
            <input
              {...register("holderName", { required: true })}
              required
              onChange={handleNameChange}
              placeholder="John Doe"
              className="
                w-full mt-1 px-4 py-2.5 bg-gray-100 border border-gray-300 
                rounded-xl focus:ring-blue-500 outline-none
              "
            />
          </div>

          {/* Expiry + CVV */}
          <div className="flex gap-4">
            
            {/* Expiry Month */}
            <div className="w-1/2">
              <label className="text-sm font-medium text-gray-700">Expiry Month</label>
              <select
                {...register("expiryMonth", { required: true })}
                required
                className="
                  w-full mt-1 px-4 py-2.5 bg-gray-100 border border-gray-300 
                  rounded-xl focus:ring-blue-500 outline-none
                "
              >
                <option value="">MM</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Expiry Year */}
            <div className="w-1/2">
              <label className="text-sm font-medium text-gray-700">Expiry Year</label>
              <select
                {...register("expiryYear", { required: true })}
                required
                className="
                  w-full mt-1 px-4 py-2.5 bg-gray-100 border border-gray-300 
                  rounded-xl focus:ring-blue-500 outline-none
                "
              >
                <option value="">YY</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* CVV */}
          <div>
            <label className="text-sm font-medium text-gray-700">CVV</label>
            <input
              {...register("cvv", { required: true })}
              placeholder="123"
              required
              maxLength={3}
              inputMode="numeric"
              pattern="[0-9]*"
              className="
                w-full mt-1 px-4 py-2.5 bg-gray-100 border border-gray-300 
                rounded-xl focus:ring-blue-500 outline-none
              "
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Card
            </button>
          </div>

        </form>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { 0% { opacity: 0; transform: scale(0.92); } 100% { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out; }
      `}</style>
    </div>
  );
};

export default BankCard;
