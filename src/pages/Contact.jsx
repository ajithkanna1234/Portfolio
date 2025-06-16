import { CoolMode } from "@/components/animation/cool-mode";
import { Send } from "lucide-react";
import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_9n3bm1l";
const TEMPLATE_ID = "template_n7gp61n";
const PUBLIC_KEY = "tP09gmKiYz72wXolg";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    const formData = new FormData(e.target);
    const formValues = {date: formattedDate, time:timeString,...Object.fromEntries(formData.entries()) }

     emailjs.send(SERVICE_ID, TEMPLATE_ID, formValues, PUBLIC_KEY)
       .then((result) => {
         alert('Message Sent Successfully')
       }, (error) => {
         console.log(error.text);
         alert('Something went wrong!')
       });
     e.target.reset()
  };
  return (
    <div className="relative h-screen bg-gradient-to-b from-black/10 to-black z-50">
      <div className="h-full w-full bg-black/50 backdrop-blur-xl absolute bottom-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center gap-8 w-full px-4 py-8">
          <h2 className="text-4xl md:text-5xl font-koulen z-50 text-white m-[2%] w-fit py-4">
            Contact Me
          </h2>

          <form
            className="w-full md:w-1/2 space-y-8 flex flex-col font-sans items-center"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-4 text-white !bg-transparent border-b border-white focus:outline-none focus:border-blue-500
                        [-webkit-text-fill-color:_white] 
                        [&:-webkit-autofill]:!bg-transparent
                        transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-4 text-white !bg-transparent border-b border-white focus:outline-none focus:border-blue-500
                        [-webkit-text-fill-color:_white] 
                        [&:-webkit-autofill]:!bg-transparent
                        transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full p-4 text-white !bg-transparent resize border rounded-lg border-white focus:outline-none focus:border-blue-500
                        [-webkit-text-fill-color:_white] 
                        [&:-webkit-autofill]:!bg-transparent
                        transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]"
              rows="5"
            />
            <CoolMode>
              <button
                type="submit"
                className="rounded-2xl border-2 border-dashed border-white bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              >
                <Send />
              </button>
            </CoolMode>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
