"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Plus, Search, Filter } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "chlorine-granules",
    name: "Spa Chlorine Granules",
    price: 24.99,
    category: "Water Care",
    image: "/products/chlorine.jpg",
    description:
      "Dichlor granules for spa sanitization. Fast-dissolving formula keeps water crystal clear.",
  },
  {
    id: "bromine-tablets",
    name: "Bromine Tablets",
    price: 34.99,
    category: "Water Care",
    image: "/products/bromine.jpg",
    description:
      "Long-lasting bromine tablets for consistent spa sanitation. Low odor alternative to chlorine.",
  },
  {
    id: "ph-increaser",
    name: "pH Increaser",
    price: 12.99,
    category: "Water Care",
    image: "/products/ph-up.jpg",
    description:
      "Sodium carbonate formula to raise pH levels. Essential for balanced water chemistry.",
  },
  {
    id: "ph-decreaser",
    name: "pH Decreaser",
    price: 12.99,
    category: "Water Care",
    image: "/products/ph-down.jpg",
    description:
      "Sodium bisulfate to lower pH and total alkalinity. Safe and easy to use.",
  },
  {
    id: "alkalinity-increaser",
    name: "Alkalinity Increaser",
    price: 14.99,
    category: "Water Care",
    image: "/products/alkalinity.jpg",
    description:
      "Sodium bicarbonate to raise total alkalinity. Prevents pH bounce.",
  },
  {
    id: "calcium-hardness",
    name: "Calcium Hardness Increaser",
    price: 16.99,
    category: "Water Care",
    image: "/products/calcium.jpg",
    description:
      "Prevents corrosion and foaming by maintaining proper calcium levels.",
  },
  {
    id: "spa-shock",
    name: "Spa Shock Oxidizer",
    price: 19.99,
    category: "Shock & Oxidizers",
    image: "/products/shock.jpg",
    description:
      "Non-chlorine shock treatment. Oxidizes contaminants and restores water clarity.",
  },
  {
    id: "chlorine-free-shock",
    name: "Chlorine-Free Shock",
    price: 22.99,
    category: "Shock & Oxidizers",
    image: "/products/cl-free-shock.jpg",
    description:
      "MPS-based oxidizer. Use 15 minutes before entering spa. No harsh chemical odor.",
  },
  {
    id: "test-strips",
    name: "Spa Test Strips (50ct)",
    price: 9.99,
    category: "Accessories",
    image: "/products/test-strips.jpg",
    description:
      "5-way test strips for pH, chlorine, bromine, alkalinity, and hardness. Quick and accurate.",
  },
  {
    id: "filter-cleaner",
    name: "Filter Cleaner Spray",
    price: 15.99,
    category: "Accessories",
    image: "/products/filter-cleaner.jpg",
    description:
      "Spray-on filter cleaner that removes oils, lotions, and debris. Extends filter life.",
  },
  {
    id: "spa-fragrance",
    name: "Aromatherapy Crystals",
    price: 18.99,
    category: "Accessories",
    image: "/products/fragrance.jpg",
    description:
      "Dissolving spa crystals with essential oils. Available in Eucalyptus, Lavender, and Mint.",
  },
  {
    id: "cover-cleaner",
    name: "Spa Cover Cleaner & Protectant",
    price: 21.99,
    category: "Accessories",
    image: "/products/cover-cleaner.jpg",
    description:
      "UV protectant and cleaner for vinyl spa covers. Prevents cracking and fading.",
  },
];

const categories = ["All", "Water Care", "Shock & Oxidizers", "Accessories"];

export default function ShopPage() {
  const { items, addToCart, totalItems, totalPrice } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-dark py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spa Chemicals & Accessories
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Professional-grade products delivered to your door. Keep your spa
            water pristine.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition text-gray-700"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Filter className="w-5 h-5 text-muted" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Placeholder Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-5xl font-bold text-primary/30">
                  {product.name.charAt(0)}
                </span>
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-primary text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-secondary font-bold text-xl mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {product.description}
                </p>
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-dark text-white font-medium py-2.5 rounded-lg transition"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-500 mb-1">
              No products found
            </h3>
            <p className="text-muted">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Floating Cart Summary Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-sm border-t border-white/10 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
              <span className="text-white/60">|</span>
              <span className="font-bold text-secondary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Link
              href="/cart"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-2.5 rounded-lg transition flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              View Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
