import React from "react";
import house from "../assets/house.png";
import members from "../assets/members.png";
import company from "../assets/company.png";
import { circularMotion, slideInFromBottom } from "../utils/circularMotion.ts"; // Assuming this path is correct
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
    // This hook will trigger the animation for the 'members' image when it scrolls into view
    const { ref, inView } = useInView({
        triggerOnce: false, // Animation can re-trigger
        threshold: 0.3,   // Trigger when 30% of the element is visible
    });

    return (
        <section id="ourStory" className="w-full h-full mt-40 md:mt-60">
            {/* Main two-column container */}
            <div className="w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 items-start">

                {/* --- LEFT COLUMN --- */}
                <div className="flex flex-col gap-y-16 lg:gap-y-24">
                    {/* Upper Part: Text */}
                    <div className="flex flex-col gap-y-8">
                        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold">
                            A montage of familiar faces and names.
                        </h1>
                        <p className="lg:text-2xl text-base sm:text-lg text-gray-700">
                            Some stories come from the biggest names. Others begin with bold,
                            rising voices. We’ve been fortunate to walk alongside both -
                            listening, creating, and building stories that matter.
                        </p>
                    </div>

                    {/* Bottom Part: Members Image */}
                    <motion.img
                        ref={ref}
                        variants={slideInFromBottom(0.25)}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        alt="members"
                        src={members}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* --- RIGHT COLUMN --- */}
                {/* Note the negative margin to shift this column upwards relative to the left column */}
                <div className="flex flex-col gap-y-8 lg:gap-y-12 -mt-0 md:-mt-10 lg:-mt-20">
                    {/* Upper Part: Text */}
                    <h1
                        className="text-center md:text-left font-normal text-[60px] leading-[100%] tracking-[0] font-[island]"
                        style={{
                            fontFamily: '"Island Moments", cursive',
                            fontWeight: 400,
                            fontStyle: "normal",
                            lineHeight: "100%",
                            letterSpacing: "0",
                        }}
                    >
                        Every project is more than just a brief — it’s a new chapter waiting
                        to be written. Together, we've crafted tales that inspire, connect,
                        and endure.
                    </h1>


                    {/* Bottom Part: Ring + House Animation */}
                    <div className="relative flex items-center justify-center mt-8">
                        {/* Animated Ring */}
                        <motion.img
                            alt="Company Logos Ring"
                            src={company}
                            className="w-full max-w-[230px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[600px] h-auto"
                            variants={circularMotion}
                            initial="hidden"
                            animate="visible"
                        />
                        {/* Centered House */}
                        <img
                            src={house}
                            alt="House"
                            className="absolute w-1/2 h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;