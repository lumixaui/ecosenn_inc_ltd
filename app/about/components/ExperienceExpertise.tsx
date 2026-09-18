"use client";

import { useEffect, useState } from "react";
import {
  Award,
  Building2,
  ExternalLink,
  FileText,
  Globe,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Infrastructure Development",
    description:
      "Comprehensive experience in designing and executing large-scale infrastructure projects that drive regional development.",
    projects: [
      "Electric power generation, transmission and distribution ",
      "Construction of buildings",
      "Construction of roads and railways",
      "Construction of utility projects",
      "Construction of other civil engineering projects ",
      "Electrical installation ",
      "Other construction installation ",
      "Building completion and finishing ",
      "Wholesale of construction materials, hardware, plumbing and heating equipment and supplies ",
    ],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Electrical Systems",
    description:
      "Expertise in electrical construction, transmission lines, and rural electrification bringing power to underserved communities.",
    projects: [
      "220kV and 400kV transmission line projects",
      "Electrical distribution network construction",
      "Rural electrification and power connection projects",
    ],
    projectTable: [
      {
        serialNumber: "1",
        projectName:
          "Foundation of towers and tower erection in Uganda in Karuma Kawanda 400kV Transmission Line",
        client: "Kalpataru Power Transmission Line in Uganda",
        projectLocation: "Uganda",
        status: "Completed",
        period: "2017-2019",
      },
      {
        serialNumber: "2",
        projectName:
          "Foundation of towers and tower erection in Rwanda, Rusumo Shango Bugesera 220kV Transmission Line",
        client: "Sterling and Wilson Co. Ltd",
        projectLocation: "Eastern Province and Kigali City, Rwanda",
        status: "Completed",
        period: "2022-2023",
      },
      {
        serialNumber: "3",
        projectName:
          "Construction of LV Network Service Connections in Rulindo and Gicumbi Districts",
        client: "Power Districom",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2014",
      },
      {
        serialNumber: "4",
        projectName:
          "Tower Erection in JNNP to Chalinze 400kV Transmission Line (Tanzania)",
        client: "Larsen and Toubro (L&T) Company Ltd",
        projectLocation: "Tanzania",
        status: "Completed",
        period: "June 2023 - December 2023",
      },
      {
        serialNumber: "5",
        projectName: "Supply and Construction of MV and LV in Gicumbi District",
        client: "Sino Hydro",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2023-2024",
      },
      {
        serialNumber: "6",
        projectName:
          "Construction of MV and LV Distribution Lines in Ngororero District",
        client: "CEGELEC",
        projectLocation: "Rwanda",
        status: "Given scope completed",
        period: "2024",
      },
      {
        serialNumber: "7",
        projectName:
          "Construction of MV and LV Distribution Lines in Nyamasheke District",
        client: "MBH Power Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "Started in 2024",
      },
      {
        serialNumber: "8",
        projectName:
          "Construction of MV and LV Distribution Lines in Rusizi District",
        client: "MBH Power Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "Started in 2024",
      },
      {
        serialNumber: "9",
        projectName:
          "Tower Erection and Foundation Works for 220kV High Transmission Line in Shango-Gisenyi-Shango",
        client: "Kalpataru Power Transmission Ltd Rwanda",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2014-2016",
      },
      {
        serialNumber: "10",
        projectName:
          "Design, Supply and Installation of Medium Voltage and Low Voltage Lines and Service Connections in Rulindo District, Northern Province",
        client: "ERTEC Rwanda Ltd",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2023-2025",
      },
      {
        serialNumber: "11",
        projectName:
          "Tower Erection and Foundation Works for High Transmission Line Goma-Gisenyi 220kV",
        client: "Kalpataru Power Transmission Ltd Rwanda",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2015-2016",
      },
      {
        serialNumber: "12",
        projectName:
          "Construction of 30kV MV Distribution Lines in Northern Province, Rwanda: Rukomo, Rutare, Bukure, Gasacye and Idjiri",
        client: "Gamon Company Ltd",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2014-2015",
      },
      {
        serialNumber: "13",
        projectName:
          "Construction of MV and LV Distribution Lines in Kirehe District",
        client: "TBEA Co. Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "June 2025 - December 2025",
      },
      {
        serialNumber: "14",
        projectName:
          "Foundation of Towers, Tower Erection and Stringing Works for 400kV Transmission Line",
        client: "Kalpataru Power Transmission Ltd",
        projectLocation: "Angola",
        status: "Ongoing",
        period: "2025-2026",
      },
      {
        serialNumber: "15",
        projectName:
          "Construction of MV and LV Distribution Lines in Huye-Gisagara District",
        client: "CJIC (China Jiangxi)",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "2025-2026",
      },
      {
        serialNumber: "16",
        projectName:
          "Tower Erection and Foundation Works for 220kV High Transmission Line in Kibuye-Gisenyi",
        client: "Kalpataru Power Transmission Ltd Rwanda",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2015-2016",
      },
      {
        serialNumber: "17",
        projectName:
          "Foundation of Towers and Tower Erection in Makambako to Songea 220kV Transmission Line, Tanzania",
        client: "Kalpataru Power Transmission Ltd Tanzania",
        projectLocation: "Tanzania",
        status: "Completed",
        period: "2017-2018",
      },
    ],
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Project Management",
    description:
      "Proven track record of delivering projects on time and within budget using modern project management methodologies.",
    projects: [
      // "Multi-country infrastructure project delivery",
      // "Construction planning and programme coordination",
      // "Quality, cost, and schedule management",
    ],
    projectTable: [
      {
        serialNumber: "1",
        projectName:
          "Foundation of towers and tower erection in Uganda in Karuma Kawanda 400kV Transmission Line",
        client: "Kalpataru Power Transmission Line in Uganda",
        projectLocation: "Uganda",
        status: "Completed",
        period: "2017-2019",
      },
      {
        serialNumber: "2",
        projectName:
          "Foundation of towers and tower erection in Rwanda, Rusumo Shango Bugesera 220kV Transmission Line",
        client: "Sterling and Wilson Co. Ltd",
        projectLocation: "Eastern Province and Kigali City, Rwanda",
        status: "Completed",
        period: "2022-2023",
      },
      {
        serialNumber: "3",
        projectName:
          "Construction of LV Network Service Connections in Rulindo and Gicumbi Districts",
        client: "Power Districom",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2014",
      },
      {
        serialNumber: "4",
        projectName:
          "Tower Erection in JNNP to Chalinze 400kV Transmission Line (Tanzania)",
        client: "Larsen and Toubro (L&T) Company Ltd",
        projectLocation: "Tanzania",
        status: "Completed",
        period: "June 2023 - December 2023",
      },
      {
        serialNumber: "5",
        projectName: "Supply and Construction of MV and LV in Gicumbi District",
        client: "Sino Hydro",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2023-2024",
      },
      {
        serialNumber: "6",
        projectName:
          "Construction of MV and LV Distribution Lines in Ngororero District",
        client: "CEGELEC",
        projectLocation: "Rwanda",
        status: "Given scope completed",
        period: "2024",
      },
      {
        serialNumber: "7",
        projectName:
          "Construction of MV and LV Distribution Lines in Nyanza District",
        client: "Lumino Industry Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "Started in 2024",
      },
      {
        serialNumber: "8",
        projectName:
          "Construction of MV and LV Distribution Lines in Nyamasheke District",
        client: "MBH Power Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "Started in 2024",
      },
      {
        serialNumber: "9",
        projectName:
          "Construction of MV and LV Distribution Lines in Rusizi District",
        client: "MBH Power Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "Started in 2024",
      },
      {
        serialNumber: "10",
        projectName:
          "Tower Erection and Foundation Works for 220kV High Transmission Line in Shango-Gisenyi-Shango",
        client: "Kalpataru Power Transmission Ltd Rwanda",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2014-2016",
      },
      {
        serialNumber: "11",
        projectName:
          "Design, Supply and Installation of Medium Voltage and Low Voltage Lines and Service Connections in Rulindo District, Northern Province",
        client: "ERTEC Rwanda Ltd",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2023-2025",
      },
      {
        serialNumber: "12",
        projectName:
          "Tower Erection and Foundation Works for High Transmission Line Goma-Gisenyi 220kV",
        client: "Kalpataru Power Transmission Ltd Rwanda",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2015-2016",
      },
      {
        serialNumber: "13",
        projectName:
          "Construction of 30kV MV Distribution Lines in Northern Province, Rwanda: Rukomo, Rutare, Bukure, Gasacye and Idjiri",
        client: "Gamon Company Ltd",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2014-2015",
      },
      {
        serialNumber: "14",
        projectName:
          "Design, Supply and Installation of Medium Voltage and Low Voltage Lines and Service Connections in Bugesera, Rwamagana, Kirehe, Ngoma, Nyagatare and Gatsibo",
        client: "ERTEC Rwanda Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "2024",
      },
      {
        serialNumber: "15",
        projectName:
          "Construction of MV and LV Distribution Lines in Kirehe District",
        client: "TBEA Co. Ltd",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "June 2025 - December 2025",
      },
      {
        serialNumber: "16",
        projectName:
          "Foundation of Towers, Tower Erection and Stringing Works for 400kV Transmission Line",
        client: "Kalpataru Power Transmission Ltd",
        projectLocation: "Angola",
        status: "Ongoing",
        period: "2025-2026",
      },
      {
        serialNumber: "17",
        projectName:
          "Construction of MV and LV Distribution Lines in Huye-Gisagara District",
        client: "CJIC (China Jiangxi)",
        projectLocation: "Rwanda",
        status: "Ongoing",
        period: "2025-2026",
      },
      {
        serialNumber: "18",
        projectName:
          "Tower Erection and Foundation Works for 220kV High Transmission Line in Kibuye-Gisenyi",
        client: "Kalpataru Power Transmission Ltd Rwanda",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2015-2016",
      },
      {
        serialNumber: "19",
        projectName:
          "Foundation of Towers and Tower Erection in Makambako to Songea 220kV Transmission Line, Tanzania",
        client: "Kalpataru Power Transmission Ltd Tanzania",
        projectLocation: "Tanzania",
        status: "Completed",
        period: "2017-2018",
      },
      {
        serialNumber: "20",
        projectName:
          "Design, Supply and Installation of Medium Voltage and Low Voltage Lines and Service Connections in Nyanza and Ruhango",
        client: "SINSTECL Co. Ltd",
        projectLocation: "Rwanda",
        status: "Completed",
        period: "2023-2025",
      },
      {
  serialNumber: "21",
  projectName:
    "Plan and Design, Supply and Installation Services for 220kV and 110kV Transmission Lines and Substations Expansion Project",
  client: "Sinohydro Corporation Limited",
  location: "Bugesera",
  employer: "EDCL",
  projectLocation: "Rwanda",
  status: "Ongoing",
  period: "2026-2026 (90 Days)",
},
    ],
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Skilled Workforce",
    description:
      "Teams of experienced engineers, technicians, and construction professionals committed to excellence and safety.",
    projects: [
      "Engineering and technical construction teams",
      "Transmission line installation crews",
      "Site supervision and skilled labour deployment",
    ],
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Quality Standards",
    description:
      "Adherence to international quality standards and best practices in all construction and installation work.",
    projects: [
      "Construction quality assurance and inspections",
      "Electrical installation testing and commissioning",
      "Health, safety, and environmental compliance programmes",
    ],
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Regional Presence",
    description:
      "Strong operational presence in Rwanda, Uganda, and Tanzania with local knowledge and community connections.",
    projects: [
      // "Infrastructure projects in Rwanda",
      // "Electrical construction projects in Uganda",
      // "Civil and transmission projects in Tanzania",
    ],
    pdfs: [
      {
        name: "ECOSEN Angola Company Registration",
        url: "/files/ECOSEN%20Angola%20co%20Registration.pdf",
      },
      {
        name: "ECOSEN Central African Republic Company Registration",
        url: "/files/ECOSEN%20Central%20African%20Republic%20co%20Registration.pdf",
      },
      {
        name: "ECOSEN Tanzania Company Registration",
        url: "/files/ECOSEN%20Tanzania%20co%20Registration.pdf",
      },
      {
        name: "ECOSEN Uganda Company Registration",
        url: "/files/ECOSEN%20Uganda%20co%20Registration.pdf",
      },
      {
        name: "ECOSEN Rwanda Development Board Registration Certificate",
        url: "/files/ECOSEN%20RDB%20NEW%20REG%20CERTIFICTE.pdf",
      },
    ],
  },
];

