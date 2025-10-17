import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  images?: string[];
}

// Image database with tags
const imageDatabase: Record<string, string[]> = {
  "/images/AIVEN_25APRIL_stage.jpg": ["facilitator", "presenter", "aiven"],
  "/images/PR-aivenCRDR.png": [
    "aiven",
    "ux",
    "ui",
    "user interface",
    "technical design",
  ],
  "/images/PR-aiven_workshop.jpg": [
    "facilitator",
    "project manager",
    "product manager",
    "aiven",
  ],
  "/images/PR_aiven_CRDR.png": [
    "aiven",
    "ux",
    "ui",
    "user interface",
    "technical design",
  ],
  "/images/PR_aiven_live.png": ["aiven", "ui", "user interface", "ux", "tech"],
  "/images/PR_aiven_overview.png": [
    "aiven",
    "ui",
    "user interface",
    "ux",
    "tech",
  ],
  "/images/PR_aiven_wireframes.png": ["aiven", "wireframes"],
  "/images/PD-Keks-portal.png": [
    "cornelsen",
    "edtech",
    "ui",
    "e-learning",
    "web",
  ],
  "/images/PD-Keks-results.png": [
    "cornelsen",
    "edtech",
    "e-learning",
    "ui",
    "ux",
  ],
  "/images/PD-Keks-student view.png": ["cornelsen", "edtech", "e-learning"],
  "/images/PD-edutech_thumb.png": ["cornelsen", "edtech", "ui", "e-learning"],
  "/images/PD-keks-func_specs_b.png": [
    "e-learning",
    "requirements",
    "functional spec",
    "cornelsen",
  ],
  "/images/PD-learncoachies-flow.png": [
    "cornelsen",
    "e-learning",
    "workflow",
    "process",
  ],
  "/images/PD-learncoachies-screen.png": [
    "cornelsen",
    "edtech",
    "ui",
    "e-learning",
  ],
  "/images/PD-learncoachies_book.png": [
    "cornelsen",
    "edtech",
    "ui",
    "e-learning",
  ],
  "/images/PD_learncoachies_func_specs.png": [
    "cornelsen",
    "edtech",
    "functional specs",
    "requirements",
    "e-learning",
  ],
  "/images/PR-Cornelsen_Func specs.png": ["e-learning", "cornelsen", "persona"],
  "/images/PR_keks_uml_diagram.png": [
    "service design",
    "e-learning",
    "workflow",
    "cornelsen",
  ],
  "/images/PD-stadnard-req.png": [
    "requirements",
    "functional spec",
    "standards australia",
  ],
  "/images/PD-stadnardhub.png": [
    "wireframes",
    "testing",
    "prototype",
    "standards australia",
  ],
  "/images/PD-stadnards-flow.png": [
    "business analyst",
    "workflow",
    "process",
    "standards australia",
  ],
  "/images/PD_standards_hub-project.jpg": ["standards australia", "ui"],
  "/images/PR-stadnard-leading.png": [
    "testing",
    "prototype",
    "standards australia",
  ],
  "/images/PR-standards.png": ["prototype", "testing", "standards australia"],
  "/images/PR-standards_process.png": [
    "business analyst",
    "workflow",
    "process",
    "standards australia",
  ],
  "/images/PR-pm-iso.png": [
    "project manager",
    "project management",
    "workshop",
    "standards australia",
  ],
  "/images/8cl_werbung2.jpg": [
    "freelancer",
    "brand",
    "logo",
    "marketing",
    "graphic",
  ],
  "/images/PD-brand_legalito.png": ["lkzwo", "web", "brand", "marketing"],
  "/images/PD-branding-8clflyer.jpg": [
    "freelancer",
    "logo",
    "brand",
    "marketing",
    "print",
  ],
  "/images/PD_brand_brochure.png": ["print"],
  "/images/PD_brand_logos.png": [
    "freelancer",
    "brand",
    "marketing",
    "graphic",
    "print",
  ],
  "/images/PR_brand_card.png": ["graphic", "marketing", "print"],
  "/images/PR_brand_lead_thumb.png": ["graphics", "icons", "print"],
  "/images/PR_brand_logo.png": ["lkzwo", "brand", "logo", "marketing", "print"],
  "/images/logos.png": ["freelancer", "brand", "logo", "marketing", "graphic"],
  "/images/lkzwo karten.jpg": ["lkzwo", "brand", "marketing", "graphic"],
  "/images/PR-honeyants-magazine.png": [
    "honeyants",
    "fashion",
    "clothes",
    "marketing",
  ],
  "/images/PR_honeyants_screenprinting.jpeg": [
    "honeyants",
    "fashion",
    "print design",
  ],
  "/images/PR_fashion_store.png": [
    "honeyants",
    "fashion",
    "clothes",
    "marketing",
  ],
  "/images/PR_fashion_thumb.png": [
    "honeyants",
    "fashion",
    "clothes",
    "marketing",
  ],
  "/images/PD_fashion_clothes.jpg": ["honeyants", "fashion", "clothes"],
  "/images/PD_fashion_e-com.png": [
    "honeyants",
    "fashion",
    "e-commerce",
    "marketing",
    "sales",
  ],
  "/images/PD_fashion_fabric.jpg": [
    "honeyants",
    "fashion",
    "clothes",
    "graphic",
  ],
  "/images/PD_fashion_pants.jpg": [
    "honeyants",
    "fashion",
    "marketing",
    "sales",
  ],
  "/images/PD_fashion_photos.png": [
    "honeyants",
    "fashion",
    "marketing",
    "sales",
  ],
  "/images/PD_fasion_rack.jpg": ["honeyants", "fashion", "clothes"],
  "/images/PD_honeyants_e-com.png": [
    "honeyants",
    "fashion",
    "marketing",
    "sales",
    "e-commerce",
  ],
  "/images/PD_honeyants_thumb.jpg": [
    "honeyants",
    "fashion",
    "clothes",
    "graphic",
    "print",
  ],
  "/images/PD_industrial_A.png": ["industrial", "thesis", "product design"],
  "/images/PD_industrial_reeko.jpg": ["industrial", "thesis", "product design"],
  "/images/PD_art_1.jpg": ["art", "drawing"],
  "/images/PD_art_2.jpg": ["art", "drawing"],
  "/images/PD_art_3.jpg": ["art", "drawing"],
  "/images/PD_art_4.jpg": ["art", "drawing"],
  "/images/PD_art_4B.jpg": ["art", "drawing"],
  "/images/PD_art_5.jpg": ["art", "drawing"],
  "/images/PD_art_6.jpg": ["art", "drawing"],
  "/images/PD_art_7.jpg": ["art", "drawing"],
  "/images/PD_ai_app.png": ["ai", "ui", "ux", "aiven"],
  "/images/PD_ai_thumb.png": ["ai"],
  "/images/PD_celtic-resources.png": ["ai", "ui", "ux", "aiven"],
  "/images/PD_celtic_edit.png": ["ui", "tech", "ux", "aiven", "ai"],
  "/images/PD_UX_journey.png": ["journey", "ux"],
  "/images/PD_UX_thumb.png": ["ui", "tech", "ux", "aiven"],
  "/images/PD_ux_journey_2.png": [
    "ui",
    "tech",
    "ux",
    "aiven",
    "service design",
    "journey",
  ],
  "/images/PR_ux_services.png": ["ux"],
  "/images/PD_worfklow.png": [
    "workflow",
    "business process analyst",
    "service design",
    "standards australia",
  ],
  "/images/PD_project management.jpg": [
    "project manager",
    "project management",
  ],
  "/images/PR_figma_prot.png": ["prototype", "ux"],
  "/images/PR_presenter_testing.png": ["presenter", "facilitator"],
  "/images/PD_presenter.jpg": ["presenter", "facilitator"],
  "/images/PD_presenter_2.jpg": ["presenter", "facilitator"],
  "/images/PR-PM_workshop.jpg": [
    "project manager",
    "project management",
    "facilitator",
    "workshop",
    "aiven",
  ],
  "/images/PR_pm_plan.png": [
    "project manager",
    "project management",
    "standards australia",
  ],
  "/images/web-2004-gekolia.gif": ["freelancer", "web", "marketing"],
  "/images/web-2004-s&f.gif": ["freelancer", "web", "marketing"],
  "/images/web-2006-ih.gif": ["freelancer", "web"],
  "/images/web-2015-Lead.gif": ["freelancer", "web", "marketing"],
  "/images/web-2015-legalito.gif": ["lkzwo", "web", "marketing", "brand"],
  "/images/PR_dooyoo_web.png": ["freelancer", "web"],
  "/images/dooyoo_online.jpg": ["dooyoo", "first job", "freelancer", "web"],
  "/images/PD-LKzwo-web.png": ["web", "lkzwo"],
  "/images/PD_frames.jpg": ["art", "photo"],
  "/images/PD_kapa.png": ["ai"],
  "/images/PD_crabline.png": ["ai", "ui", "ux", "aiven"],
  // Personal photos
  "/images/photos/irene_2.jpg": ["photography", "irene", "personal"],
  "/images/photos/photo_irene_ski.jpg": [
    "photography",
    "irene",
    "skiing",
    "personal",
  ],
  "/images/photos/photo_irene_skiing.jpg": [
    "photography",
    "skiing",
    "personal",
  ],
  "/images/photos/photo_photography_lake.JPG": [
    "photography",
    "travel",
    "nature",
    "lake",
  ],
  "/images/photos/photo_photography_munk.jpg": [
    "photography",
    "travel",
    "nature",
  ],
  "/images/photos/photo_photography_munks.jpg": [
    "photography",
    "travel",
    "nature",
  ],
  "/images/photos/photo_photography_travel.jpg": ["photography", "travel"],
  "/images/photos/photo_photogrphy_bw.jpg": ["photography", "black and white"],
  "/images/photos/photo_photogrphy_sunset.JPG": [
    "photography",
    "sunset",
    "nature",
  ],
  "/images/photos/photo_skiing.jpg": ["photography", "skiing", "sport"],
  "/images/photos/photo_travel_photgraphy_2.jpg": ["photography", "travel"],
  "/images/photos/photo_travel_photography.jpg": ["photography", "travel"],
  "/images/photos/photo_travel_photography_lake.jpg": [
    "photography",
    "travel",
    "lake",
    "nature",
  ],
  "/images/photos/photo_travel_photogrphy.jpg": ["photography", "travel"],
  "/images/photos/photo_travel_photogrphy_ankorwat.jpg": [
    "photography",
    "travel",
    "angkor wat",
    "cambodia",
  ],
};

