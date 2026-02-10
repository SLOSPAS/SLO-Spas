"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  CreditCard,
} from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const subtotal = totalPrice;
  const shipping = subtotal > 50 ? 0 : 7.99;
  const taxRate = 0.085;
  const estimatedTax = subtotal * taxRate;
  const total = subtotal + shipping + estimatedTax;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-light">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">
            Shopping Cart
          </h1>
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow-sm">
            <ShoppingBag className="w-20 h-20 text-gray-300 mb-6" />
            <p className="text-xl text-gray-500 mb-8">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {items.map((item, index) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
                    {/* Product Image Placeholder */}
                    <div className="w-24 h-24 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-primary/40" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-primary truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="w-10 text-center font-semibold text-primary">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Line Total */}
                    <div className="text-right min-w-[80px]">
                      <p className="text-lg font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Divider between items */}
                  {index < items.length - 1 && (
                    <hr className="border-gray-100 mx-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold text-primary mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax (8.5%)</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>

                <hr className="border-gray-200 my-4" />

                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  alert(
                    "Checkout coming soon! This will connect to Square."
                  )
                }
                className="w-full mt-6 bg-secondary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="w-full mt-3 inline-flex items-center justify-center gap-2 text-secondary font-medium py-2 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>

              <p className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
                <CreditCard className="w-3.5 h-3.5" />
                Secure checkout powered by Square
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Help Section */}
        <div className="mt-12 text-center text-gray-500">
          <p>
            Need help? Call us at{" "}
            <a
              href="tel:8055443565"
              className="text-secondary font-medium hover:underline"
            >
              (805) 544-3565
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
