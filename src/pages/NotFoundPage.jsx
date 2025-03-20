import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-9xl font-bold text-indigo-600 animate-bounce">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-lg text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-indigo-700 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
