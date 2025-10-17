import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExperienceClick = () => {
    navigate("/portfolio/roles");
  };

  const handleDisciplineClick = () => {
    navigate("/portfolio/discipline");
  };

  return (
    <main className="container mx-auto px-4 pb-20 flex flex-col">
      {/* Hero Section */}
      <Hero
        onExperienceClick={handleExperienceClick}
        onDisciplineClick={handleDisciplineClick}
      />
    </main>
  );
};

export default HomePage;