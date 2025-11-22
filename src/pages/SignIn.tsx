import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";


const SignIn = () => {
  const [activeTab, setActiveTab] = useState("signin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // const handleSubmit = () => {
  //   console.log("Signing in with:", email, password);
  // };
  
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = () => {
    login();               // Fake login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">

        <div className="flex justify-center mb-4">
          <img src={assets.navbarlogo} alt="" />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">IELTS REVISION</h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in to access practice exam questions
        </p>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-200 rounded">
          <Link
            to="/signup"
            className="flex-1 text-center py-2 rounded transition-colors font-medium bg-transparent text-gray-600"
          >
            Sign Up
          </Link>

          <button
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-2 rounded transition-colors font-medium ${
              activeTab === "signin"
                ? "bg-white shadow text-gray-900"
                : "bg-transparent text-gray-600"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700"
        >
          Sign In
        </button>

        <div className="text-center mt-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
