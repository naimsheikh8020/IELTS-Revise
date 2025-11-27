import React, { useState } from 'react'
import { Crown, Check, Calendar, AlertCircle } from 'lucide-react'

const SubscriptionTab = () => {
  const [subscriptionData] = useState({
    planName: 'Premium',
    status: 'Active',
    price: 199,
    currency: '£',
    billingCycle: 'month',
    nextBillingDate: '2025-11-12',
    features: [
      '100,000+ practice questions',
      'All 4 IELTS sections covered',
      'Detailed answer explanations',
      'Model answers for writing & speaking',
      'Advanced progress tracking',
      'Performance analytics',
      'Priority support',
      'Cancel anytime'
    ]
  })

  return (
    <div className="flex flex-col">
      <div className="">

        {/* Main Card */}
        <div className="bg-white rounded-xl border-2 border-cyan-400 shadow p-4">

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {subscriptionData.planName}
              </h2>
              <span className="bg-green-500 text-white text-[10px] font-medium px-2 py-[2px] rounded-full">
                {subscriptionData.status}
              </span>
            </div>

            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-1.5 rounded-md">
              <Crown className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Price */}
          <div className="mb-5">
            <span className="text-2xl font-bold text-gray-800">
              {subscriptionData.currency}{subscriptionData.price}
            </span>
            <span className="text-gray-500 text-sm">/{subscriptionData.billingCycle}</span>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-5">
            {subscriptionData.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 mt-[2px]" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Billing */}
          <div className="bg-cyan-50 rounded-lg p-3 mb-5">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-4 h-4 text-cyan-600" />
              <span className="font-medium text-sm">Next Billing Date</span>
            </div>
            <div className="text-gray-600 mt-1 ml-6 text-sm">
              {subscriptionData.nextBillingDate}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 text-sm py-2 rounded-md hover:bg-gray-50 transition">
              Change Plan
            </button>
            <button className="flex-1 bg-white border border-red-300 text-red-600 text-sm py-2 rounded-md hover:bg-red-50 transition">
              Cancel
            </button>
          </div>

        </div>

        {/* Cancellation Policy */}
        <div className="mt-5 bg-orange-50 border border-orange-200 rounded-md p-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-orange-600 mt-[2px]" />
            <div>
              <h3 className="font-semibold text-orange-900 text-sm">Cancellation Policy</h3>
              <p className="text-xs text-orange-800 mt-1">
                You can cancel your subscription anytime. You'll continue to have access until the end of your billing period.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SubscriptionTab
