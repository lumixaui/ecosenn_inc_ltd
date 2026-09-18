import type { Metadata } from "next";
import React from 'react';
import { Award, Shield, Lightbulb, Handshake, Target, Eye, Zap, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Mission & Vision - Ecosen Inc LTD",
  description: "Discover Ecosen Inc LTD's mission to deliver exceptional construction solutions and our vision for sustainable infrastructure development across East Africa.",
};

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Page Header */}
      <section className="relative py-20 h-96 flex items-center bg-linear-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-orange-900">
          <div className="absolute inset-0 opacity-20 bg-[url('@/assets/images/image1.png')] bg-cover"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
        <div className="relative mt-14 z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Mission & Vision
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Guiding our path toward sustainable infrastructure and regional excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white p-12 rounded-2xl border-2 border-orange-200 hover:border-orange-500 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-10 h-10 text-orange-600" />
                  <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  To deliver exceptional civil and electrical construction solutions that drive infrastructure development and economic growth across East Africa, while maintaining the highest standards of quality, safety, and environmental responsibility.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white p-12 rounded-2xl border-2 border-orange-200 hover:border-orange-500 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="w-10 h-10 text-orange-600" />
                  <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  To be the leading construction partner in East Africa, recognized for innovation, reliability, and sustainability. We envision infrastructure that connects communities, powers economies, and transforms lives across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-orange-600">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all">
                <Award className="w-8 h-8 text-orange-600 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Unwavering commitment to excellence in every project, delivering results that exceed expectations and stand the test of time.
              </p>
            </div>

            {/* Safety */}
            <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-orange-600">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all">
                <Shield className="w-8 h-8 text-orange-600 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Safety</h3>
              <p className="text-slate-600 leading-relaxed">
                Rigorous safety standards and protocols to protect our teams, clients, and communities. Zero tolerance for compromises.
              </p>
            </div>

            {/* Innovation */}
            <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-orange-600">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all">
                <Lightbulb className="w-8 h-8 text-orange-600 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                Embracing modern technologies and methodologies to solve challenges efficiently and stay ahead of industry standards.
              </p>
            </div>

            {/* Integrity */}
            <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-orange-600">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all">
                <Handshake className="w-8 h-8 text-orange-600 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Integrity</h3>
              <p className="text-slate-600 leading-relaxed">
                Honest, transparent, and ethical conduct in all interactions. Building lasting relationships based on trust and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Values in Action</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Excellence Delivered",
                description: "Every project is executed with meticulous attention to detail, innovative solutions, and unwavering commitment to surpassing client expectations."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Safe Operations",
                description: "We maintain industry-leading safety standards across all operations, with comprehensive training and continuous monitoring of work sites."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community First",
                description: "Our projects create employment, develop local skills, and deliver infrastructure that improves community welfare and regional prosperity."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-orange-50 p-8 rounded-xl border border-orange-200"
              >
                <div className="text-orange-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Building the Future</h2>
          <p className="text-xl text-orange-100 mb-8">
            Partner with a company that shares your vision for sustainable, quality infrastructure
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
