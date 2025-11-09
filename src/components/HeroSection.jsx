// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navigation from "./Navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const logoAnim = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const subtleFloat = {
  hidden: { y: 6 },
  show: {
    y: 0,
    transition: {
      y: {
        duration: 3,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    // Main container with background color and padding.
    <motion.section
      className="relative min-h-screen bg-brand-background font-sans p-6 md:p-10 flex flex-col justify-center overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Decorative textured borders */}
      <div className="absolute top-0 left-0 w-full h-3 bg-brand-border"></div>
      <div className="absolute bottom-0 left-0 w-full h-3 bg-brand-border"></div>
      <div className="absolute top-0 left-0 w-3 h-full bg-brand-border"></div>
      <div className="absolute top-0 right-0 w-3 h-full bg-brand-border"></div>

      <Navigation />

      {/* Main content grid */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          {/* Left Side: Logo */}
          <motion.div
            className="flex justify-center"
            variants={logoAnim}
          >
            <motion.div variants={subtleFloat}>
              <Logo />
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col items-start text-left">
            <motion.h1
              className="font-serif text-5xl md:text-6xl text-brand-heading italic leading-tight"
              variants={fadeUp}
            >
              Varnan is where stories find
              <br />
              their voice and form
            </motion.h1>

            <motion.p
              className="text-brand-accent text-xl md:text-2xl mt-8 tracking-widest font-medium text-[#F15D2B]"
              variants={fadeUp}
            >
              Films . Brands . Art
            </motion.p>

            <motion.p
              className="text-brand-text mt-8 max-w-md text-base leading-relaxed"
              variants={fadeUp}
            >
              Since 2009, V've been telling stories - stories of people,
              their journeys, and the places that shape them. Some begin in
              polished boardrooms, others in humble village squares. But every
              story starts the same way - by listening with intention. V
              believes it takes trust, patience, and an eye for the unseen to
              capture what truly matters. V doesn't just tell stories - V honors them.
            </motion.p>
          </div>
        </div>
      </main>

      {/* Decorative Line at the bottom left */}
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-1 bg-brand-deco-line hidden md:block"
        variants={fadeUp}
      />
    </motion.section>
  );
};

export default HeroSection;