// Career timeline data with dates for chronological queries
const careerTimeline = [
  {
    company: "Aiven",
    role: "Senior Product & UX Designer",
    start: "2021-10",
    end: "Present",
    location: "Berlin",
  },
  {
    company: "LKzwo GmbH",
    role: "Marketing and Brand Lead",
    start: "2015-08",
    end: "2020-01",
    location: "Berlin",
  },
  {
    company: "Cornelsen Verlag GmbH",
    role: "Demand Manager",
    start: "2012-04",
    end: "2013-07",
    location: "Berlin",
  },
  {
    company: "Standards Australia",
    role: "Senior Business Analyst",
    start: "2006-02",
    end: "2011-11",
    location: "Sydney",
  },
  {
    company: "Honeyants Pty Ltd",
    role: "Founder & Lead Designer",
    start: "2008-08",
    end: "2010-08",
    location: "Sydney",
  },
  {
    company: "Standards Australia",
    role: "Project Manager",
    start: "2004-02",
    end: "2006-02",
    location: "Sydney",
  },
  {
    company: "Triple-O Microscopy GmbH",
    role: "Graphic & Web Designer",
    start: "2001-06",
    end: "2002-06",
    location: "Germany",
  },
  {
    company: "dooyoo AG",
    role: "Graphic & Web Designer / Team Lead",
    start: "2000-07",
    end: "2001-03",
    location: "Germany",
  },
];

