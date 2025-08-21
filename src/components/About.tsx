import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Download, Phone, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface AboutProps {
  onBackClick?: () => void;
}

const About = ({ onBackClick }: AboutProps) => {
  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/irene-hagstrom", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:irene@example.com";
  };

  const handleDownloadCV = () => {
    // Create a dummy PDF download link
    const link = document.createElement("a");
    link.href = "/cv-irene-hagstrom.pdf";
    link.download = "Irene-Hagstrom-CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black/70 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      {onBackClick && (
        <div className="container mx-auto px-4 mb-6">
          <Button
            onClick={onBackClick}
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80"
                alt="Irene Hagström"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-80 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Contact
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={handleLinkedInClick}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[#0077B5]" />
                    <span className="text-gray-700">LINKEDIN PROFILE</span>
                  </button>

                  <button
                    onClick={handleEmailClick}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#EA4335]" />
                    <span className="text-gray-700">EMAIL ME</span>
                  </button>

                  <div className="flex items-center gap-3 p-3 text-gray-500">
                    <Phone className="h-5 w-5" />
                    <span>0176509076</span>
                  </div>

                  <button
                    onClick={handleDownloadCV}
                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Download className="h-5 w-5 text-[#34A853]" />
                    <span className="text-gray-700">DOWNLOAD CV AS PDF</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Who am I at work */}
          <Card className="backdrop-blur-sm bg-[rgb(255 255 255 / 0.95)] bg-[#f8d8de]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Who am I at work?
              </h3>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Highly motivated, analytical, and creative UX Strategist &
                  Product Designer with extensive experience in product design,
                  user experience design, requirements gathering, and product
                  management. Skilled in translating complex technical solutions
                  into intuitive, user-centered services that drive business
                  value.
                </p>
                <p>
                  With a background in Industrial Design Engineering and
                  Human-Computer Interaction, I bridge the gap between technical
                  feasibility and user needs, ensuring that digital solutions
                  are both functional and engaging.
                </p>
                <p>
                  My expertise includes UX research, design thinking, process
                  optimization, and cross-functional collaboration to deliver
                  seamless experiences.
                </p>
                <p>
                  Experienced in leading teams and managing projects, I
                  facilitate effective workshops and stakeholder discussions,
                  ensuring alignment between business goals, user needs, and
                  technical constraints. Strong ability to critically analyze
                  product solutions, workflows, and data flows to enhance
                  efficiency and usability.
                </p>
                <p>
                  Proven ability to collaborate across cultures and industries,
                  ensuring clear communication between clients, product teams,
                  and developers. Passionate about scaling UX practices,
                  improving design processes, and driving innovation through
                  strategic design leadership.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Life beyond work */}
          <Card className="backdrop-blur-sm bg-[#edd0d0]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Life beyond work
              </h3>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <div>
                  <h4 className="font-medium mb-2">
                    Where I'm From (And Where I've Been)
                  </h4>
                  <p>
                    I was born in Sweden to a Swedish-Swiss family. At age four,
                    we moved to Tucson, Arizona for two years, and later in my
                    early teens to La Serena, Chile. Not only did I learn
                    English and Spanish early on, it sparked appreciation for
                    other cultures. Living in Chile also opened my eyes to how
                    unfair and poor life can be, something that's stayed with
                    me.
                  </p>
                </div>

                <p>
                  After returning to Sweden, I chose a technical path in high
                  school and found myself as the only girl in a class of 30
                  boys. It had its challenges but also teachable experience. A
                  short job at McDonald's showed me that repetitive work isn't
                  for me, so I pursued product design engineering instead.
                  Later, I spent a semester in Surfers Paradise, Australia,
                  studying multimedia – and met my future husband there.
                </p>

                <div>
                  <h4 className="font-medium mb-2">
                    A Bit of the Bigger Picture
                  </h4>
                  <p>
                    Growing up across different countries, switching languages,
                    and learning to adapt again and again has shaped how I see
                    both tech and the world. I speak Swedish, English, and
                    German fluently, and understand Spanish well enough to get
                    by. All these experiences, the good, the uncomfortable, the
                    exciting, have helped me become someone who connects easily,
                    adapts quickly, and listens well.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    What I'm Into (When I'm Not Working)
                  </h4>
                  <p>
                    Since 2012, my husband and I have been raising our three
                    teenage sons, a full-time adventure in itself.
                  </p>
                  <p>
                    I enjoy hosting dinners, skiing, scuba diving, and
                    traveling. I'm a creative at heart: drawing, photography,
                    sculpture, and even some DIY hairdressing. I love
                    reimagining interiors and fixing things around the house – a
                    mix of hands-on and visual problem-solving that keeps me
                    energised.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Design Skills */}
          <Card className="backdrop-blur-sm bg-white/95">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Product Design Skills
              </h3>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <div>
                  <h4 className="font-medium mb-2">
                    Research and Usability Studies
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Prototyping & Wireframing & Journey Mapping
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Design Thinking Workshops
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">UX Design</h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Visual Design & UI Design
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Print Design and Brand Identity
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Fashion Design</h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Accessibility and inclusive design principles
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Information architecture and navigation strategy
                  </h4>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Management & Leadership Skills */}
          <Card className="backdrop-blur-sm bg-[#fffbcf]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Product Management & Leadership Skills
              </h3>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <div>
                  <h4 className="font-medium mb-2">
                    Traditional and Agile Methodology
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Strong storytelling and presentation skills, co-creation
                    sessions
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Stakeholder management & consensus building
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Alignment of user needs with business objectives and
                    technical feasibility
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Success metrics & data analytics
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Onboarding and mentoring Designers
                  </h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
