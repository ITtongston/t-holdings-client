import Button from "@/shared/buttons/button";
import React from "react";
import AllOpenRoles from "./Jobs/AllRoles";

export default function OpenRoles() {
  return (
    <div className="w-full h-[fixed] bg-background-gold flex flex-col gap-y-5 justify-center items-center self-center  ">
      {" "}
      <section className="title-container w-full flex justify-center items-center text-center pt-5 ">
        {" "}
        <h1 className="text-black font-bold text-xl  font-heading  md:text-3xl  text-center ">
          Open Roles
        </h1>
      </section>
      <section className="download-button-container w-full flex justify-center items-center text-center pt-5 ">
        <a href="" download>
          {" "}
          <Button
            text={`More on the Teams`}
            className={`bg-background-light text-black  w-[200px] rounded-lg hover:bg-background-danger hover:text-white`}
          />
        </a>
      </section>
      <section className="open-roles-section w-full h-[fixed] flex justify-center items-center self-center">
        <AllOpenRoles />
      </section>
    </div>
  );
}
