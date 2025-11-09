// src/components/AboutTeam.jsx
import React from "react";
import { motion } from "framer-motion";
import people from "../assets/people.png";
import stickyNote from "../assets/note.png";
import company from "../assets/company.png";
import { circularMotion } from "../utils/circularMotion.ts";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            when: "beforeChildren",
        },
    },
};

const float = {
    hidden: { y: 0 },
    show: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const AboutTeam = () => {
    return (
        <motion.section
            id="theirStory"
            className="h-full w-full mt-32 flex flex-col items-center justify-center gap-y-20 mb-20 overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex lg:flex-row xxs:flex-col items-center justify-between h-full w-[90%] mx-auto">
                {/* Sticky Note */}
                <motion.img
                    alt="note"
                    src={stickyNote}
                    className="z-50 lg:min-w-[430px] lg:min-h-[550px] md:w-[350px] md:h-[450px] sm:w-[300px] sm:h-[400px] xs:w-[250px] xs:h-[350px] xxs:w-[200px] xxs:h-[300px] object-contain"
                    variants={fadeUp}
                />

                {/* People Image + Text */}
                <motion.div
                    className="w-[97%] h-[85%] flex items-center justify-end"
                    variants={fadeIn}
                >
                    <div className="flex flex-col items-end justify-between gap-y-4 relative">
                        <motion.img
                            alt="people"
                            src={people}
                            className="xl:min-w-[1000px] xl:min-h-[800px] lg:w-[480px] lg:h-[395px] xxs:w-full object-contain"
                            variants={fadeUp}
                        />

                        <motion.div
                            className="2xl:w-full xl:w-[70%] md:w-full flex flex-col items-center justify-between gap-y-4 text-center"
                            variants={fadeUp}
                        >
                            <p className="lg:text-3xl sm:text-xl xxs:text-sm">
                                Take a closer look at the stories V bring to life.
                            </p>
                            <a
                                href="/#varnan"
                                className="bg-[#F15D2B] rounded-full text-white px-6 py-3 font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                View Portfolio
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Company Logo */}
        </motion.section>
    );
};

export default AboutTeam;
