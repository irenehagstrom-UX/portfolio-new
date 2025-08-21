import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  projectLinks?: { title: string; url: string }[];
}

interface ChatbotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Chatbot = ({ isOpen = false, onClose = () => {} }: ChatbotProps) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleAvatarClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const response = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        projectLinks: response.projectLinks,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const getBotResponse = (
    input: string,
  ): { text: string; projectLinks?: { title: string; url: string }[] } => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("skill") || lowerInput.includes("expertise")) {
      return {
        text: "Irene specializes in UX Strategy, Product Design, User Research, Information Architecture, Prototyping, and Design Systems. She has expertise in both B2B and B2C product design with a focus on accessibility and user-centered design.",
        projectLinks: [
          { title: "UX Strategy Case Study", url: "#ux-strategy" },
          { title: "Design System Project", url: "#design-system" },
        ],
      };
    } else if (
      lowerInput.includes("experience") ||
      lowerInput.includes("work")
    ) {
      return {
        text: "Irene has 8+ years of experience in product design, having worked at both startups and enterprise companies. She's led design teams, collaborated with cross-functional stakeholders, and shipped products used by millions of users.",
        projectLinks: [
          {
            title: "Enterprise Dashboard Project",
            url: "#enterprise-dashboard",
          },
          { title: "Startup Product Launch", url: "#startup-launch" },
        ],
      };
    } else if (
      lowerInput.includes("person") ||
      lowerInput.includes("colleague") ||
      lowerInput.includes("personality")
    ) {
      return {
        text: "Irene is known for being collaborative, empathetic, and detail-oriented. She's a great communicator who bridges the gap between technical and business teams. Colleagues describe her as someone who brings calm energy to challenging projects and always advocates for the user.",
      };
    } else if (
      lowerInput.includes("design") ||
      lowerInput.includes("process")
    ) {
      return {
        text: "Irene follows a human-centered design process: Research → Define → Ideate → Prototype → Test → Iterate. She believes in involving users throughout the design process and making data-driven decisions.",
        projectLinks: [
          { title: "User Research Case Study", url: "#user-research" },
          { title: "Design Process Documentation", url: "#design-process" },
        ],
      };
    } else if (
      lowerInput.includes("tools") ||
      lowerInput.includes("software")
    ) {
      return {
        text: "Irene is proficient in Figma, Sketch, Adobe Creative Suite, Principle, Framer, Miro, and various prototyping tools. She also has experience with HTML/CSS and collaborates closely with developers.",
      };
    } else {
      return {
        text: "I'm Irene's avatar! Feel free to ask me about her skills, work experience, design process, or what she's like as a person and colleague. I'm here to help you get to know her better!",
      };
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 bg-background">
      <div className="text-center w-[300]">
        {/* Avatar with Speech Bubble */}
        <div className="relative inline-block mb-8">
          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAvatarClick}
            className="cursor-pointer w-24 h-24 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
          >
            <img
              src="/irene-avatar.png"
              alt="Irene's Avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<div class="text-2xl font-bold text-primary">I</div>';
                }
              }}
            />
          </motion.div>

          {/* Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-8 -right-4 bg-white shadow-lg px-4 py-3 w-64 h-64"
            style={{
              borderRadius: "12px 12px 12px 0px",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
            }}
          >
            <p className="text-sm text-gray-700">
              Hi, you can also just ask me, Irene's avatar, something about
              Irene skillset, her work experience or how she is as a person and
              work colleague
            </p>
          </motion.div>
        </div>

        {/* Input Field */}
        <AnimatePresence>
          {isInputVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <form
                onSubmit={handleSubmit}
                className="flex gap-2 max-w-md mx-auto"
              >
                <Input
                  placeholder="Ask me about Irene..."
                  value={inputValue}
                  onChange={handleInputChange}
                  className="flex-1"
                  autoFocus
                />
                <Button type="submit" size="icon">
                  <Send size={18} />
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Messages */}
        <AnimatePresence>
          {messages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4 max-w-2xl mx-auto text-left"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted border"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {message.projectLinks &&
                      message.projectLinks.length > 0 && (
                        <div className="mt-3 space-y-1">
                          <p className="text-xs font-medium text-muted-foreground">
                            Related Projects:
                          </p>
                          {message.projectLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              className="block text-xs text-primary hover:underline"
                            >
                              → {link.title}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chatbot;
