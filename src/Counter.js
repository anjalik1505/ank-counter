import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">React Counter App</h1>
      <div className="mb-8">
        <h2 className="text-2xl text-gray-700">Count: {count}</h2>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
