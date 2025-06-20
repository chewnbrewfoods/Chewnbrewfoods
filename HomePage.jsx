import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 px-4 text-center">
        <img
          src="/logo.png"
          alt="Chew N Brew Logo"
          className="mx-auto mb-6 max-h-28"
        />
        <h1 className="text-4xl font-bold mb-2">Chew N Brew</h1>
        <p className="text-xl italic mb-6">Eat on the Go</p>
        <Button className="bg-yellow-400 text-black text-lg px-6 py-2 rounded-full">
          Order Now
        </Button>
      </section>

      {/* Our Journey */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          We began as a food truck in 2016, serving mouth-watering meals across
          Srinagar. Despite facing the 2016 unrest, Article 370 revocation, and
          the COVID pandemic, we never stopped. Chew N Brew fought through every
          challenge, evolving into a full-scale cloud kitchen offering city-wide
          delivery — absolutely free. Now, as a registered Pvt Ltd company,
          we’re proud to present an online platform that brings all our flavors
          under one roof.
        </p>
      </section>

      {/* Our Brands */}
      <section className="bg-gray-100 py-12 px-6 md:px-24">
        <h2 className="text-2xl font-bold mb-6">Our Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">🥟 Momo 0</h3>
            <p>Momos</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">🌯 Roll Me</h3>
            <p>Kathi Rolls</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">🍟 Fluffy Fries</h3>
            <p>French Fries</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">🍜 China Ka Tadka</h3>
            <p>Chinese Food</p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Chew N Brew?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside">
          <li>Free Home Delivery Across Srinagar</li>
          <li>Our Own Delivery Fleet</li>
          <li>Best Taste at Affordable Prices</li>
          <li>Multiple Cuisines Under One Platform</li>
          <li>Trusted by Thousands Since 2016</li>
        </ul>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="mb-2">📍 Srinagar, Jammu & Kashmir</p>
        <p className="mb-2">📞 Contact: +91-9018112255</p>
        <p className="text-sm">&copy; 2025 Chew N Brew Foods Pvt Ltd</p>
      </footer>
    </div>
  );
}