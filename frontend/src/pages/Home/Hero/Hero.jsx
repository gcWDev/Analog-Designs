import React from "react";
import { motion } from "framer-motion";
import FloatingImages from "./FloatingImages";
import MainCard from "./MainCard";
import Swag from "../../../components/Swag";

export default function Hero(props) {
  const sectionVariance = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
      duration: 1.3,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={sectionVariance}
      transition={sectionVariance.transition}
      className="hero-section section-background"
      id="home"
    >
      <div>
        <MainCard />
        <FloatingImages />
      </div>
    </motion.section>
  );
}
