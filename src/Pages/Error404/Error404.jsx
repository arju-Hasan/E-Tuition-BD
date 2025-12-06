import React from 'react';
import error from "../../assets/error404.png"

const Error404 = () => {
    return (
        <div>
     <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center">
        <img src={error} alt="" />
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          The page you are looking for does not exist or may have been moved.
        </p>
        <a
          href="/"
          className="btn btn-primary hover:btn-secondary px-6 text-white rounded-full"
        >
          Go Back Home
        </a>
      </div>
    </div>

        </div>
    );
};

export default Error404;  