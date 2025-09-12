import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Shield, Lock, CheckCircle } from "lucide-react";

function Payment() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    email: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "US",
    },
  });

  const [selectedPackage] = useState({
    name: "Growth Package",
    price: 1997,
    description: "Most popular choice for growing businesses",
    features: [
      "Advanced SEO (15 keywords)",
      "PPC campaign management",
      "Social media management (4 platforms)",
      "Content creation (8 posts/month)",
      "Email marketing campaigns",
      "Bi-weekly strategy calls",
      "Phone & email support",
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("billing.")) {
      const field = name.split(".")[1];
      setPaymentData({
        ...paymentData,
        billingAddress: {
          ...paymentData.billingAddress,
          [field]: value,
        },
      });
    } else {
      setPaymentData({
        ...paymentData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Payment submitted:", paymentData);
    alert(
      "Payment processed successfully! You'll receive a confirmation email shortly."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Clean, minimal with deep blue background */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-teal-400 mr-3" />
              <h1 className="text-3xl font-bold">Secure Payment</h1>
            </div>
            <p className="text-blue-100">
              Complete your purchase with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Main Payment Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Package Details */}
                <div className="border border-teal-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-lg mr-3">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {selectedPackage.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedPackage.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ${selectedPackage.price}
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>

                {/* Features Included */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">
                      ${selectedPackage.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup Fee</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">$0</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-teal-600">
                      ${selectedPackage.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <CreditCard className="w-6 h-6 text-teal-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Payment Information
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={paymentData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="john@company.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Receipt will be sent to this email
                    </p>
                  </div>

                  {/* Card Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Card Details
                    </h3>

                    {/* Cardholder Name */}
                    <div>
                      <label
                        htmlFor="cardholderName"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        required
                        value={paymentData.cardholderName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Card Number */}
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        required
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Expiry Date */}
                      <div>
                        <label
                          htmlFor="expiryDate"
                          className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          required
                          value={paymentData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>

                      {/* CVV */}
                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          required
                          value={paymentData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="123"
                          maxLength="4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Billing Address
                    </h3>

                    <div>
                      <label
                        htmlFor="billing.street"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="billing.street"
                        name="billing.street"
                        required
                        value={paymentData.billingAddress.street}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="billing.city"
                          className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="billing.city"
                          name="billing.city"
                          required
                          value={paymentData.billingAddress.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="New York"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="billing.state"
                          className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="billing.state"
                          name="billing.state"
                          required
                          value={paymentData.billingAddress.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="NY"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="billing.zipCode"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="billing.zipCode"
                        name="billing.zipCode"
                        required
                        value={paymentData.billingAddress.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="10001"
                      />
                    </div>
                  </div>

                  {/* Payment Button with teal gradient */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Complete Payment - ${selectedPackage.price}
                  </button>

                  {/* Security Notice */}
                  <p className="text-sm text-gray-500 text-center">
                    <Lock className="w-4 h-4 inline mr-1" />
                    Your payment information is encrypted and secure
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Payment provider logos and security badges */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Secure Payment Processing
            </h3>

            {/* Payment Provider Logos */}
            <div className="flex items-center justify-center space-x-8 mb-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">VISA</div>
              <div className="text-2xl font-bold text-gray-400">MasterCard</div>
              <div className="text-2xl font-bold text-gray-400">PayPal</div>
              <div className="text-2xl font-bold text-gray-400">Apple Pay</div>
            </div>

            {/* Security Badges */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-teal-600 mr-1" />
                <span>SSL Secure</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 text-teal-600 mr-1" />
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-teal-600 mr-1" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Contact */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Need help with your payment?
          </p>
          <div className="flex items-center justify-center space-x-6">
            <Link
              to="/contact"
              className="text-teal-600 hover:text-teal-700 font-medium text-sm">
              Live Chat Support
            </Link>
            <span className="text-gray-400">|</span>
            <a
              href="tel:+15551234567"
              className="text-teal-600 hover:text-teal-700 font-medium text-sm">
              Call: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
