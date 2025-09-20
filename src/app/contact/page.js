"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";
import { AlertOctagon, Check } from "lucide-react";

export default function Contact() {
  const [toasts, setToasts] = useState([]);
  const toastCounter = useRef(0);

  const addToast = (message, type = "error") => {
    const id = ++toastCounter.current;
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <>
      {/* Toast container at page level */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-3 flex flex-row gap-2 items-center rounded-xl shadow-md text-sm manrope-medium ${
                toast.type === "error"
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {toast.type ? <AlertOctagon size={14} /> : <Check />}
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="w-full fade-in-down bg-white h-full">
        <Hero />
        <ContactForm addToast={addToast} />
        <Footer />
      </div>
    </>
  );
}
