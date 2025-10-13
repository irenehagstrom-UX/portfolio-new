import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: {
    petal: string;
    center: string;
  };
}

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
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create new particles
    const newParticles: Particle[] = [];
    const colors = [
      { petal: "rgba(255, 160, 180, 0.8)", center: "rgba(255, 255, 180, 0.9)" }, // Pink
      { petal: "rgba(255, 255, 150, 0.8)", center: "rgba(255, 200, 100, 0.9)" }, // Yellow
      { petal: "rgba(150, 180, 255, 0.8)", center: "rgba(255, 255, 180, 0.9)" }, // Blue
    ];

    for (let i = 0; i < 3; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      newParticles.push({
        id: Date.now() + Math.random(),
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: Math.random() * 16 + 24, // Double size: 24-40px
        opacity: Math.random() * 0.8 + 0.2,
        color: randomColor,
      });
    }

    setParticles((prev) => {
      const filtered = prev.filter((p) => Date.now() - p.id < 4000); // 4 seconds cleanup
      return [...filtered, ...newParticles].slice(-30); // Max 30 stars
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-[750px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-[hsl(340,30%,80%)] font-satoshi drop-shadow-lg">
            {name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-[hsl(340,30%,80%)] mb-6 font-satoshi drop-shadow-md">
            {headline}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 drop-shadow-md">
            {description}
          </p>

          <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Particle System */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ opacity: particle.opacity, scale: 0 }}
            animate={{
              opacity: 0,
              scale: 1,
              y: particle.y - 50,
              x: particle.x + (Math.random() - 0.5) * 30,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeOut" }} // 4 seconds duration - slower animation
          >
            {/* Flower Shape - matching background flowers */}
            <svg
              width={particle.size}
              height={particle.size}
              viewBox="0 0 100 100"
              className="animate-pulse"
              style={{ transform: `rotate(${Math.random() * 360}deg)` }}
            >
              {/* Draw 6 petals */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <ellipse
                  key={i}
                  cx="50"
                  cy="20"
                  rx="15"
                  ry="30"
                  fill={particle.color.petal}
                  transform={`rotate(${i * 60} 50 50)`}
                />
              ))}
              {/* Center of flower */}
              <circle
                cx="50"
                cy="50"
                r="10"
                fill={particle.color.center}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

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