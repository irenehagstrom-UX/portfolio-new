import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  name?: string;
  headline?: string;
  description?: string;
  onExperienceClick?: () => void;
  onDisciplineClick?: () => void;
}

const Hero = ({
  name = "Irene Hagström",
  headline = "UX Strategist & Product Designer",
  description = "UX professional with a background in business analysis and process optimization, ensuring that design decisions not only enhance usability but also drive business efficiency.",
  onExperienceClick = () => console.log("Experience clicked"),
  onDisciplineClick = () => console.log("Discipline clicked"),
}: HeroProps) => {
  return (
    <section
      className="relative w-full min-h-[630px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/70 p-5 rounded-lg backdrop-blur-sm"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-3 text-[hsl(340,30%,80%)] font-satoshi drop-shadow-lg">
            {name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-[hsl(340,30%,80%)] mb-4 font-satoshi drop-shadow-md">
            {headline}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-6 drop-shadow-md">
            {description}
          </p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={onExperienceClick}
                  className="min-w-[220px] group bg-[#7bd1de] hover:bg-[#F4C56D] text-black border-none font-bold"
                >
                  Browse by Role
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={onDisciplineClick}
                  className="min-w-[220px] group bg-[#7bd1de] hover:bg-[#F4C56D] text-black border-none font-bold"
                >
                  Browse by Discipline
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default Hero;