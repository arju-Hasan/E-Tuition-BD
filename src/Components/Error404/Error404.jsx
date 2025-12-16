import React from 'react';
import error from "../../assets/error404.png"
import { useNavigate } from 'react-router';

const Error404 = () => {
  const navigate = useNavigate();
    return (
        <div>
     <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="text-center">
        <img src={error} alt="" />
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          The page you are looking for does not exist or may have been moved.
        </p>
       <div>
         <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary hover:btn-primary  px-6 text-white rounded-full mr-4"
        >
          Go Back
        </button>
        <a
          href="/"
          className="btn btn-primary hover:btn-secondary px-6 text-white rounded-full"
        >
          Go Home
        </a>
       </div>
      </div>
    </div>

        </div>
    );
};

export default Error404;  