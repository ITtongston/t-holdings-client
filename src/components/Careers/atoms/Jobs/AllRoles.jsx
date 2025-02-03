import { useState } from "react";
import CareerCard from "./CareerCards";
import CareerFilters from "./CareerFilter";

export default function AllOpenRoles() {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    country: "",
  });

  const [showAll, setShowAll] = useState(false);

  const roles = [
    {
      id: 1,
      role: "Admin & HR Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "In person - Abuja",
      country: "Nigeria",
    },
    {
      id: 2,
      role: "Business Development Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    {
      id: 3,
      role: "Data, Research & Economics Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    {
      id: 4,
      role: "Finance & Accounts Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    // Additional roles here...
    {
      id: 5,
      role: "Branding, Communication, PR & Marketing Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
      country: "",
    },
    {
      id: 6,
      role: "Publications Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    {
      id: 7,
      role: "Motion Graphics & Video editing Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    {
      id: 8,
      role: "Tongston Ventures Intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },

    //more roles set 3
    {
      id: 9,
      role: "Back End Development intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
      country: "",
    },
    {
      id: 10,
      role: "Front End Development intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    {
      id: 11,
      role: "UI/UX intern",
      level: "Undergraduate & Postgraduate Students",
      location: "Remote",
    },
    {
      id: 12,
      role: "Research, Data, Monitoring & Evaluation Consultancy",
      level: "Adhoc / Consultancy",
      location: "Remote",
    },

    //more roles set 4
    {
      id: 13,
      role: "Business Analyst / Solutions Architect Consultancy",
      level: "Adhoc / Consultancy",
      location: "Remote",
      country: "",
    },
    {
      id: 14,
      role: "Trainer, Curriculum Development Consultancy",
      level: "Adhoc / Consultancy",
      location: "Remote",
    },
    {
      id: 15,
      role: "Admin and HR NYSC Corps Member",
      level: "Full-time / NYSC",
      location: "In Person - Abuja",
      country: "Nigeria",
    },
    {
      id: 16,
      role: "T-Media NYSC Corps Member",
      level: "Full-time / NYSC",
      location: "In Person - Abuja",
      country: "Nigeria",
    },
    //more roles set5
    {
      id: 17,
      role: "Trainer, Curriculum Development NYSC Corps Member",
      level: "Full-time / NYSC",
      location: "In person - Abuja",
      country: "Nigeria",
    },
  ];

  const filteredRoles = roles.filter((role) => {
    return (
      (!filters.role || role.role === filters.role) &&
      (!filters.location || role.location === filters.location) &&
      (!filters.country || role.country === filters.country)
    );
  });

  const displayedRoles = showAll ? filteredRoles : filteredRoles.slice(0, 4);

  return (
    <div className="   p-2     md:p-8 flex flex-col gap-y-6 w-full">
      <section className="filter-inputs-section w-full mr-auto">
        <CareerFilters filters={filters} setFilters={setFilters} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedRoles.map((role) => (
          <CareerCard
            key={role.id}
            role={role.role}
            level={role.level}
            location={role.location}
            onApply={() => alert(`Applied for ${role.role}`)}
          />
        ))}
      </div>

      {filteredRoles.length > 4 && (
        <div className="flex justify-start mt-4">
          <button
            className="px-6 py-2 bg-background-light text-black rounded-md  hover:bg-background-danger hover:text-white
            "
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Close" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
