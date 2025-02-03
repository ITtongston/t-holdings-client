import React from "react";

export default function Positions() {
  const positions_data = [
    {
      title: "Consultants",
      description:
        "We hire global talent that already have other jobs or businesses who are keen to provide their skills and knowledge across different group of companies on a remote / flexible basis.",
    },
    {
      title: "Interns",
      description:
        "We hire global talent for 3,6,12 months through our Tongston structured internship program across the group of companies",
    },
    {
      title: "NYSC Corps Members",
      description:
        "We hire global talent who wish to complete their mandatory 12 month national youth service in Nigeria across the group of companies",
    },
    {
      title: "Full-time / Part-time Staff",
      description:
        "We hire global talent on a full-time basis to join our core team driving our important work across the group of companies. This is across all levels from graduate officer roles to manager up to Director level",
    },
  ];

  return (
    <div
      className="w-full h-[fixed]  p-2 py-5  md:h-[600px] flex justify-center items-center flex-col "
      style={{
        background: `url("/assets/images/career/carreerdiv.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="grid grid-cols-1    md:grid-cols-4  gap-y-6 gap-x-[2rem] justify-center items-center  h-[fixed] w-full   px-3  md:px-8">
        {positions_data.map((card, index) => (
          <div
            key={index}
            className={`  rounded-lg     w-full   h-[200px]  md:w-[250px]    md:h-[320px]  shadow-2xl   md:hover:scale-105 transform ease-in-out duration-700    bg-black bg-opacity-80  flex flex-col gap-y-5 justify-start items-start  self-baseline p-3`}
          >
            <h6 className="text-white font-heading font-medium text-xl  md:text-2xl  ">
              {card.title}
            </h6>
            <p className="text-white fot-body text-sm  md:text-base     ">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
