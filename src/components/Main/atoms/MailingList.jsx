import React from "react";
import emailjs from "emailjs-com";
import Button from "@/shared/buttons/button";

export default function MailingList() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const service_id = process.env.NEXT_PUBLIC_NL_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_NL_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_NL_USER_ID;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
    };

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR!", error.text);
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-[400px] bg-background-gold flex flex-col gap-y-5 justify-center items-center ">
      <div className="container flex flex-col gap-y-3 justify-center items-center w-full h-[fixed] mt-8 ">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Get Latest Updates
        </span>
        <p className="text-black font-body font-normal  text-center   text-lg  md:text-xl ">
          Don&apos;t miss out on important information. Subscribe to the latest
          updates
        </p>
      </div>
      <div className="mail-form-container  w-full h-[fixed] container flex flex-col gap-y-4 justify-center items-center p-2 ">
        <form
          onSubmit={handleSubmit}
          className="form flex flex-col gap-y-8 justify-center items-center  gap-x-5"
        >
          <div className="form  px-4 flex flex-col gap-y-4 justify-center items-center md:flex-row gap-x-5">
            <input
              type="text"
              value={name}
              placeholder="Enter Your Full Name"
              onChange={(e) => setName(e.target.value)}
              className="w-[300px]   md:w-[400px] outline-none focus:outline-none  focus:ring-1 transform ease-in-out duration-700  focus:ring-rose-800 h-[55px] p-2 rounded-md bg-background-light text-black  font-bold "
              required
            />
            <input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px]   md:w-[400px] outline-none focus:outline-none  focus:ring-1 transform ease-in-out duration-700  focus:ring-rose-800 h-[55px] p-2 rounded-md bg-background-light text-black  font-bold "
              required
            />
          </div>
          <Button
            text={`Subscribe`}
            className={` rounded-md   bg-background-danger text-white font-body font-bold  hover:bg-white hover:text-black`}
          />
        </form>
      </div>
    </div>
  );
}
