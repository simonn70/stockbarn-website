/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Header } from '@/components/HeaderNew';
import React, { useState } from 'react';

export default function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    location: '',
    contact: '',
  });
  const [productDetails, setProductDetails] = useState({
    product: '',
    brand: '',
    size: '',
    quantity: '',
  });
  const [productList, setProductList] = useState<any[]>([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const addProduct = () => {
    if (!productDetails.product || !productDetails.quantity) {
      setError('Please fill in all product fields.');
      return;
    }

    setProductList((prev) => [...prev, { ...productDetails }]);
    setProductDetails({ product: '', brand: '', size: '', quantity: '' });
    setError('');
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
        body: JSON.stringify({ userDetails, productList }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again.');
      }

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setProductList([]); // Clear product list after successful submission
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
    setUserDetails({ name: '', location: '', contact: '' }); // Reset user details
    setProductList([]); // Clear product list
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br mt-[20px] from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Place an Order</h2>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleUserChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={userDetails.location}
                  onChange={handleUserChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter your Restaurant name"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={userDetails.contact}
                  onChange={handleUserChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter your contact number"
                  
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                  Product
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={productDetails.product}
                  onChange={handleProductChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter product name"
                  
                />
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={productDetails.brand}
                  onChange={handleProductChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter brand name"
                />
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                  Size
                </label>
                <input
                  type="text"
                  id="size"
                  name="size"
                  value={productDetails.size}
                  onChange={handleProductChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter size"
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={productDetails.quantity}
                  onChange={handleProductChange}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
                  placeholder="Enter quantity"
                  
                />
              </div>
            </div>

            <button
              type="button"
              onClick={addProduct}
              className="w-full py-2 bg-blue-300 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Add Product
            </button>

            {/* Product List Table */}
            {productList.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Product List</h3>
                <table className="min-w-full bg-white border rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm">
                      <th className="py-2 px-4 border">Product</th>
                      <th className="py-2 px-4 border">Brand</th>
                      <th className="py-2 px-4 border">Size</th>
                      <th className="py-2 px-4 border">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product, index) => (
                      <tr key={index} className="text-gray-700 text-sm">
                        <td className="py-2 px-4 border">{product.product}</td>
                        <td className="py-2 px-4 border">{product.brand}</td>
                        <td className="py-2 px-4 border">{product.size}</td>
                        <td className="py-2 px-4 border">{product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 ${
                loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium rounded-lg shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            >
              {loading ? 'Submitting...' : 'Submit All'}
            </button>
          </form>
        </div>

        {/* Success Modal */}
        {success && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-10">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Success!</h3>
              <p className="text-gray-600">Your products have been submitted successfully.An invoice will be sent to you shortly .Thank You !</p>
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
