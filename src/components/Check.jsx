import React, { useState } from "react";
import { useNavigate } from "react-router";

const Check = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingSameAsShipping: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Checkout</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Shipping Address */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input-field"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              className="input-field"
              value={formData.addressLine1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              className="input-field"
              value={formData.addressLine2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="input-field"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="input-field"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              className="input-field"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            className="input-field mb-4"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              className="input-field"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className="input-field"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="billingSameAsShipping"
              name="billingSameAsShipping"
              className="mr-2"
              checked={formData.billingSameAsShipping}
              onChange={handleChange}
            />
            <label htmlFor="billingSameAsShipping">
              Billing same as shipping
            </label>
          </div>
        </div>

        {/*    <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
     
        </div> */}

        {/* Place Order Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Check;
