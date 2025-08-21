import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  opacity: number;
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

  const createParticle = useCallback(
    (x: number, y: number, id: number) => ({
      id,
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.8 + 0.4,
      size: Math.random() * 6 + 3,
      opacity: Math.random() * 0.8 + 0.3,
    }),
    [],
  );

  const emitParticles = useCallback(
    (x: number, y: number) => {
      const newParticles = Array.from({ length: 3 }, (_, i) =>
        createParticle(x, y, Date.now() + i),
      );
      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((np) => np.id === p.id)),
        );
      }, 1500);
    },
    [createParticle],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.random() > 0.8) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      emitParticles(x, y);
    }
  };

  return (
    <section
      className="relative w-full min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black/70 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-white drop-shadow-lg">
            {name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 drop-shadow-lg">
            {headline}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
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
                  className="min-w-[220px] group bg-[#7bd1de] hover:bg-[#F4C56D] text-black border-none"
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
                  className="min-w-[220px] group bg-[#7bd1de] hover:bg-[#F4C56D] text-black border-none"
                >
                  Browse by Discipline
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            {/* Circle Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <button
                onClick={() => console.log("Circle button clicked")}
                className="w-16 h-16 rounded-full bg-[#F4C56D] hover:bg-[#7bd1de] transition-colors duration-300 shadow-lg flex items-center justify-center group"
              >
                <ArrowRight className="h-6 w-6 text-black transition-transform group-hover:rotate-45" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Sparkling Stars Effect */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none"
            initial={{
              x: particle.x - particle.size / 2,
              y: particle.y - particle.size / 2,
              scale: 0,
              opacity: particle.opacity,
              rotate: 0,
            }}
            animate={{
              x:
                particle.x +
                Math.cos(particle.angle) * 80 * particle.speed -
                particle.size / 2,
              y:
                particle.y +
                Math.sin(particle.angle) * 80 * particle.speed -
                particle.size / 2,
              scale: [0, 1.2, 0.8, 1.5, 0],
              opacity: [particle.opacity, 1, 0.9, 1, 0],
              rotate: 360,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              scale: {
                times: [0, 0.3, 0.6, 0.8, 1],
                duration: 1.5,
              },
              opacity: {
                times: [0, 0.3, 0.6, 0.8, 1],
                duration: 1.5,
              },
            }}
            style={{
              width: particle.size,
              height: particle.size,
            }}
          >
            <div
              className="w-full h-full relative"
              style={{
                background: `radial-gradient(circle, #ffffff 30%, #7bd1de 60%, transparent 80%)`,
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                filter: "drop-shadow(0 0 4px rgba(123, 209, 222, 0.8))",
              }}
            />
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
