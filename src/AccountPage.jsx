// src/components/AccountPage.js

import React, { useState } from 'react';

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-[100%] mx-auto my-8 bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {/* Your Login or Sign Up form components go here */}
        <form className=" flex w-full flex-col  gap-5 items-center justify-center">
          {/* Form fields */}
          <input type="text" placeholder='Email' className='ring-2 ring-blue-500 ring-offset-2 rounded-md outline-none focus:ring-purple-700' />
          <input type="password" placeholder='Password' className='ring-2 ring-blue-500 ring-offset-2 rounded-md outline-none focus:ring-purple-700' />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="ml-2 text-blue-500"
            onClick={toggleForm}
          >
            {isLogin ? 'Sign up here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
