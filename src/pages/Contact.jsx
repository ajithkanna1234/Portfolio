import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Check, X } from "lucide-react";
import emailjs from "emailjs-com";
import { CoolMode } from "@/components/animation/cool-mode";

const SERVICE_ID = "service_9n3bm1l";
const TEMPLATE_ID = "template_n7gp61n";
const PUBLIC_KEY = "tP09gmKiYz72wXolg";

const InputField = ({ type, name, placeholder, value, onChange, error }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full p-4 text-white !bg-transparent border-b ${
      error ? "border-red-600" : "border-white"
    } focus:outline-none focus:border-blue-500 
    [-webkit-text-fill-color:_white] [&:-webkit-autofill]:!bg-transparent 
    transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]`}
  />
);

const TextAreaField = ({ name, placeholder, value, onChange, error }) => (
  <textarea
    name={name}
    rows="5"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full p-4 text-white !bg-[#171717] resize border rounded-lg ${
      error ? "border-red-600" : "border-[#171717]"
    } focus:outline-none focus:border-blue-500 
    [-webkit-text-fill-color:_white] [&:-webkit-autofill]:!bg-transparent 
    transition-[background-color] duration-[5000s] ease-[ease] delay-[0s]`}
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [notification, setNotification] = useState({
    show: false,
    type: null, // 'sending', 'success', 'error'
    message: "",
    progress: 0,
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const formData = new FormData(e.target);

    const data = {
      date: now.toISOString().split("T")[0],
      time: now.toTimeString().split(" ")[0],
      ...Object.fromEntries(formData.entries()),
    };
    const newErrors = {
      name: !data.name,
      email: !data.email,
      message: !data.message,
    };
    setError(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setNotification({
      show: true,
      type: "sending",
      message: "Sending message...",
      progress: 0,
    });

    const progressInterval = setInterval(() => {
      setNotification((prev) => ({
        ...prev,
        progress: Math.min(prev.progress + 10, 90),
      }));
    }, 200);
    try {
      // Simulate progress

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      setError({ name: false, email: false, message: false });
      clearInterval(progressInterval);

      // Show success notification
      setNotification({
        show: true,
        type: "success",
        message: "Message sent! I’ll be in touch soon.",
        progress: 100,
      });
      setFormData({ name: "", email: "", message: "" });
      e.target.reset();
    } catch (error) {
      clearInterval(progressInterval);
      console.error(error.text);

      // Show error notification
      setNotification({
        show: true,
        type: "error",
        message: "Failed to send message!",
        progress: 100,
      });
    } finally {
      // Auto-hide after 3 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);
    }
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black/10 to-black z-50">
      <div className="absolute bottom-0 flex h-full w-full flex-col items-center justify-center bg-black/50 backdrop-blur-xl">
        <motion.header
          className="flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-12"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-koulen text-white tracking-wider">
            <motion.span
              className="whitespace-nowrap"
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Contact ME
            </motion.span>
          </h1>
        </motion.header>

        <div className="w-full max-w-[600px] px-6 md:px-0 mx-auto">
          <form
            onSubmit={handleOnSubmit}
            className="grid w-full gap-8 font-sans"
          >
            <InputField
              type="text"
              name="name"
              error={error.name}
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>{
                setFormData({ ...formData, name: e.target.value })
                setError({ ...error, name: false })
              }
              }
              />
            <InputField
              type="email"
              name="email"
              error={error.email}
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>{
                setFormData({ ...formData, email: e.target.value })
                setError({ ...error, email: false })
              }
              }
              />
            <TextAreaField
              name="message"
              placeholder="Enter your message"
              error={error.message}
              value={formData.message}
               onChange={(e) =>{
                setFormData({ ...formData, message: e.target.value })
                setError({ ...error, message: false })
              }
              }
            />

            <CoolMode>
              <button
                type="submit"
                className="flex w-fit items-center gap-2 rounded-2xl border-2 border-dashed border-white bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
              >
                <Send /> Send Message
              </button>
            </CoolMode>
          </form>
        </div>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 right-8 z-50"
          >
            <div className="flex items-center gap-4 p-4 rounded-lg shadow-sm bg-gray-950 text-white shadow-[#555]">
              <div className="relative">
                {notification.type === "sending" ? (
                  <CircularProgress progress={notification.progress} />
                ) : notification.type === "success" ? (
                  <Check className="text-green-600" />
                ) : (
                  <X className="text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium">{notification.message}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CircularProgress = ({ progress }) => {
  const circumference = 2 * Math.PI * 12;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-8 h-8 transform -rotate-90">
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="currentColor"
        strokeWidth="3"
        fill="transparent"
        className="text-white opacity-30"
      />
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="currentColor"
        strokeWidth="3"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        className="text-indigo-500" // Changed progress bar color to blue
      />
    </svg>
  );
};

export default Contact;
