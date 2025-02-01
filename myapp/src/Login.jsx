import React, { useState } from "react";

const Login = () => {
  const [projectType, setProjectType] = useState("one");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome Back! 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Login to continue your hackathon journey!
        </p>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Number of Projects Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Number of Projects
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className={`flex-1 py-2 rounded-lg text-lg font-semibold transition duration-300 ${
                  projectType === "one"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setProjectType("one")}
              >
                One
              </button>
              <button
                type="button"
                className={`flex-1 py-2 rounded-lg text-lg font-semibold transition duration-300 ${
                  projectType === "multiple"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setProjectType("multiple")}
              >
                Multiple
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition duration-300 shadow-lg"
          >
            Login 🚀
          </button>
        </form>

        {/* Decorative Elements */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?
            <a
              href="/signup"
              className="text-indigo-500 font-semibold ml-1 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
