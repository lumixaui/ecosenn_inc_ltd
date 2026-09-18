"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Compass,
  Droplets,
  GraduationCap,
  HardHat,
  Minus,
  Network,
  Plus,
  Settings,
  ShoppingCart,
  X,
  Zap,
} from "lucide-react";

const portfolioAreas = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Electrical infrastructure",
    content:
      "Construction and rehabilitation of LV, MV, HV and EHV networks; transmission and distribution lines; rural and urban electrification; substations and electrical equipment installation.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Renewable energy & power systems",
    content:
      "Solar PV plants, hybrid systems, battery energy storage, inverters, generators, power backup solutions, energy integration and O&M.",
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Civil engineering & public works",
    content:
      "Buildings, roads, access infrastructure, reinforced concrete works, tower foundations, industrial infrastructure and rehabilitation works.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Engineering survey & design",
    content:
      "Topographic surveys, route surveys, pegging, technical studies, design, dimensioning, supervision, project management and engineering support.",
  },
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Water & electromechanical systems",
    content:
      "Boreholes, water supply systems, solar pumping, hydraulic networks, sanitation and electromechanical equipment.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Telecommunications infrastructure",
    content:
      "Telecom towers and masts, civil works for telecom sites, fibre-optic infrastructure and power systems for telecom installations.",
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Trading & supplies",
    content:
      "Import-export, procurement and distribution of electrical, solar, construction, telecom, hydraulic and electromechanical equipment.",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Maintenance & technical support",
    content:
      "Preventive and corrective maintenance of electrical, solar, electromechanical, telecom and infrastructure assets.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Consulting & training",
    content:
      "Technical advisory, expertise, assistance, supervision, training and skills transfer.",
  },
];

export default function DiversePortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleItem = (index: number) => {
    setExpandedItems((currentItems) =>
      currentItems.includes(index)
        ? currentItems.filter((itemIndex) => itemIndex !== index)
        : [...currentItems, index],
    );
  };

  return (
    <>
      <div className="text-center">
        <Building2 className="mx-auto mb-4 h-12 w-12 text-orange-600" />
        <h3 className="mb-2 text-2xl font-bold text-slate-800">
          Diverse Portfolio
        </h3>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-5 inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
        >
          View more
        </button>
      </div>

      {isOpen && (
        <div
          className="about-modal fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-6"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="about-modal-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="diverse-portfolio-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close diverse portfolio"
              className="absolute right-5 top-5 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-600">
                Our capabilities
              </p>
              <h3
                id="diverse-portfolio-title"
                className="text-2xl font-bold text-slate-800"
              >
                Diverse Portfolio
              </h3>
            </div>

            <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
              {portfolioAreas.map((area, index) => {
                const isExpanded = expandedItems.includes(index);

                return (
                  <div
                    key={area.title}
                    className="p-5 first:rounded-t-xl last:rounded-b-xl"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isExpanded}
                      aria-controls={`portfolio-description-${index}`}
                      className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                    >
                      <span className="flex items-center gap-3 font-semibold text-slate-800">
                        <span className="text-orange-600" aria-hidden="true">
                          {area.icon}
                        </span>
                        {area.title}
                      </span>
                      <span
                        className="shrink-0 rounded-full bg-orange-50 p-1.5 text-orange-600"
                        aria-hidden="true"
                      >
                        {isExpanded ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    {isExpanded && (
                      <p
                        id={`portfolio-description-${index}`}
                        className="mt-4 pl-8 leading-relaxed text-slate-600"
                      >
                        {area.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
