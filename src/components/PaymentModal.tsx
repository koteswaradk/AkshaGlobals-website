import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  courseName: string
  level: string
  price: number
}

interface CardFormData {
  cardNumber: string
  cardName: string
  expiry: string
  cvv: string
}

interface UpiFormData {
  upiId: string
}

type PaymentTab = 'credit' | 'debit' | 'upi'

export default function PaymentModal({ isOpen, onClose, courseName, level, price }: PaymentModalProps) {
  const [activeTab, setActiveTab] = useState<PaymentTab>('credit')
  const [success, setSuccess] = useState(false)

  const cardForm = useForm<CardFormData>()
  const upiForm = useForm<UpiFormData>()

  const handleCardSubmit = (_data: CardFormData) => {
    setSuccess(true)
  }

  const handleUpiSubmit = (_data: UpiFormData) => {
    setSuccess(true)
  }

  const handleClose = () => {
    setSuccess(false)
    cardForm.reset()
    upiForm.reset()
    setActiveTab('credit')
    onClose()
  }

  if (!isOpen) return null

  const tabs: { id: PaymentTab; label: string }[] = [
    { id: 'credit', label: 'Credit Card' },
    { id: 'debit', label: 'Debit Card' },
    { id: 'upi', label: 'UPI' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-5 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">{courseName}</h2>
              <p className="text-teal-100 text-sm mt-1">{level} Level</p>
            </div>
            <button onClick={handleClose} className="text-white/80 hover:text-white text-xl font-bold">✕</button>
          </div>
          <div className="mt-3 text-3xl font-bold">₹{price.toLocaleString()}</div>
        </div>

        <div className="p-5">
          {success ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                You have successfully enrolled in {courseName} – {level} Level. Check your email for details.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                      activeTab === tab.id
                        ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Card Form (Credit & Debit) */}
              {(activeTab === 'credit' || activeTab === 'debit') && (
                <form onSubmit={cardForm.handleSubmit(handleCardSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Card Number
                    </label>
                    <input
                      {...cardForm.register('cardNumber', {
                        required: 'Card number is required',
                        pattern: { value: /^\d{16}$/, message: 'Enter 16-digit card number' },
                      })}
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {cardForm.formState.errors.cardNumber && (
                      <p className="text-red-500 text-xs mt-1">{cardForm.formState.errors.cardNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name on Card
                    </label>
                    <input
                      {...cardForm.register('cardName', { required: 'Name is required' })}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {cardForm.formState.errors.cardName && (
                      <p className="text-red-500 text-xs mt-1">{cardForm.formState.errors.cardName.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry</label>
                      <input
                        {...cardForm.register('expiry', {
                          required: 'Required',
                          pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Use MM/YY format' },
                        })}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      {cardForm.formState.errors.expiry && (
                        <p className="text-red-500 text-xs mt-1">{cardForm.formState.errors.expiry.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                      <input
                        {...cardForm.register('cvv', {
                          required: 'Required',
                          pattern: { value: /^\d{3,4}$/, message: '3-4 digits' },
                        })}
                        placeholder="•••"
                        maxLength={4}
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      {cardForm.formState.errors.cvv && (
                        <p className="text-red-500 text-xs mt-1">{cardForm.formState.errors.cvv.message}</p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Pay ₹{price.toLocaleString()}
                  </button>
                </form>
              )}

              {/* UPI Form */}
              {activeTab === 'upi' && (
                <form onSubmit={upiForm.handleSubmit(handleUpiSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">UPI ID</label>
                    <input
                      {...upiForm.register('upiId', {
                        required: 'UPI ID is required',
                        pattern: { value: /^[\w.-]+@[\w]+$/, message: 'Enter valid UPI ID (e.g. name@upi)' },
                      })}
                      placeholder="yourname@upi"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {upiForm.formState.errors.upiId && (
                      <p className="text-red-500 text-xs mt-1">{upiForm.formState.errors.upiId.message}</p>
                    )}
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-3 text-sm text-teal-800 dark:text-teal-300">
                    💡 You&apos;ll receive a payment request on your UPI app
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Pay ₹{price.toLocaleString()} via UPI
                  </button>
                </form>
              )}

              {/* Secure badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Secured by 256-bit SSL encryption
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
