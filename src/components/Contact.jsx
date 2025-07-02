import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ayvyozvb", userInfo);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
    reset();
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contract Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            // action="https://getform.io/f/ayvyozvb"
            // method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                required
                type="text"
                id="name"
                name="name"
                className="shadow rounded-lg appearance-none border border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                placeholder="Your Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                className="shadow rounded-lg appearance-none border border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                placeholder="Email Address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                id="message"
                name="message"
                className="shadow rounded-lg appearance-none border border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                placeholder="Enter your message here"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