export default function ExperienceExpertise() {
  const [selectedArea, setSelectedArea] = useState<
    (typeof expertiseAreas)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedArea) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedArea(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedArea]);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseAreas.map((item) => (
          <div
            key={item.title}
            className="about-pop flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl focus-within:-translate-y-2 focus-within:scale-[1.02]"
          >
            <div className="text-orange-600 mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
            <button
              type="button"
              onClick={() => setSelectedArea(item)}
              className="mt-6 inline-flex items-center self-start rounded-lg bg-orange-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
            >
              View more
            </button>
          </div>
        ))}
      </div>

      {selectedArea && (
        <div
          className="about-modal fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-6"
          role="presentation"
          onClick={() => setSelectedArea(null)}
        >
          <div
            className="about-modal-panel relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-list-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArea(null)}
              aria-label="Close project list"
              className="absolute right-5 top-5 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="pr-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-600">
                Projects
              </p>
              <h3
                id="project-list-title"
                className="text-2xl font-bold text-slate-800"
              >
                {selectedArea.title}
              </h3>
            </div>
            {selectedArea.projectTable ? (
              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-700">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3">
                        SN
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3">
                        Project name and Location
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3">
                        Client
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3">
                        Project Location
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3">
                        Status
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3">
                        Period
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedArea.projectTable.map((project) => (
                      <tr
                        key={project.serialNumber}
                        className="align-top text-slate-600"
                      >
                        <td className="border-b border-slate-200 px-4 py-4 font-semibold text-slate-800">
                          {project.serialNumber}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-4">
                          {project.projectName}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-4">
                          {project.client}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-4">
                          {project.projectLocation}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-4">
                          {project.status}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-4 whitespace-nowrap">
                          {project.period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <ul className="mt-6 space-y-3">
                {selectedArea.projects.map((project) => (
                  <li key={project} className="flex gap-3 text-slate-600">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-600"
                      aria-hidden="true"
                    />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            )}
            {selectedArea.pdfs && (
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-600">
                  Registration Certificates
                </p>
                <div className="space-y-3">
                  {selectedArea.pdfs.map((pdf) => (
                    <a
                      key={pdf.url}
                      href={pdf.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-3 text-slate-700 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                    >
                      <span className="flex items-center gap-3">
                        <FileText
                          className="h-5 w-5 shrink-0 text-orange-600"
                          aria-hidden="true"
                        />
                        <span>{pdf.name}</span>
                      </span>
                      <ExternalLink
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
