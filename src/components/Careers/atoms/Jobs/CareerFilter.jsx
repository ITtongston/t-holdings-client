// components/Filter.js
export default function CareerFilters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Define the options as arrays of objects
  const roles = [
    { value: "", label: "All" },
    { value: "Admin & HR Intern", label: "Admin & HR Intern" },
    {
      value: "Business Development Intern",
      label: "Business Development Intern",
    },
    {
      value: "Data, Research & Economics Intern",
      label: "Data, Research & Economics Intern",
    },
    { value: "Finance & Accounts Intern", label: "Finance & Accounts Intern" },
    {
      value: "Branding, Communication, PR & Marketing Intern",
      label: "Branding, Communication, PR & Marketing Intern",
    },
    { value: "Publications Intern", label: "Publications Intern" },
    {
      value: "Motion Graphics & Video editing Intern",
      label: "Motion Graphics & Video editing Intern",
    },
    { value: "Tongston Ventures Intern", label: "Tongston Ventures Intern" },
    {
      value: "Back End Development intern",
      label: "Back End Development intern",
    },
    {
      value: "Front End Development intern",
      label: "Front End Development intern",
    },
    { value: "UI/UX intern", label: "UI/UX intern" },
    {
      value: "Research, Data, Monitoring & Evaluation Consultancy",
      label: "Research, Data, Monitoring & Evaluation Consultancy",
    },
    {
      value: "Business Analyst / Solutions Architect Consultancy",
      label: "Business Analyst / Solutions Architect Consultancy",
    },
    {
      value: "Trainer, Curriculum Development Consultancy",
      label: "Trainer, Curriculum Development Consultancy",
    },
    {
      value: "Admin and HR NYSC Corps Member",
      label: "Admin and HR NYSC Corps Member",
    },
    { value: "T-Media NYSC Corps Member", label: "T-Media NYSC Corps Member" },
    {
      value: "Trainer, Curriculum Development NYSC Corps Member",
      label: "Trainer, Curriculum Development NYSC Corps Member",
    },
  ];

  const locations = [
    { value: "", label: "All" },
    { value: "Remote", label: "Remote" },
    { value: "In person - Abuja", label: "In person - Abuja" },
  ];

  const countries = [
    { value: "", label: "All" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
  ];

  return (
    <div className="flex gap-4 mb-6 justify-start items-center  flex-wrap">
      {/* Role Dropdown */}
      <select
        name="role"
        value={filters.role}
        onChange={handleChange}
        className="border p-2 rounded bg-background-light text-black w-[80%]  md:w-[30%] "
      >
        <option value={``} disabled>
          Select Role
        </option>
        {roles.map((role, index) => (
          <option key={index} value={role.value} className="">
            {role.label}
          </option>
        ))}
      </select>

      {/* Location Dropdown */}
      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="border p-2 rounded bg-background-light text-black "
      >
        <option value={``} disabled>
          Select Location
        </option>
        {locations.map((location, index) => (
          <option key={index} value={location.value}>
            {location.label}
          </option>
        ))}
      </select>

      {/* Country Dropdown */}
      <select
        name="country"
        value={filters.country}
        onChange={handleChange}
        className="border p-2 rounded bg-background-light text-black "
      >
        <option value={``} disabled>
          Select Country
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
    </div>
  );
}
