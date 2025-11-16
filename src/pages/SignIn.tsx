import React, { useState } from 'react';

const SignIn = () => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    if (activeTab === 'signin') {
      console.log('Signing in with:', email, password);
    } else {
      console.log('Signing up with:', email, password, confirmPassword);
    }
  };

  const handleSendOtp = () => {
    console.log('Sending OTP to:', email);
    setShowOtpVerification(true);
  };

  const handleResetPassword = () => {
    console.log('Resetting password with OTP:', otp);
    setShowForgotPassword(false);
    setShowOtpVerification(false);
    setActiveTab('signin');
  };

  const handleBackToSignIn = () => {
    setShowForgotPassword(false);
    setShowOtpVerification(false);
    setEmail('');
    setOtp('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 text-white px-6 py-3 rounded">
            <div className="text-2xl font-bold">IELTS</div>
            <div className="text-xs">REVISION</div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">IELTS REVISION</h1>
        <p className="text-gray-600 text-center mb-6">
          {showForgotPassword 
            ? 'Reset your password' 
            : 'Sign in to access practice exam questions'}
        </p>

        {/* Toggle Buttons - Only show when not in forgot password mode */}
        {!showForgotPassword && (
          <div className="flex mb-6 bg-gray-200 rounded">
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 rounded transition-colors font-medium ${
                activeTab === 'signup' ? 'bg-white shadow text-gray-900' : 'bg-transparent text-gray-600'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setActiveTab('signin')}
              className={`flex-1 py-2 rounded transition-colors font-medium ${
                activeTab === 'signin' ? 'bg-white shadow text-gray-900' : 'bg-transparent text-gray-600'
              }`}
            >
              Sign In
            </button>
          </div>
        )}

        {/* Forgot Password Flow */}
        {showForgotPassword ? (
          <div>
            {!showOtpVerification ? (
              // Step 1: Enter Email
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={handleSendOtp}
                  className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors mb-4"
                >
                  Send OTP
                </button>

                <div className="text-center">
                  <button 
                    onClick={handleBackToSignIn}
                    className="text-blue-600 hover:underline"
                  >
                    Back to Sign In
                  </button>
                </div>
              </div>
            ) : (
              // Step 2: Enter OTP and New Password
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    OTP Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={handleResetPassword}
                  className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors mb-4"
                >
                  Reset Password
                </button>

                <div className="text-center">
                  <button 
                    onClick={handleBackToSignIn}
                    className="text-blue-600 hover:underline"
                  >
                    Back to Sign In
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Regular Sign In/Sign Up Form
          <div>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password (only for Sign Up) */}
            {activeTab === 'signup' && (
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors mb-4"
            >
              {activeTab === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>

            {/* Forgot Password (only for Sign In) */}
            {activeTab === 'signin' && (
              <div className="text-center mb-4">
                <button 
                  onClick={() => setShowForgotPassword(true)}
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center">
              <a href="/" className="text-blue-600 hover:underline">
                Back to Home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;