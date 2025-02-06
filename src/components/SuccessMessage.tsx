import React from 'react';

export function SuccessMessage() {
  return (
    <div className="text-center p-8 bg-green-50 rounded-lg">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you for voting!</h2>
      <p className="text-gray-600">Your votes have been recorded.</p>
    </div>
  );
}