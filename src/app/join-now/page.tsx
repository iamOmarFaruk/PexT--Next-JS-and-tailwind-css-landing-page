"use client";

import { useState } from "react";
import LoginModal from "@/app/components/modals/LoginModal";

const JoinNowPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-20 bg-gray-50">
      <section className="text-center bg-gradient-to-r from-purple-500 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join for Free</h1>
          <p className="text-base md:text-lg text-gray-200">
            Start your journey with us by joining today! Explore our amazing
            features and opportunities designed just for you.
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center py-20 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Create an account
          </h2>
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Your full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="email@email.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors text-sm font-medium"
            >
              Create an account
            </button>
          </form>

          {/* Sign-in Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-purple-500 font-medium hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </section>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoginModal closeModal={() => setIsModalOpen(false)} />
        </div>
      )}
    </section>
  );
};

export default JoinNowPage;
