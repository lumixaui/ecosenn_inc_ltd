"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      setSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Page Header */}
      <section className="relative h-96 flex items-center py-20 bg-linear-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-orange-900">
          <div className="absolute inset-0 opacity-20 bg-[url('@/assets/images/image1.png')] bg-cover"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
        <div className="relative mt-14 z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Get in touch with our team and let&apos;s discuss your project
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Office Location
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">Kigali, Rwanda</p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Phone Numbers
                </h3>
              </div>
              <div className="space-y-2 text-slate-600">
                <p>
                  <strong>Rwanda:</strong> +250 788 759 252
                </p>
                <p>
                  <strong>Uganda:</strong> +256 788 023 270
                </p>
                <p>
                  <strong>Tanzania:</strong> +255 625 550 040
                </p>
                <p>
                  <strong>Central African Republic:</strong> +236 72 26 11 41
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Email</h3>
              </div>
              <div className="space-y-1">
                <a
                  href="mailto:ecosenincltd@gmail.com"
                  className="block text-orange-600 hover:text-orange-700 font-semibold break-all"
                >
                  ecosenincltd@gmail.com
                </a>
                <a
                  href="mailto:info@ecosenincltd.com"
                  className="block text-orange-600 hover:text-orange-700 font-semibold break-all"
                >
                  info@ecosenincltd.com
                </a>
              </div>
              <p className="text-slate-600 text-sm mt-2">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Send us a Message
            </h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and our team will get back to you shortly
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200">
            {submitted && (
              <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-900">
                    Message Sent!
                  </h3>
                  <p className="text-orange-700">
                    Thank you for contacting us. We&apos;ll respond shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Placeholder */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Find Us</h2>
          </div>

          <div className="bg-slate-200 rounded-xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-xl text-slate-600 font-semibold">Map Coming Soon</p>
              <p className="text-slate-500 mt-2">Headquarters in Kigali, Rwanda</p>
              <p className="text-slate-500">With operations across Rwanda, Uganda, and Tanzania</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prefer to call us directly?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Our team is available during business hours across all regional
            offices
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+250788123456"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all transform hover:scale-105"
            >
              Call Rwanda
            </a>
            <a
              href="tel:+256701234567"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all transform hover:scale-105"
            >
              Call Uganda
            </a>
            <a
              href="tel:+255654321098"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all transform hover:scale-105"
            >
              Call Tanzania
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
