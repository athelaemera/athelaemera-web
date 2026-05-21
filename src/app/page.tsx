"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xvzykjqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        alert("System error. Please try again later.");
      }
    } catch (error) {
      console.error("Connection failed", error);
      alert("Network connection failed. Please check your internet link.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-black selection:bg-white/20">
      {/* Container Utama dengan Efek Animasi Masuk */}
      <div className="flex flex-col items-center space-y-8 animate-[fadeIn_1.5s_ease-in-out]">
        
        {/* Simbol Standalone Athelaemera */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 transition-transform duration-700 hover:scale-105">
          <Image
            src="/logo.svg"
            alt="Athelaemera Logo"
            fill
            priority
            className="object-contain invert"
          />
        </div>

        {/* Visi Makro / Copywriting Premium */}
        <div className="text-center max-w-md px-4">
          <h1 className="text-sm md:text-base font-light tracking-[0.3em] text-white/90 uppercase mb-3">
            Athelaemera
          </h1>
          <p className="text-xs md:text-sm font-light tracking-wide text-neutral-500 leading-relaxed">
            Architecting high-performance digital utilities for frictionless collaboration. 
            Something absolute is brewing.
          </p>
        </div>

        {/* Formulir Penampung Email Interaktif */}
        {isSubmitted ? (
          <div className="text-center py-4 animate-[fadeIn_0.5s_ease-in-out]">
            <p className="text-xs font-light tracking-widest text-emerald-400 uppercase">
              // System Access Requested.
            </p>
            <p className="text-[11px] text-neutral-500 mt-1">
              Your identity has been logged. We will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 pt-4 w-full max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your system access code / email"
              className="w-full bg-neutral-900/50 text-white text-xs font-light px-4 py-3 rounded border border-neutral-800/80 focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600 text-center sm:text-left"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap bg-white text-black text-xs font-medium px-5 py-3 rounded hover:bg-neutral-200 transition-colors duration-300 disabled:bg-neutral-700 disabled:text-neutral-400"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Request Access"}
            </button>
          </form>
        )}

      </div>

      {/* Footer Hak Cipta Studio Minimalis */}
      <footer className="absolute bottom-6 text-[10px] font-light tracking-[0.2em] text-neutral-700 uppercase">
        © {new Date().getFullYear()} Athelaemera. All rights reserved.
      </footer>
    </main>
  );
}