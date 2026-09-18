import type { Metadata } from "next";
import React from "react";
import { Building2, Award, Leaf, Globe, TrendingUp, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiversePortfolio from "./components/DiversePortfolio";
import ExperienceExpertise from "./components/ExperienceExpertise";

export const metadata: Metadata = {
  title: "About Us - Ecosen Inc LTD",
  description:
    "Learn about Ecosen Inc LTD's story, expertise in civil and electrical construction, and our commitment to sustainable infrastructure across East Africa.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Page Header */}
      <section className="relative flex items-center h-96 py-20 bg-linear-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-orange-900">
          <div className="absolute inset-0 opacity-20 bg-[url('@/assets/images/image1.png')] bg-cover"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
        <div className="relative z-10 max-w-7xl pt-10 mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About ECOSEN INC LTD
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Building trust through excellence, expertise, and sustainability
            across East Africa
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                ECOSEN INC LTD was originally established in 2014 under the name ENERGY CONTRACTORS. In 2020, the company evolved into ECOSEN INC LTD, reflecting its expanded capabilities and broader ambition in engineering, energy and infrastructure development.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Today, ECOSEN provides integrated services in civil engineering, electrical construction, renewable energy, engineering surveys, water infrastructure and telecommunications. Its expertise covers the full project cycle, from studies and design to construction, installation, commissioning and maintenance.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With project experience across Rwanda, Uganda, Tanzania, Angola and the Central African Republic, ECOSEN continues to strengthen its regional presence by delivering reliable, safe and sustainable infrastructure solutions while promoting local capacity building and long-term partnerships.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                <Building2 className="w-40 h-40 text-white/20" />
                <div className="absolute inset-0 opacity-90 bg-[url('@/assets/images/image4.png')] bg-cover"></div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-slate-800 mb-2">12+</h3>
              <p className="text-lg text-slate-600">
                Years Combined Experience
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                5+ Countries
              </h3>
              <p className="text-lg text-slate-600">Rwanda, Uganda, Tanzania, Angola, Central African Republic</p>
            </div>
            <DiversePortfolio />
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Experience & Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With 12+ years of combined professional experience, our team
              brings deep expertise across multiple sectors and markets
            </p>
          </div>

          <ExperienceExpertise />
        </div>
      </section>

      {/* Leadership / Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Leadership & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guided by committed leadership dedicated to excellence and
              sustainable growth
            </p>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-slate-50 p-12 rounded-2xl border border-orange-200">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Our Leadership Message
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At ECOSEN INC LTD, we believe that great construction is more
                than just buildings and infrastructure—it&apos;s about building
                futures. Our leadership team brings decades of combined
                experience in the construction industry, with a shared
                commitment to delivering projects that make a meaningful impact.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We are driven by a vision of creating resilient, sustainable
                infrastructure that serves as a catalyst for economic growth and
                community development across East Africa. Every project we
                undertake is guided by our core values of quality, safety,
                integrity, and environmental responsibility.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                  Our success is built on the dedication of our teams and the
                  trust of our clients. We remain committed to continuous
                  improvement, innovation, and maintaining the highest standards
                  of professional excellence in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are dedicated to the principles that guide every aspect of our
              business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Quality",
                description:
                  "Delivering construction excellence through meticulous attention to detail, rigorous quality control, and adherence to the highest industry standards in every project we undertake.",
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Sustainability",
                description:
                  "Implementing eco-friendly practices and energy-efficient solutions that minimize environmental impact while contributing to long-term economic and ecological sustainability.",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Community Engagement",
                description:
                  "Building strong relationships with local communities through employment opportunities, skill development, and infrastructure that improves quality of life and drives regional progress.",
              },
            ].map((commitment, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-600"
              >
                <div className="text-orange-600 mb-4">{commitment.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {commitment.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-linear-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let&apos;s discuss how ECOSEN can bring your infrastructure project
            to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