// Sort by start date to get chronological order
const sortedCareer = [...careerTimeline].sort((a, b) =>
  a.start.localeCompare(b.start),
);
const firstJob = sortedCareer[0];
const currentJob = sortedCareer[sortedCareer.length - 1];

// Function to find images by keywords
const findImagesByKeywords = (input: string): string[] => {
  const lowerInput = input.toLowerCase();
  const matchedImages: string[] = [];

  for (const [imagePath, tags] of Object.entries(imageDatabase)) {
    const hasMatch = tags.some((tag) => lowerInput.includes(tag.toLowerCase()));
    if (hasMatch) {
      matchedImages.push(imagePath);
    }
  }

  return matchedImages.slice(0, 6); // Limit to 6 images
};

const InteractiveChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Irene. I'm a UX Strategist & Product Designer with 20+ years of experience. Feel free to ask me about my work, design approach, specific projects, or how I can help your team. I'm here to share my story and expertise with you!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Expand on first user message
    if (!isExpanded) {
      setIsExpanded(true);
    }

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const response = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        images: response.images,
      };
      setMessages((prev) => [...prev, botMessage]);

      if (response.images && response.images.length > 0) {
        setSelectedImages(response.images);
      }
    }, 800);
  };

  const getBotResponse = (
    input: string,
  ): { text: string; images?: string[] } => {
    const lowerInput = input.toLowerCase();

    // UX Work / UX Design / Product Design / User Experience / UI Design / Interface Design / UI Related / UI Work
    if (
      lowerInput.includes("ux work") ||
      lowerInput.includes("ux design") ||
      lowerInput.includes("product design") ||
      lowerInput.includes("user experience") ||
      lowerInput.includes("ui design") ||
      lowerInput.includes("ui work") ||
      lowerInput.includes("ui related") ||
      lowerInput.includes("interface design") ||
      lowerInput.includes("interaction design") ||
      lowerInput.includes("describe a ux project") ||
      lowerInput.includes("tell me about your ux") ||
      lowerInput.includes("tell me about any ui") ||
      lowerInput.includes("how do you approach product design") ||
      lowerInput.includes("what design tools")
    ) {
      return {
        text: "I'm currently a Senior Product & UX Designer at Aiven (2021-Present, Berlin), where I design complex, data-intensive developer products from discovery to delivery. My work includes conducting user research, benchmarking, facilitating workshops, creating wireframes and high-fidelity designs in Figma, and running user testing sessions. I've also designed e-learning solutions at Cornelsen (2012-2013), workflow systems at Standards Australia (2006-2011), and sustainable fashion products at Honeyants (2008-2010). My approach is user-centered: I balance user needs with business objectives, translating complex requirements into intuitive digital experiences. I use tools like Figma, Miro, Adobe Suite, Jira, and PostHog, and I conduct both qualitative and quantitative research to validate design decisions.",
        images: findImagesByKeywords("aiven ux ui wireframe journey prototype"),
      };
    }

    // Project Manager / Project Management / PM Role / Managing Projects / Project Lead / Project Coordinator
    if (
      lowerInput.includes("project manager") ||
      lowerInput.includes("project management") ||
      lowerInput.includes("pm role") ||
      lowerInput.includes("managing projects") ||
      lowerInput.includes("project lead") ||
      lowerInput.includes("project coordinator") ||
      lowerInput.includes("tell me about working as a project manager") ||
      lowerInput.includes("how do you manage stakeholders") ||
      lowerInput.includes("project leadership") ||
      lowerInput.includes("complex project you managed")
    ) {
      return {
        text: "I worked as a Project Manager at Standards Australia (2004-2006, Sydney), where I coordinated national and international meetings and ISO plenary sessions, introduced improved business workflows, and facilitated standards committee collaborations for establishing international ISO standards in MPEG4, accessibility, user interfaces, and e-learning. Throughout my career, I've led workshops, facilitated stakeholder engagement, and coordinated multi-stakeholder initiatives with a 97% project success rate. I take ownership of projects and actively engage stakeholders through needs workshops, ideation sessions, and regular updates to ensure transparency and shared ownership. I promote transparency and shared ownership, helping identify pain points, needs, risks, and constraints for greater project success.",
        images: findImagesByKeywords("project manager workshop facilitator"),
      };
    }

    // Leadership / Team Management / Mentoring / Coaching / Guiding / Team Lead
    if (
      lowerInput.includes("leadership") ||
      lowerInput.includes("lead") ||
      lowerInput.includes("team lead") ||
      lowerInput.includes("team management") ||
      lowerInput.includes("mentoring") ||
      lowerInput.includes("coaching") ||
      lowerInput.includes("guiding") ||
      lowerInput.includes("how do you mentor") ||
      lowerInput.includes("leadership experience")
    ) {
      return {
        text: "I have extensive leadership experience across multiple roles. At Aiven (2021-Present), I mentor junior designers and lead design initiatives. At LKzwo (2015-2020), I led marketing and brand strategy. At dooyoo AG (2000-2001), I was Team Lead for graphic and web design. I believe in coaching-style leadership that empowers teams, fostering open communication and creating safe environments for experimentation. I organize work efficiently, value teamwork, and recognize successes. My leadership skills include mentoring, team development, coaching, workflow establishment, cross-functional collaboration, and stakeholder engagement. I've successfully led teams through complex projects with a 97% success rate.",
        images: findImagesByKeywords("facilitator presenter workshop"),
      };
    }

    // Skills / Expertise / Competencies / Abilities / Capabilities / What Can You Do
    if (
      lowerInput.includes("skill") ||
      lowerInput.includes("expertise") ||
      lowerInput.includes("competencies") ||
      lowerInput.includes("abilities") ||
      lowerInput.includes("capabilities") ||
      lowerInput.includes("what can you do") ||
      lowerInput.includes("tools") ||
      lowerInput.includes("technologies")
    ) {
      return {
        text: "My key skills include Product & UX Design (UX/UI design, information architecture, interaction design, content strategy, product design, sustainable design, fashion design), Leadership & Team Development (mentoring, coaching, team workflow setup), Business Analysis & Process Optimization (requirements gathering, process modeling, workflow automation), Research & Strategy (qualitative & quantitative UX research, market analysis, data-driven decision-making), and Project & Stakeholder Management (cross-functional collaboration, Agile methodologies like Scrum and Kanban, facilitation, roadmap planning). I'm proficient in tools like Figma, Miro, Adobe Suite, Jira, PostHog, HTML/CSS, and WordPress. I've successfully implemented 97% of the projects I've been involved in!",
        images: findImagesByKeywords(input),
      };
    }

    // Career Goals / Professional Aspirations / Job Objectives / Future Work / Next Steps
    if (
      lowerInput.includes("career goal") ||
      lowerInput.includes("professional aspiration") ||
      lowerInput.includes("job objective") ||
      lowerInput.includes("future work") ||
      lowerInput.includes("aspiration") ||
      lowerInput.includes("future") ||
      lowerInput.includes("next step") ||
      lowerInput.includes("director") ||
      lowerInput.includes("head of design") ||
      lowerInput.includes("innovation designer")
    ) {
      return {
        text: "I aim for leadership roles, ideally as an Innovation Designer or Head of Design, where I can lead small teams of designers and developers to create innovative products. I am fascinated by generative AI, product design, and tools that integrate software and physical products. I focus on delivering solutions that are both user-friendly and business-viable.",
      };
    }

    // Hobbies / Free Time / Leisure Activities / Pastimes / Spare Time / Outside Work
    if (
      lowerInput.includes("spare time") ||
      lowerInput.includes("free time") ||
      lowerInput.includes("hobbies") ||
      lowerInput.includes("hobby") ||
      lowerInput.includes("leisure") ||
      lowerInput.includes("pastimes") ||
      lowerInput.includes("outside work") ||
      lowerInput.includes("what do you do for fun")
    ) {
      return {
        text: "I enjoy socializing, going to the movies, drawing, painting, video editing, DIY projects, skiing, scuba diving, and yoga (I have practiced for over 20 years). I am currently exploring generative AI and building small apps and tools. I love beautiful things and my apartment is full of plants and art!",
        images: findImagesByKeywords("art drawing photography skiing"),
      };
    }

    // Personal Introduction / Biography / Background
    if (
      lowerInput.includes("who are you") ||
      lowerInput.includes("who is irene") ||
      lowerInput.includes("tell me about yourself") ||
      lowerInput.includes("about you") ||
      lowerInput.includes("biography") ||
      lowerInput.includes("background") ||
      lowerInput.includes("where are you from") ||
      lowerInput.includes("childhood")
    ) {
      return {
        text: "I am Irene, born in Sweden in 1976. I lived in Sweden, Chile, and the US during my childhood, and I currently live in Berlin, Germany. I am married and have three teenage boys. I speak fluent English, Swedish, and German, and I understand Spanish. I am very social, creative, and hands-on. I enjoy socializing, going to the movies, drawing, painting, video editing, DIY projects, skiing, scuba diving, and yoga (I have practiced for over 20 years). I am currently exploring generative AI and building small apps and tools.",
        images: findImagesByKeywords("presenter facilitator photography"),
      };
    }

    // Family
    if (
      lowerInput.includes("family") ||
      lowerInput.includes("children") ||
      lowerInput.includes("kids") ||
      lowerInput.includes("married") ||
      lowerInput.includes("husband") ||
      lowerInput.includes("boys") ||
      lowerInput.includes("sons")
    ) {
      return {
        text: "I am married and have three teenage boys. I enjoy planning and organizing events, helping others achieve their goals, and providing my children with a safe and happy childhood. Family time is one of my greatest joys outside of work.",
        images: findImagesByKeywords("photography personal"),
      };
    }

    // Personality / Character / Traits / Values
    if (
      lowerInput.includes("personality") ||
      lowerInput.includes("character") ||
      lowerInput.includes("traits") ||
      lowerInput.includes("values") ||
      lowerInput.includes("what are you like") ||
      lowerInput.includes("describe yourself")
    ) {
      return {
        text: "I am active, happy, strong, and friendly. My values include commitment, ownership, transparency, honesty, and friendliness. Friends and colleagues describe me as capable, intelligent, kind, and sociable. I enjoy planning and organizing events, helping others achieve their goals, and providing my children with a safe and happy childhood. I have a sense of humor, am slightly introverted, and choose when to speak or lead.",
      };
    }

    // Professional Philosophy / Design Philosophy
    if (
      lowerInput.includes("philosophy") ||
      lowerInput.includes("design approach") ||
      lowerInput.includes("believe about design") ||
      lowerInput.includes("user-centered") ||
      lowerInput.includes("professional philosophy")
    ) {
      return {
        text: "I am passionate about user-centered design, balancing user needs with business objectives. I translate complex requirements into intuitive digital experiences and encourage creativity and innovation. I mentor junior designers, foster collaboration, and aim to create safe environments for experimentation and learning. I thrive in open, friendly, and professional environments, and I believe in coaching-style leadership that empowers teams. I organize work efficiently and value teamwork and recognition of successes.",
        images: findImagesByKeywords("ux ui wireframe journey"),
      };
    }

    // Professional Experience / Work History / Jobs / Roles / Career Timeline
    if (
      lowerInput.includes("professional experience") ||
      lowerInput.includes("work history") ||
      lowerInput.includes("jobs") ||
      lowerInput.includes("roles") ||
      lowerInput.includes("experience") ||
      lowerInput.includes("career") ||
      lowerInput.includes("timeline") ||
      lowerInput.includes("history")
    ) {
      return {
        text: "I have 20+ years of experience across tech, education, fashion, and standards development. Key roles include: Senior Product & UX Designer at Aiven (2021-Present, Berlin) designing developer tools; Marketing and Brand Lead at LKzwo (2015-2020, Berlin) building brand identities; Demand Manager at Cornelsen (2012-2013, Berlin) developing e-learning solutions; Senior Business Analyst at Standards Australia (2006-2011, Sydney) leading digital transformation; Founder & Lead Designer at Honeyants (2008-2010, Sydney) creating sustainable fashion; Project Manager at Standards Australia (2004-2006, Sydney) coordinating ISO standards development; and Graphic & Web Designer / Team Lead at dooyoo AG (2000-2001, Germany). Each role expanded my skills in design, leadership, and product development.",
      };
    }

    // Education / Studies / Degrees / Certifications
    if (
      lowerInput.includes("education") ||
      lowerInput.includes("studies") ||
      lowerInput.includes("degree") ||
      lowerInput.includes("certification") ||
      lowerInput.includes("university") ||
      lowerInput.includes("bachelor") ||
      lowerInput.includes("master")
    ) {
      return {
        text: "I hold a Master of Interactive Multimedia from the University of Technology Sydney, Australia, and a Bachelor of Science in Product Development Engineering from the University of Skövde, Sweden. I'm also a Certified Professional for Requirements Engineering from Sophist GmbH, Berlin, and completed Mastering the Requirements Process from Software Education, Sydney. I also studied 3D CAD Modelling & Multimedia at Griffith University, Gold Coast, Australia.",
      };
    }

    // Languages
    if (
      lowerInput.includes("language") ||
      lowerInput.includes("speak") ||
      lowerInput.includes("swedish") ||
      lowerInput.includes("german") ||
      lowerInput.includes("spanish")
    ) {
      return {
        text: "I speak fluent English, Swedish, and German, and I understand Spanish. Living and working internationally has shaped me to be open-minded, adaptable, and respectful of different cultures.",
      };
    }

    // Current/Latest job - Aiven
    if (
      lowerInput.includes("current") ||
      lowerInput.includes("latest job") ||
      lowerInput.includes("most recent") ||
      lowerInput.includes("aiven")
    ) {
      return {
        text: `I'm currently a Senior Product & UX Designer at Aiven (2021-Present, Berlin). I design complex, data-intensive developer products, from discovery to delivery. My responsibilities include conducting research, benchmarking, facilitating workshops, creating wireframes and high-fidelity designs, running user testing, and mentoring junior designers. For certain projects I act as a product lead, ensuring alignment across product and engineering. For more than two years, I've been focusing on generative AI and am working on an internal AI app solution for Aiven's Support team.`,
        images: findImagesByKeywords("aiven"),
      };
    }

    // LKzwo / Marketing and Brand Lead / Branding Experience
    if (
      lowerInput.includes("lkzwo") ||
      lowerInput.includes("marketing") ||
      lowerInput.includes("brand lead") ||
      lowerInput.includes("branding experience") ||
      lowerInput.includes("marketing strategy")
    ) {
      return {
        text: "At LKzwo GmbH (2015-2020, Berlin), I was Marketing and Brand Lead. I developed marketing strategies, oversaw content, built brand identities, and designed and developed corporate websites. I conducted market analysis and optimized client operations. This role involved both strategic planning and hands-on design work, from logo creation to full website development.",
        images: findImagesByKeywords("lkzwo brand marketing web"),
      };
    }

    // Cornelsen / E-learning / EdTech / EdTech Experience
    if (
      lowerInput.includes("cornelsen") ||
      lowerInput.includes("e-learning") ||
      lowerInput.includes("edtech") ||
      lowerInput.includes("describe your experience with edtech") ||
      lowerInput.includes("e-learning solutions")
    ) {
      return {
        text: "At Cornelsen Verlag GmbH (2012-2013, Berlin), I was Demand Manager. I developed e-learning tools, including evaluation and training systems. I worked cross-department using both Agile and Waterfall approaches, from persona creation to user testing. I led requirement analysis and created functional specifications/user stories. The projects involved designing digital learning paths aligned with classroom curricula, creating interactive e-learning modules that complemented textbooks, and developing evaluation tools for teachers to assess student skills.",
        images: findImagesByKeywords("cornelsen edtech e-learning"),
      };
    }

    // Standards Australia / Business Analyst
    if (
      lowerInput.includes("standards australia") ||
      lowerInput.includes("business analyst") ||
      lowerInput.includes("standards")
    ) {
      return {
        text: "At Standards Australia (2006-2011, Sydney), I was Senior Business Analyst. I worked on the design of document workflow and knowledge management systems for internal teams and 8,000 external users. I ran stakeholder workshops, mapped and streamlined business processes, established requirements and functional specs, conducted on-site user testing, and led the external development team through a two-year development phase. This role taught me the importance of balancing stakeholder needs, technical constraints, and user experience at scale. Before that, I was Project Manager (2004-2006) coordinating ISO standards development.",
        images: findImagesByKeywords("standards australia workflow"),
      };
    }

    // Honeyants / Fashion / Entrepreneur / Entrepreneurial Experience
    if (
      lowerInput.includes("honeyants") ||
      lowerInput.includes("fashion") ||
      lowerInput.includes("entrepreneur") ||
      lowerInput.includes("entrepreneurial experience") ||
      lowerInput.includes("product design and sales")
    ) {
      return {
        text: "At Honeyants Pty Ltd (2008-2010, Sydney), I was Founder & Lead Designer. I co-founded a sustainable children's fashion label, designed garments, developed print graphics for screen printing, managed supply chains, created brand and marketing campaigns, and launched an e-commerce platform. Running my own business taught me invaluable lessons about end-to-end product development, customer relationships, and the importance of sustainable practices. I gained media coverage for sustainability efforts and unique designs.",
        images: findImagesByKeywords("honeyants fashion"),
      };
    }

    // Generative AI
    if (
      lowerInput.includes("generative ai") ||
      lowerInput.includes("ai") ||
      lowerInput.includes("artificial intelligence")
    ) {
      return {
        text: "I am currently exploring generative AI and building small apps and tools. For more than two years, I've been focusing on learning about generative AI and actively testing different tools. I'm working on an internal AI app solution for Aiven's Support team. I believe successful AI outcomes still rely on the fundamentals of product design—planning, scope, user insights, and functional specifications. While AI makes it possible to create quickly, it still requires proper context, guidance, and detailed requirements for successful outcomes. I'm learning about application development and deployment, system prompting, and UI design for AI tools.",
        images: findImagesByKeywords("ai"),
      };
    }

    // User Testing / Usability Testing / User Research
    if (
      lowerInput.includes("user testing") ||
      lowerInput.includes("usability testing") ||
      lowerInput.includes("testing") ||
      lowerInput.includes("user research")
    ) {
      return {
        text: "I have conducted user testing on multiple projects throughout my career. At Aiven, I conduct user research sessions, create journey maps, and test prototypes with both internal teams and external users to validate design decisions. My approach involves designing test scenarios, moderating sessions, gathering qualitative and quantitative feedback, and iterating on designs based on user insights. I use both qualitative and quantitative research methods to drive data-driven design decisions.",
        images: findImagesByKeywords("aiven ux wireframe prototype"),
      };
    }

    // Design Approach / Methodology / Process
    if (
      lowerInput.includes("approach") ||
      lowerInput.includes("methodology") ||
      lowerInput.includes("process") ||
      lowerInput.includes("how do you design")
    ) {
      return {
        text: "My approach is user-centered: I focus on understanding user needs through research and data, then translate these insights into intuitive interfaces and workflows. I start with discovery—conducting user interviews, analyzing data, and mapping user journeys. Then I move to ideation and prototyping, creating wireframes and interactive prototypes in Figma. I validate designs through user testing and iterate based on feedback. I'm proficient in both Agile (Scrum, Kanban) and Waterfall methodologies. I collaborate closely with customers, engineers, and product managers throughout the lifecycle.",
        images: findImagesByKeywords("ux journey wireframe workflow"),
      };
    }

    // Teamwork / Collaboration
    if (
      lowerInput.includes("teamwork") ||
      lowerInput.includes("collaboration") ||
      lowerInput.includes("team")
    ) {
      return {
        text: "I foster open communication and create safe environments where experimentation is welcomed and mistakes are seen as learning opportunities. I celebrate team successes through recognition and shared activities. Each team member should focus on tasks aligned with their strengths while sharing responsibilities to spread skills and knowledge. Collaboration is at the heart of everything I do. I work cross-functionally with engineers, product managers, and stakeholders to ensure alignment and successful outcomes.",
      };
    }

    // Communication & Mentoring & Feedback & Criticism
    if (
      lowerInput.includes("communication") ||
      lowerInput.includes("mentor") ||
      lowerInput.includes("feedback") ||
      lowerInput.includes("criticism") ||
      lowerInput.includes("critique") ||
      lowerInput.includes("deal with criticism") ||
      lowerInput.includes("handle criticism") ||
      lowerInput.includes("receive feedback") ||
      lowerInput.includes("constructive criticism") ||
      lowerInput.includes("teach")
    ) {
      return {
        text: "I communicate in a friendly, confident, and professional manner, adjusting style depending on context. I mentor junior designers by sharing my experience and fostering a safe environment for experimentation and learning from mistakes. I strive to give constructive feedback with examples and positive framing. At Aiven, mentoring and leading new junior designers is part of my role. I welcome feedback and criticism as opportunities for growth—I believe in creating environments where open, honest communication helps everyone improve.",
      };
    }

    // Industrial Design / Thesis
    if (
      lowerInput.includes("industrial") ||
      lowerInput.includes("recycling") ||
      lowerInput.includes("thesis") ||
      lowerInput.includes("product engineering")
    ) {
      return {
        text: "My 1999 thesis project involved creating sustainable recycling bins for public spaces. The wood production company's requirement was to design a sustainable and cost-efficient product. Inspired by nature and beehives, I designed hexagon-shaped bins that use the least amount of material but provide maximum stability. Its shape also allows for different setups and has a unique and beautiful style. 25 years later, similar designs can still be seen throughout public spaces in Sweden. This project taught me the value of sustainable design and thinking long-term about product lifecycle.",
        images: findImagesByKeywords("industrial"),
      };
    }

    // Art / Drawing / Painting
    if (
      lowerInput.includes("art") ||
      lowerInput.includes("drawing") ||
      lowerInput.includes("painting")
    ) {
      return {
        text: "Throughout my life, I've been drawing, painting, photographing, creating videos, and crafting. I enjoy drawing and painting in my free time—it's a wonderful creative outlet that complements my professional design work. I love beautiful things and my apartment is full of plants and art!",
        images: findImagesByKeywords("art drawing"),
      };
    }

    // Contact / LinkedIn
    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("linkedin") ||
      lowerInput.includes("email") ||
      lowerInput.includes("reach out")
    ) {
      return {
        text: "You can connect with me on LinkedIn at www.linkedin.com/in/irene-hagström or reach out via email at irene.hagstrom@gmail.com. I'm always happy to connect with fellow designers, potential collaborators, or anyone interested in UX and product design!",
      };
    }

    // Default response - try to find images anyway
    const matchedImages = findImagesByKeywords(input);
    if (matchedImages.length > 0) {
      return {
        text: "I found some relevant work samples related to your query. Feel free to ask me specific questions about my projects, design approach, leadership experience, skills, career goals, or how I can help your team. What would you like to know more about?",
        images: matchedImages,
      };
    }

    return {
      text: "I'm not sure I have specific information on that topic. You can ask me about my work experience, specific projects (Aiven, Cornelsen, Standards Australia, Honeyants), design methodology, leadership skills, project management experience, or how to connect with me. What would you like to know?",
    };
  };

  return (
    <motion.div
      className="flex gap-4 mx-auto"
      animate={{
        maxWidth: isExpanded ? "1536px" : "600px",
        height: isExpanded ? "600px" : "300px",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Chat Section */}
      <motion.div
        className="flex flex-col bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 overflow-hidden"
        animate={{
          width: isExpanded ? "55%" : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-[#F4C56D] text-gray-700"
                      : "bg-gray-100 text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 bg-white/50">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Ask me a question"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-white text-gray-700 placeholder:text-gray-500"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-[#7bd1de] hover:bg-[#6bc1ce]"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-[10px] text-gray-500 mt-2 italic">
            Disclaimer: This chatbot is limited to the content displayed on this
            website, and including other materials such as resumes, LinkedIN
            profile and some personal stories.
          </p>
        </div>
      </motion.div>

      {/* Image Display Section */}
      {isExpanded && selectedImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 p-4 overflow-y-auto"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Related Images
          </h3>
          <div className="space-y-3">
            {selectedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Related content ${index + 1}`}
                className="w-full rounded-lg border border-gray-200"
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InteractiveChatbot;
