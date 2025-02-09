import React from "react";
import { useForm } from "react-hook-form";

const FeedbackForm = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    if (closeForm) closeForm();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-xl mt-6 flex flex-col p-6 max-w-lg w-full space-y-4"
    >
      <div className="flex gap-4">
        <div className="w-1/2">
          <input
            className="mb-2 p-4 rounded-lg text-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div className="w-1/2">
          <input
            className="mb-2 p-4 rounded-lg text-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <input
        className="mb-2 p-4 rounded-lg text-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",

          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
        })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <input
        className="mb-2 p-4 rounded-lg text-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="tel"
        placeholder="Phone Number"
        {...register("phone", {


          required: "Phone number is required",
          minLength: { value: 10, message: "Phone number must be at least 10 digits" },
        })}
      />




      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

      <input
        className="mb-2 p-4 rounded-lg text-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Address"
        {...register("address", { required: "Address is required" })}
      />
      {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

  

      <textarea
        className="mb-4 p-4 rounded-lg text-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Message"
        rows="4"
        {...register("message", { required: "Message is required" })}
      />


      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg w-full font-semibold hover:bg-blue-700 transition duration-200"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
