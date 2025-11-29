import React, { useState } from 'react'
import { CreditCard, Trash2, Plus } from 'lucide-react'
import BankCard from "./BankCard"; // 👈 IMPORTANT

const BillingTab = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '26',
      brand: 'visa'
    }
  ])

  const [billingHistory, setBillingHistory] = useState([
    { id: 1, amount: 199, currency: '£', date: '2025-10-12', status: 'paid', invoiceUrl: '/2025-10.pdf' },
    { id: 2, amount: 199, currency: '£', date: '2025-09-12', status: 'paid', invoiceUrl: '/2025-09.pdf' },
    { id: 3, amount: 199, currency: '£', date: '2025-08-12', status: 'paid', invoiceUrl: '/2025-08.pdf' },
  ])

  // 👇 Add modal state here
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  const handleDeleteCard = (id: number) =>
    setPaymentMethods((prev) => prev.filter((c) => c.id !== id));

  const handleDownloadInvoice = (url: string) =>
    console.log('Download invoice:', url);

  return (
    <div className="w-full h-full p-4 overflow-auto">
      <div className="w-full space-y-5">

        {/* Payment Method */}
        <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-gray-900">Payment Method</h2>
          </div>

          {/* Card List */}
          <div className="space-y-3">
            {paymentMethods.map((card) => (
              <div
                key={card.id}
                className="bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      •••• {card.last4}
                    </p>
                    <p className="text-xs text-gray-500">
                      Expires {card.expiryMonth}/{card.expiryYear}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="p-2 rounded-md hover:bg-red-50 group"
                >
                  <Trash2 className="w-4 h-4 text-gray-500 group-hover:text-red-600" />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Card */}
          <button
            onClick={() => setShowAddCardModal(true)}  // 👈 OPEN MODAL
            className="w-full mt-3 flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50"
          >
            <Plus className="w-4 h-4" />
            Add New Card
          </button>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Billing History</h2>

          <div className="space-y-3">
            {billingHistory.map((invoice) => (
              <div
                key={invoice.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 rounded-lg p-3 border border-gray-200 gap-3"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {invoice.currency}{invoice.amount}
                  </p>
                  <p className="text-xs text-gray-500">{invoice.date}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>

                  <button
                    onClick={() => handleDownloadInvoice(invoice.invoiceUrl)}
                    className="px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 👇 MODAL HERE */}
      <BankCard
        isOpen={showAddCardModal}
        onClose={() => setShowAddCardModal(false)}
      />

    </div>
  )
}

export default BillingTab
