import type { Metadata } from "next";
import React from "react";
import {
  Building2,
  Zap,
  Route,
  Radio,
  Mountain,
  Lightbulb,
  Shield,
  Award,
  Users,
  Leaf,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Home - Ecosen Inc LTD",
  description:
    "Welcome to Ecosen Inc LTD. Civil & Electrical Construction Experts building resilient infrastructure across East Africa.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
          <div className="absolute inset-0 opacity-20 bg-[url('@/assets/images/image1.png')] bg-cover"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ECOSEN INC LTD
            </h1>
            <p className="text-2xl md:text-3xl text-orange-400 font-semibold mb-4">
              Civil & Electrical Construction Experts
            </p>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-12">
              Building resilient infrastructure through quality, safety, and
              innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-white/30"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Welcome to{" "}
                <span className="text-orange-600">ECOSEN INC LTD</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                ECOSEN stands at the forefront of the civil construction
                industry, renowned for delivering robust infrastructure
                projects. As a leader in electrical construction, we expertly
                balance innovation with sustainability, driving progress in
                urban and rural landscapes alike.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Our commitment to excellence is evident in every project we
                undertake. We strive to not only meet but exceed the
                expectations of our clients, backed by a team of skilled
                professionals who work tirelessly to ensure the highest
                standards of quality and safety.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a strong focus on environmental responsibility, ECOSEN
                incorporates sustainable practices into every aspect of our
                construction projects, creating long-lasting infrastructure that
                benefits communities for years to come.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-90 bg-[url('@/assets/images/image2.png')] bg-cover"></div>
                <Building2 className="w-32 h-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive construction solutions for modern infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Route className="w-12 h-12" />,
                title: "Road Construction",
                description:
                  "From highways to urban streets, we deliver high-quality road construction projects efficiently and on schedule.",
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Building Construction",
                description:
                  "Specializing in residential, commercial, and industrial buildings to the highest standards of craftsmanship.",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Transmission Lines",
                description:
                  "Construction of transmission lines ensuring reliable energy distribution across diverse terrains.",
              },
              {
                icon: <Radio className="w-12 h-12" />,
                title: "Tower Foundations",
                description:
                  "Precision engineering for sturdy foundations of telecom and electrical towers, ensuring stability and longevity.",
              },
              {
                icon: <Mountain className="w-12 h-12" />,
                title: "Substation Civil Work",
                description:
                  "Comprehensive construction services for substations, including foundations, buildings, and civil infrastructure.",
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Rural Electrification",
                description:
                  "Bringing electricity to remote areas, improving lives by providing access to reliable power.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ECOSEN Section */}
      <section
        id="why-us"
        className="py-20 bg-gradient-to-br from-slate-800 to-orange-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose ECOSEN?</h2>
            <p className="text-xl text-slate-200">
              Built on resilience, adaptability, and determination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "Quality & Excellence",
                description:
                  "Delivering exceptional results that exceed industry standards and customer expectations.",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Safety First",
                description:
                  "Rigorous adherence to safety standards, creating secure and accident-free environments.",
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: "Innovation & Technology",
                description:
                  "Leveraging cutting-edge solutions and methodologies to stay at the forefront of construction.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Experienced Team",
                description:
                  "11+ years of combined professional experience delivering projects across multiple countries.",
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "Sustainability",
                description:
                  "Eco-friendly practices and energy-efficient solutions minimizing environmental impact.",
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Integrity",
                description:
                  "Honesty, transparency, and ethical practices in all interactions and operations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="text-orange-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-slate-600">
              Proven experience across East Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-slate-50 rounded-xl">
              <div className="text-5xl font-bold text-orange-600 mb-2">12+</div>
              <div className="text-xl text-slate-800 font-semibold">
                Years of Experience
              </div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-slate-50 rounded-xl">
              <div className="text-5xl font-bold text-orange-600 mb-2">17+</div>
              <div className="text-xl text-slate-800 font-semibold">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-slate-50 rounded-xl">
              <div className="text-5xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-xl text-slate-800 font-semibold">
                Countries Served
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-4">
              Successfully delivered high voltage transmission and distribution
              projects across Rwanda, Uganda, Tanzania, Angola, and Central
              African Repbulic
            </p>
            <p className="text-slate-500">
              Including 220kV and 400kV transmission line projects with major
              international contractors
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-90 bg-[url('@/assets/images/image3.png')] bg-cover"></div>
                <Leaf className="w-32 h-32 text-white/30" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Sustainability &{" "}
                <span className="text-orange-600">Community</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                ECOSEN incorporates sustainable practices into every aspect of
                our construction projects. From utilizing eco-friendly materials
                to implementing energy-efficient solutions, we are dedicated to
                minimizing our environmental impact while creating long-lasting
                infrastructure.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We actively collaborate with local stakeholders, prioritize
                safety measures, and support initiatives that contribute to the
                well-being of the communities in which we operate.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our dedication to excellence, sustainability, and community
                engagement sets us apart as a leader in the civil construction
                industry, paving the way for a brighter, more resilient future
                for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to work with a trusted construction partner?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let build a sustainable future together. Contact us to discuss your
            next project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
