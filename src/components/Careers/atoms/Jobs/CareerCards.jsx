import Button from "@/shared/buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMagnet } from "@fortawesome/free-solid-svg-icons";
import ApplicationForm from "@/shared/(Forms)/ApplicationForm";

// components/CareerCard.js
export default function CareerCard({
  role,
  level,
  location,
  country,
  onApply,
}) {
  return (
    <div
      className="border rounded-xl shadow-md p-4 flex flex-col gap-y-3  bg-white w-full h-[250px] "
      style={{
        borderLeft: "3px solid  red",
        borderLeftColor: "red",
        transition: "border-color 0.3s ease",
      }}
    >
      {" "}
      <h3 className="text-base font-bold text-black">{role}</h3>
      <span className="flex flex-row gap-x-1 justify-start items-center mt-auto">
        <FontAwesomeIcon icon={faMagnet} className="text-red text-sm" />
        <p className="text-gray-700 text-sm">{level}</p>
      </span>
      <span className="flex flex-row gap-x-1 justify-start items-center mt-auto ">
        {" "}
        <FontAwesomeIcon icon={faLocation} className="text-red text-sm" />
        <p className="text-gray-500 text-sm">{location}</p>
      </span>
      <span className="flex flex-row gap-x-1 justify-start items-center invisible">
        {" "}
        <p className="text-gray-500 text-xs">{country}</p>
      </span>
      <section className="apply-button-container mt-auto w-full h-[fixed] ">
        <Button
          text={`Apply Now`}
          onClick={onApply}
          modalClass={`justify-start items-start`}
          className=" bg-background-light text-sm border border-background-footer_black  w-[fixed] hover:border-background-danger  text-black px-4  rounded  "
          modalContent={
            <span className="">
              {/* render the form component for applications here  */}
              <ApplicationForm />
            </span>
          }
        />
      </section>
    </div>
  );
}
