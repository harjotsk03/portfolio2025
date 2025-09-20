"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm({ addToast }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const fullName = e.target.fullName.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    // custom validation
    const errors = [];
    if (!fullName) errors.push("Full name is required.");
    if (!email) errors.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Please enter a valid email address.");
    if (!message) errors.push("Message cannot be empty.");

    if (errors.length > 0) {
      errors.forEach((err) => addToast(err, "error"));
      setStatus("");
      return;
    }

    try {
      const { error } = await supabase
        .from("contact_form")
        .insert([{ full_name: fullName, email, message }]);

      if (error) throw error;

      setStatus("Message sent successfully!");
      addToast("Message sent successfully!", "success");
      e.target.reset();
    } catch (err) {
      console.error(err);
      addToast("Something went wrong. Please try again.", "error");
      setStatus("");
    }
  }

  return (
    <section className="bg-white w-full flex flex-col px-8 lg:px-40 py-10 lg:py-24 relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-full"
        aria-label="Contact form"
        noValidate
      >
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="fullName"
              className="manrope-light text-xs text-stone-600"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="bg-stone-100 manrope-regular w-full px-4 text-sm py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="John Doe"
              aria-label="Full name"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="email"
              className="manrope-light text-xs text-stone-600"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="bg-stone-100 manrope-regular w-full px-4 text-sm py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="johndoe@mail.com"
              aria-label="Email address"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="message"
            className="manrope-light text-xs text-stone-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="bg-stone-100 manrope-regular w-full px-4 text-sm py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
            placeholder="Hi Harjot, I would love to work with you on..."
            aria-label="Message"
          />
        </div>

        <button
          type="submit"
          className="bg-white border flex flex-row items-center gap-2 hover:border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer border-stone-200 mt-4 text-sm w-max manrope-regular px-5 py-2 rounded-lg"
        >
          Send Message <FaPaperPlane />
        </button>

        {status && (
          <p className="text-sm text-stone-600 mt-2" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
