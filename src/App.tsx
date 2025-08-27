import { Suspense } from "react";
import { useRoutes, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import PortfolioGrid from "./components/PortfolioGrid";
import routes from "tempo-routes";

function App() {
  const navigate = useNavigate();

  // Sample data for portfolio items
  const experienceProjects = [
    {
      id: "1",
      title: "Senior Product & UX Designer",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      additionalImages: [
        "/images/PR_aiven_wireframes.png",
        "/images/PR_aiven_app2.png",
        "/images/PR-aiven_workshop.png",
        "/images/PR_aiven_overview.png",
      ],
      tags: [
        "Product design",
        "UX/UI design",
        "Developer tools",
        "Product management",
        "Leadership and mentoring",
      ],
      description:
        "UX and Product Design for developer tools. Transforming complex technical workflows into intuitive, user-friendly interfaces through research-driven design and close cross-functional collaboration.",
      experience:
        "At Aiven I design complex, data-intensive developer products. My role spans from discovery to delivery, including research, benchmarking, workshops, wireframes to high-fidelity designs, and testing. For certain projects I act as a product lead, ensuring alignment across product and engineering. Mentoring and leading new junior designers is also part of my role.",
      year: "2021-now, Berlin, Aiven",
    },
    {
      id: "2",
      title: "Marketing and Brand Lead",
      image: "/images/PD_branding_thumb.png",
      additionalImages: [
        "/images/PR_brand_card.png",
        "/images/PR_brand_logo.png",
        "/images/PD-LKzwo-web.png",
        "/images/PD-brand_legalito.png",
      ],
      tags: [
        "Branding",
        "Web Design",
        "Digital Marketing",
        "Organizational Effectiveness",
      ],
      description:
        "Brand and marketing leadership. Developing comprehensive strategies, building brand identities, and creating digital experiences that drive business growth and market presence.",
      experience:
        "At LKzwo GmbH, I developed marketing strategies, oversaw content, built brand identities, and designed and developed corporate websites.",
      year: "2015-2020, Berlin, LKzwo",
    },
    {
      id: "3",
      title: "Demand Manager",
      image: "/images/PR_keks_uml_diagram.png",
      additionalImages: [
        "/images/PD-keks-func_specs_b.png",
        "/images/PR-Cornelsen_Func specs.png",
        "/images/PR_keks_uml_diagram.png",
      ],
      tags: ["Service Design", "Cross-department", "Education Tech", "Kanban"],
      description:
        "Service design and product ownership in education technology. Working cross-functionaly to develop innovative e-learning solutions through user-centered design and agile methodologies.",
      experience:
        "At Cornelsen Verlag, I developed e-learning tools, including evaluation and training systems. Worked cross-department using both Agile and Waterfall approaches. From persona creation to user testing. I led requirement analysis and created functional specifications/user stories.",
      year: "2012-2013, Berlin, Cornelsen",
    },
    {
      id: "4",
      title: "Senior Business Analyst",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      ],
      tags: [
        "Business analysis",
        "Business process mapping",
        "Stakeholder management",
        "Team leadership",
        "Service design",
      ],
      description:
        "Senior business analysis and system design. Leading large-scale digital transformation projects, stakeholder management, and process optimization for complex organizational workflows.",
      experience:
        "At Standards Australia, I led the design of document workflows and knowledge management systems for internal teams and 8,000 external users. I ran stakeholder workshops, mapped and streamlined business processes, established requirements and functional specs, conducted on-site user testing and led the external development team through a two year-long development phase.",
      year: "2006-2008, Sydney, Standards Australia",
    },
    {
      id: "5",
      title: "Founder & Lead Designer",
      image: "/images/PR_fashion_thumb.png",
      additionalImages: [
        "/images/PR_honeyants_screenprinting.jpeg",
        "/images/PD_honeyants_e-com.png",
        "/images/PR-honeyants-magazine.png",
        "/images/PD_fashion_fabric.jpg",
      ],
      tags: [
        "Sustainable Fashion",
        "Entrepreneurship",
        "Product Design",
        "E-Commerce",
      ],
      description:
        "Entrepreneurship and sustainable fashion design. Co—founder and Designer of unique childrens clothes. From concept to market, combining creative design with ethical business practices and e-commerce innovation.",
      experience:
        "Founded Honeyants Pty Ltd, a sustainable children's fashion label. Designed garments, developed print graphics for screen printing, managed supply chains, created brand and marketing campaigns, and launched an e-commerce platform.",
      year: "2008-2010, Sydney Australia",
    },
    {
      id: "6",
      title: "Screen Designer & Team Lead",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      ],
      tags: ["UI/UX Design", "Team Leadership", "E-Commerce", "Animation"],
      description:
        "UI/UX design leadership and team management. Driving visual redesign of international e-commerce platforms with focus on user experience optimization and cross-functional collaboration.",
      experience:
        "At Dooyoo AG, an international e-commerce platform I led the visual redesign of the platform, oversaw graphic development and animations and conducted on-site user testing.",
      year: "2000-2001, Berlin, Dooyoo",
    },
    {
      id: "7",
      title: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      imageStyle: "h-48",
      additionalImages: ["/images/PR_iso_meeting.jpg", "/images/PR-pm-iso.png"],
      tags: [
        "Project Management",
        "Event Planning",
        "Stakeholder Communication",
        "Standards Development",
      ],
      description:
        "Project management and stakeholder coordination. Orchestrating multi-stakeholder initiatives, process improvement, and international collaboration in standards development.",
      experience:
        "At Standards Australia, I coordinated national and international meetings and ISO plenary sessions, introduced new improved business workflows, and facilitated standards committee collaborations for the establishment of internaional ISO standards, in the field of MPEG4, accessibility, user interfaces and e-learning.",
      year: "2004-2006, Sydney, Standards Australia",
    },
    {
      id: "8",
      title: "Product Manager and Facilitator",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      additionalImages: [
        "/images/PD_presenter_2.jpg",
        "/images/PR-PM_workshop.jpg",
      ],
      tags: [
        "Facilitator",
        "Workshop led",
        "Stakeholder engager",
        "Presenter",
        "Product Manager",
      ],
      description:
        "Strategic communication and stakeholder engagement. Driving project success through transparent collaboration, workshop facilitation, and storytelling that aligns teams and delivers results.",
      experience:
        "I take ownership of my projects and actively engage stakeholders to ensure key goals and requirements aren't missed. Through needs and goals workshops, ideation workshops and regular updates, sharing progress, prototypes, and test results. I promote transparency and shared ownership, helping identify pain points, needs, risks, and constraints for greater project success.",
      year: "always",
      outcomes:
        "97% of projects I have been involved in have been successfully implemented.",
    },
  ];

  const disciplineProjects = [
    {
      id: "1",
      title: "UX & Product Design in Tech",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      additionalImages: [
        "/images/PD_ai_app.png",
        "/images/PR_aiven_wireframes.png",
        "/images/PR_aiven_overview.png",
        "/images/PR-aivenCRDR.png",
      ],
      tags: [
        "UX design",
        "Product design",
        "Developer tools",
        "Cloud computing",
      ],
      description:
        "UX and Product Design for developer tools—transforming complex technical workflows into intuitive, user-friendly interfaces through research-driven design and close cross-functional collaboration.",
      modalContent: {
        overview:
          "This project showcases my approach to UX and Product Design through work on developer tooling platforms. The projects involved complex user journeys, technical data flows, and the challenge of delivering intuitive designs to technical audiences.",
        process:
          "I led discovery, journey mapping, and benchmarking, utilising both qualitative and quantitative UX research, designed wireframes, prototypes, and high-fidelity designs, and coordinated user testing. Collaborated closely with customers, engineers and product managers throughout the lifecycle.",
        outcomes:
          "Successfully delivered and implemented user-friendly interfaces to complex technical features, reducing user onboarding time and increasing stakeholder alignment.",
        year: "2023-2025, Berlin, Aiven",
      },
    },
    {
      id: "2",
      title: "Branding & Visual Design",
      image:
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
      additionalImages: [
        "/images/PD_branding_thumb.jpg",
        "/images/PD_honeyants_e-com.png",
        "/images/PD_fashion_e-com.png",
        "/images/PR_fashion_store.png",
      ],
      tags: [
        "Branding",
        "Graphic Design",
        "Logo Design",
        "Web design",
        "Freelance",
      ],
      description:
        "Extensive experience in graphic design and branding across diverse industries, delivering visual identities and marketing assets that enhance brand presence and credibility.",
      modalContent: {
        overview:
          "Both freelance work and as an employed Graphic Designer. Over the years I've been involved in developing visual identities, marketing assets, and corporate branding for a variety of industries, such as scientific products, tech startups, food, event management and more.",
        process:
          "Delivered full-scale branding from concept to execution, from business cards to full-scale Websites. Created logos, UI elements, animations, product manuals, and designed print-ready collateral and exhibition materials.",
        outcomes:
          "Elevated the brand presence for niche companies and strengthened their credibility.",
        year: "2000-2024",
      },
    },
    {
      id: "3",
      title: "Workflow System Design",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      tags: [
        "Project lead",
        "Workflow design",
        "Process improvement",
        "Change management",
      ],
      description:
        "Led the design and delivery of a web-based workflow system for Standards Australia, streamlining collaboration and modernizing the development of national and international standards.",
      modalContent: {
        overview:
          "This 2 year long project involved designing and delivering a web-based document and workflow management system for Standards Australia. The goal was to modernize the way national and international standards were established and agreed upon.",
        process:
          "From requirement gathering, gap analysis, stakeholder workshops to development, validation planning, and user testing and production. I led external development team through the product life cycle. In addition I authored user training material and conducted onboarding sessions.",
        outcomes:
          "From fax and email based processes to a truly online based solution, the final system improved collaboration across 8,000 committee members and internal staff, reducing process friction and enabling more efficient standards development. It laid the foundation for future digital transformation within the organization.",
        year: "2007-2009, Sydney - Standards Australia",
      },
    },
    {
      id: "4",
      title: "Sustainable Fashion Design",
      image: "/images/PD_honeyants_thumb.jpg",
      additionalImages: [
        "/images/PD_fashion_clothes.jpg",
        "/images/PD_fashion_photos.png",
        "/images/PD_fasion_rack.jpg",
        "/images/PR_fashion_store.png",
        "/images/PD_fashion_pants.jpg",
      ],
      tags: [
        "Fashion design",
        "Sustainable design",
        "E-commerce",
        "Entrepreneurship",
      ],
      description:
        "Co-founded a sustainable children's clothing brand, overseeing everything from concept to e-commerce—combining ethical production with original design to build a distinct market presence.",
      modalContent: {
        overview:
          "Co-founded a boutique sustainable children's clothing brand in 2008. From ideation to e-commerce launch.",
        process:
          "Designed garments, developed print graphics for screen printing, sourced ethical suppliers and manufactures to produce garments made with certified organic cotton and eco-friendly dyes. Designed brand, created marketing material and set-up the online shop.",
        outcomes:
          "Gained media coverage for sustainability efforts and unique designs.",
        year: "2008, Syndey Australia",
      },
    },
    {
      id: "5",
      title: "EdTech UX Design",
      image: "/images/PD-edutech_thumb.png",
      additionalImages: [
        "/images/PD-learncoachies-flow.png",
        "/images/PD-learncoachies_book.png",
        "/images/PD-learncoachies-screen.png",
        "/images/PD_learncoachies_func_specs.png",
      ],
      tags: [
        "EdTech",
        "UX Design",
        "Curriculum Integration",
        "Agile Development",
        "Design Manager",
      ],
      description:
        "An e-learning solution developed to complement Cornelsen's textbooks, offering interactive digital learning paths aligned with classroom curricula and enhancing both student engagement and teaching support.",
      modalContent: {
        overview:
          "This project focused on designing e-learning solutions tightly integrated with Cornelsen's textbook offerings to provide digital learning paths aligned with classroom curricula.",
        process:
          "Managed cross-departmental projects, collaborating with stakeholders from diverse educational disciplines to define unified functional specifications. Partnered with graphic designers, software engineers, and Product Owners to ensure design consistency across all fields.",
        outcomes:
          "The online solution provided an alternative to the CD-ROMs bundled with textbooks, allowing students to enhance their skills through interactive e-learning modules aligned with their school books. This increased student engagement and gave teachers digital content to support their lesson plans. Launched in 2012, it marked Cornelsen's first step toward digital learning, an approach still in use today.",
        year: "2012, Berlin - Cornelsen",
      },
    },
    {
      id: "6",
      title: "EdTech Evaluation Tool Design",
      image: "/images/PD_keks_thumb.png",
      additionalImages: [
        "/images/PD-Keks-portal.png",
        "/images/PD-Keks-student view.png",
        "/images/PD-Keks-results.png",
      ],
      tags: [
        "UX design",
        "Evaluation tools",
        "Education",
        "Data visualization",
      ],
      description:
        "A digital evaluation tool designed to help teachers assess student skills more efficiently, turning paper-based assessments into actionable, online insights.",
      modalContent: {
        overview:
          "This project involved the design of a digital evaluation tool enabling teachers to assess students' skills in key curriculum topics. The goal was to simplify skill-based assessments and generate actionable insights.",
        process:
          "Conducted needs analysis workshops with educators, mapped evaluation flows, and designed a scoring system. Delivered wireframes and prototypes and ran on-site usability testing sessions with teachers.",
        outcomes:
          "From paper-based testing and analysis to an online scoring tool for e-learning platforms.",
        year: "2013, Berlin - Cornelsen",
      },
    },
    {
      id: "7",
      title: "Industrial Design",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      ],
      tags: ["Industrial design", "Sustainable design"],
      description:
        "This project explores the design of sustainable recycling bins for public spaces, with a focus on combining functionality, cost-efficiency, and visual appeal. Inspired by natural forms, the result is a modular solution that balances smart design with environmental responsibility.",
      modalContent: {
        overview:
          "My thesis project in 1999 involved creating sustainable recycling bins for public spaces. The wood production company's requirements was to design a sustainable and cost-efficient product. From a design perspective the aim was to design a smart, usable and visually appealing product.",
        process:
          "With inspiration from nature and beehives, we settled on the hexagon shape, which uses the least amount of material but maximum stability. Its shape also allows for different setups and has a unique and beautiful style compared to most bins.",
        outcomes:
          "Even if this was only a thesis project, it caught ground. 25 years later similar recycling bins, from different producers, can still be seen throughout public spaces in Sweden. These photos were recently taken from a shopping center and airport.",
        year: "1999, Stockholm Sweden",
      },
    },
    {
      id: "8",
      title: "Art & Photography",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
      ],
      tags: ["Drawing", "Acryl painting", "Photography"],
      description: "Showcase of some of my more artistic side.",
      modalContent: {
        overview:
          "Throughout my life I have been drawing, painting, photographing, creating videos, crafting and so on. Here are some samples of this more personal side of me, from early childhood until recently.",
        process: "creative flow, paitience, trust, failure and trying again",
        outcomes: "some great and some not so great work",
        year: "1980 to now",
      },
    },
    {
      id: "9",
      title: "AI Product Design",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      ],
      tags: ["AI creative tools", "App deployment design"],
      description: "New learnings in ever-evolving field of AI.",
      modalContent: {
        overview:
          "For more than a year I have been focusing on learning about new developments within Generative AI. At my current employer, I am working on an internal AI app solution for our Support team. In my spare time, I explore different AI tools to stay on top of this fast-paced, emerging field.",
        process:
          "Through trial and error I continue to deepen my understanding of AI development. No matter how powerful an AI tool may be, successful outcomes still rely on the fundamentals of product design, planning, scope, user insights, functional specifications, and the right look and feel. While AI makes it possible to create quickly, it often takes significant iteration and refinement before it truly delivers on the vision.",
        outcomes:
          "Ongoing learning journey, with this portfolio developed using various AI tools including TempoLabs, Leonardo.ai, and ChatGPT.",
        year: "Currently in development (Aug 2025)",
      },
    },
  ];

  const showNavigation = true;

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/background_b.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen overflow-y-auto">
        {/* Navigation */}
        {showNavigation && (
          <header className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
              <div className="text-lg font-normal text-white drop-shadow-lg flex font-satoshi">
                Portfolio of Irene Hagström
              </div>
              <ul className="flex space-x-6 h-[30px]">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="text-white hover:text-primary transition-colors drop-shadow-md font-satoshi"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/roles")}
                    className="text-white hover:text-primary transition-colors drop-shadow-md font-satoshi"
                  >
                    Roles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/discipline")}
                    className="text-white hover:text-primary transition-colors drop-shadow-md font-satoshi"
                  >
                    Discipline
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about-me")}
                    className="text-white hover:text-primary transition-colors drop-shadow-md font-satoshi"
                  >
                    About
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        )}

        <Suspense fallback={<p className="text-white p-4">Loading...</p>}>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route
                path="/roles"
                element={
                  <div className="container mx-auto px-4 pb-20">
                    <PortfolioGrid
                      projects={experienceProjects}
                      title="Browse by Role"
                      description=""
                      type="experience"
                    />
                  </div>
                }
              />
              <Route
                path="/discipline"
                element={
                  <div className="container mx-auto px-4 pb-20">
                    <PortfolioGrid
                      projects={disciplineProjects}
                      title="Browse by Discipline"
                      description=""
                      type="discipline"
                    />
                  </div>
                }
              />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>

        {/* Footer */}
        {showNavigation && (
          <footer className="bg-black/30 py-8">
            <div className="container mx-auto px-4 text-center">
              <div className="flex justify-center space-x-4 mt-4 text-white/80 drop-shadow-md">
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors drop-shadow-md"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors drop-shadow-md"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors drop-shadow-md"
                >
                  Dribbble
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors drop-shadow-md"
                >
                  Behance
                </a>
              </div>
              <p className="text-white/80 drop-shadow-md text-xs mt-4">
                © 2025 Irene Hagström Portfolio. All rights reserved.
              </p>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;
