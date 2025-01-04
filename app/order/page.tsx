/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Header } from '@/components/HeaderNew';
import React, { useState } from 'react';

export default function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    product: '',
    brand: '',
    size: '',
    quantity: '',
    name: '',
    location: '',
    contact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  try {
    const response = await fetch('https://stockbarn-server.onrender.com/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form. Please try again.');
    }

    const data = await response.json();
    if (data.success) {
      setSuccess(true);
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err: any) {
    setError(err.message || 'An unexpected error occurred');
  } finally {
    setLoading(false);
  }
};


  const closeSuccessModal = () => {
    setSuccess(false);
    setFormData({
      product: '',
      brand: '',
      size: '',
      quantity: '',
      name: '',
      location: '',
      contact: '',
    }); // Reset form
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br mt-[20px] from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Product Details</h2>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter your location"
                required
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter your contact number"
                required
              />
            </div>

            {/* Product */}
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                Product
              </label>
              <input
                type="text"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Brand */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter brand name"
                required
              />
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter size"
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                placeholder="Enter quantity"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 ${
                loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium rounded-lg shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Success Modal */}
        {success && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-10">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Success!</h3>
              <p className="text-gray-600">Your product has been submitted successfully.</p>
              <button
                onClick={closeSuccessModal}
                className="mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
