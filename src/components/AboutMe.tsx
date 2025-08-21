import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Download,
  Mail,
  Linkedin,
  MapPin,
  Languages,
  BookOpen,
  Plane,
  Coffee,
  Camera,
  Palette,
  Users,
  Heart,
} from "lucide-react";

const AboutMe = () => {
  const designskills = [
    "UX strategy",
    "Product design",
    "User research",
    "Requirements engineering",
    "Information architecture",
    "Accessibility priciples",
    "Innovation & co-creation",
    "Graphic design & branding",
  ];

  const aiskills = [
    "AI creative tools",
    "Exploring AI agent design",
    "Learning about system prompting",
    "Creating personal AI apps",
  ];

  const managementskills = [
    "Stakeholder management",
    "Consensus building",
    "Storytelling",
    "Cross-collaboration",
    "Product management",
    "Leadership & mentoring",
    "Sucess metrics and data analytics",
  ];

  const countries = [
    { name: "Sweden", flag: "🇸🇪", role: "Born & Raised" },
    { name: "USA", flag: "🇺🇸", role: "Early Childhood" },
    { name: "Chile", flag: "🇨🇱", role: "Teenage Years" },
    { name: "Australia", flag: "🇦🇺", role: "University" },
    { name: "Germany", flag: "🇩🇪", role: "Work" },
  ];

  const languages = [
    { name: "Swedish", flag: "🇸🇪", level: "Native" },
    { name: "English", flag: "🇬🇧", level: "Fluent" },
    { name: "German", flag: "🇩🇪", level: "Fluent" },
    { name: "Spanish", flag: "🇪🇸", level: "Conversational" },
  ];

  const topBooks = [
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      category: "UX Design",
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      category: "Design Psychology",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Personal Development",
    },
    {
      title: "Continuous discovery habits",
      author: "Teresa Torres",
      category: "Product Design",
    },
  ];

  const travelHighlights = [
    "Exporing hardly touched Machu Picchu",
    "Skiing in the Swiss alps",
    "Cultural immersion in Southeast Asia",
    "Scuba diving in the Great Barrier Reef",
  ];

  const interests = [
    { icon: Camera, label: "Family time" },
    { icon: Palette, label: "Art & Photography" },
    { icon: Coffee, label: "Hosting dinners" },
    { icon: Users, label: "Travel" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/background_b.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* White Content Frame */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full overflow-y-auto max-h-[90vh]">
          {/* Magazine Layout */}
          <div className="container mx-auto px-6 py-[3] h-[2020]">
            {/* Magazine Header */}
            <div className="flex justify-between items-start mb-16">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <h1 className="text-8xl font-light text-gray-900 leading-none tracking-tight mb-2 font-satoshi">
                    IRENE
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-0.5 bg-red-500"></div>
                    <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
                      Design Quarterly
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 font-light">
                    Issue #01 • Winter 2025
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-right"
              >
                <div className="bg-white p-6">
                  <div className="space-y-4">
                    <button
                      className="flex items-center gap-3 w-full text-left text-sm text-gray-700 hover:text-gray-900"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/irene-hagström",
                        )
                      }
                    >
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Linkedin className="h-4 w-4 text-white" />
                      </div>
                      LinkedIn profile
                    </button>
                    <button
                      className="flex items-center gap-3 w-full text-left text-sm text-gray-700 hover:text-gray-900"
                      onClick={() =>
                        (window.location.href =
                          "mailto:irene.hagstrom@gmail.com")
                      }
                    >
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      Email me
                    </button>
                    <button
                      className="flex items-center gap-3 w-full text-left text-sm text-gray-700 hover:text-gray-900"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/cv-irene-hagstrom.pdf";
                        link.download = "Irene-Hagstrom-CV.pdf";
                        link.click();
                      }}
                    >
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Download className="h-4 w-4 text-white" />
                      </div>
                      Download CV
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Feature Article */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-[15]">
              {/* Large Feature Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Irene at work"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2">
                    <span className="text-xs font-medium text-gray-900 uppercase tracking-widest">
                      Feature Story
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h2 className="text-5xl font-light text-white mb-4 leading-tight font-satoshi">
                      UX Strategist &
                      <br />
                      <span className="font-bold text-6xl">
                        Product Designer
                      </span>
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Article Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1 flex flex-col justify-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                      Interview
                    </span>
                  </div>

                  <div className="text-sm leading-relaxed text-gray-700 space-y-4">
                    <p className="font-medium text-lg text-gray-900 mb-4">
                      From the coastline of Sweden to the desert of Chile, Irene
                      Hagström's journey spans continents and cultures.
                    </p>
                    <p>
                      With over 20 years of experience crafting digital
                      experiences that solve real problems, Irene brings a
                      unique perspective shaped by her multicultural background.
                    </p>
                    <p className="italic border-l-2 border-gray-300 pl-4">
                      "Design isn't just about making things look beautiful.
                      It's about understanding people, their struggles, and
                      creating solutions that genuinely improve their lives."
                    </p>
                    <p>
                      Her approach combines research with creative
                      problem-solving, stakeholder collaboration and always
                      keeping the human element at the center of every decision.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Magazine Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {/* Skills Section - 2/3 width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-white text-black p-8 h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-black">06</span>
                    <div className="w-8 h-0.5 bg-black"></div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-black font-satoshi">
                    EXPERTISE
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-700 font-satoshi">
                        Design Skills
                      </h4>
                      <div className="space-y-3">
                        {designskills.map((designskill, index) => (
                          <div
                            key={index}
                            className="text-sm border-b border-gray-300 pb-1 text-black"
                          >
                            {designskill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-700 font-satoshi">
                        AI Skills
                      </h4>
                      <div className="space-y-3">
                        {aiskills.map((aiskill, index) => (
                          <div
                            key={index}
                            className="text-sm border-b border-gray-300 pb-1 text-black"
                          >
                            {aiskill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-4 uppercase tracking-widest text-gray-700 font-satoshi">
                        Management Skills
                      </h4>
                      <div className="space-y-3">
                        {managementskills.map((managementskill, index) => (
                          <div
                            key={index}
                            className="text-sm border-b border-gray-300 pb-1 text-black"
                          >
                            {managementskill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Life Recap Section - 1/3 width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="bg-gray-100 p-6 h-full">
                  <div className="text-2xl font-bold text-gray-900 mb-6 font-satoshi">
                    Life recap
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-20 text-sm text-gray-600">Born</div>
                      <div className="flex gap-1">
                        <span className="text-lg" title="Sweden">
                          🇸🇪
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm text-gray-600">Raised</div>
                      <div className="flex gap-1">
                        <span className="text-lg" title="Sweden">
                          🇸🇪
                        </span>
                        <span className="text-lg" title="USA">
                          🇺🇸
                        </span>
                        <span className="text-lg" title="Chile">
                          🇨🇱
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm text-gray-600">Studied</div>
                      <div className="flex gap-1">
                        <span className="text-lg" title="Sweden">
                          🇸🇪
                        </span>
                        <span className="text-lg" title="Australia">
                          🇦🇺
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm text-gray-600">Worked</div>
                      <div className="flex gap-1">
                        <span className="text-lg" title="Sweden">
                          🇸🇪
                        </span>
                        <span className="text-lg" title="Turkey">
                          🇹🇷
                        </span>
                        <span className="text-lg" title="Switzerland">
                          🇨🇭
                        </span>
                        <span className="text-lg" title="Germany">
                          🇩🇪
                        </span>
                        <span className="text-lg" title="Australia">
                          🇦🇺
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm text-gray-600">
                        Languages
                      </div>
                      <div className="flex gap-1">
                        <span className="text-lg" title="Swedish">
                          🇸🇪
                        </span>
                        <span className="text-lg" title="English">
                          🇬🇧
                        </span>
                        <span className="text-lg" title="German">
                          🇩🇪
                        </span>
                        <span className="text-lg" title="Spanish">
                          🇪🇸
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm text-gray-600">Family</div>
                      <div className="text-sm text-gray-900">
                        Married & 3 boys
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-900/20">
                    <p className="text-s text-gray-800 italic">
                      "Living in different countries and cultures has shaped how
                      I see people and the world. It shaped me to become someone
                      who connects easily, adapts quickly and listens well."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Secondary Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
              {/* Book List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="border-[#ffffff] border-[0]"
              >
                <div className="border-2 border-gray-900 p-6 h-full bg-[#eaeaea]">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-bold text-gray-800">14</span>
                    <div className="w-6 h-0.5 bg-gray-700"></div>
                  </div>
                  <h3 className="text-xl font-light mb-6 text-gray-800 font-satoshi">
                    TOP READS
                  </h3>
                  <div className="space-y-4">
                    {topBooks.map((book, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-3"
                      >
                        <h4 className="font-medium text-sm text-gray-800 mb-1 font-satoshi">
                          {book.title}
                        </h4>
                        <p className="text-xs text-gray-700">{book.author}</p>
                        <span className="text-xs text-gray-600 uppercase tracking-wide">
                          {book.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Travel Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative h-full cursor-pointer transition-transform"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                        alt="Travel"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-white">
                            08
                          </span>
                          <div className="w-6 h-0.5 bg-white"></div>
                        </div>
                        <h3 className="text-xl font-light text-white mb-4 font-satoshi">
                          ADVENTURES
                        </h3>
                        <div className="space-y-2">
                          {travelHighlights.map((highlight, index) => (
                            <p key={index} className="text-xs text-white/90">
                              {highlight}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold mb-4">
                        Travel adventures
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-4 gap-4">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className="aspect-square">
                          <img
                            src={`https://images.unsplash.com/photo-${1506905925346 + i}?w=300&q=80`}
                            alt={`Travel ${i + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80&sig=${i}`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* Life Beyond Work */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex"
              >
                <div
                  className="p-6 h-full"
                  style={{ backgroundColor: "#F4C56D" }}
                >
                  <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-none font-satoshi">
                    Life beyond work
                  </h3>
                  <div className="space-y-3">
                    {interests.map((interest, index) => {
                      const IconComponent = interest.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <IconComponent className="h-4 w-4 text-gray-900" />
                          <span className="text-sm font-medium text-gray-900">
                            {interest.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-900/20">
                    <p className="text-s text-gray-800 italic">
                      "Creativity flows through everything I do – from design
                      work to weekend projects."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Magazine Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex border-t border-gray-900 justify-between items-center h-[130] mt-8 pt-5 pb-5 py-3 py-5 mb-0"
            >
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                Design Quarterly • Issue #01 • Winter 2025
              </div>
              <div className="text-xs text-gray-500">
                Published by Irene Hagström
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
