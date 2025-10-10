import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  tags: string[];
  content?: React.ReactNode;
  // For experience/roles projects
  experience?: string;
  year?: string;
  outcomes?: string;
  // For discipline projects
  modalContent?: {
    overview: string;
    process: string;
    outcomes: string;
    year: string;
  };
}

interface PortfolioGridProps {
  projects?: Project[];
  title?: string;
  description?: string;
  type?: "discipline" | "experience";
}

const PortfolioGrid = ({
  projects = [],
  title = "Portfolio Projects",
  description = "Browse some sample work",
  type = "discipline",
}: PortfolioGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4 font-satoshi">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Card className="h-full overflow-hidden border-4 border-border hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-light mb-2 font-satoshi">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#d7edf0] text-[#767676] hover:bg-[#d7edf0] cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white border-0">
            {selectedProject && (
              <>
                <DialogHeader className="bg-white">
                  <DialogTitle className="text-2xl font-light font-satoshi">
                    {selectedProject.title}
                  </DialogTitle>
                  {type === "experience" && (
                    <DialogDescription className="text-base">
                      {selectedProject.description}
                    </DialogDescription>
                  )}
                </DialogHeader>

                <div className="mt-6">
                  <div className="rounded-md overflow-hidden mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={`w-full object-cover ${
                        selectedProject.id === "7"
                          ? "h-48"
                          : selectedProject.title === "Founder & Lead Designer"
                            ? "h-[340px]"
                            : [
                                  "Branding & Visual Design",
                                  "Marketing and Brand Lead",
                                  "Product Manager and Facilitator",
                                  "Industrial Design",
                                  "Project Manager",
                                ].includes(selectedProject.title)
                              ? "h-[400px]"
                              : [
                                    "Art & Photography",
                                    "AI Products Design",
                                    "Senior Product & UX Designer",
                                  ].includes(selectedProject.title)
                                ? "h-[300px]"
                                : "h-auto"
                      } ${
                        selectedProject.title === "Art & Photography"
                          ? "object-bottom"
                          : ""
                      }`}
                    />
                  </div>

                  {type === "discipline" && selectedProject.modalContent ? (
                    <div className="space-y-6">
                      {selectedProject.modalContent.overview && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi">
                            Overview
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.overview}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.process && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi">
                            Process
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.process}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.outcomes && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi">
                            Outcomes
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.outcomes}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.year && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi">
                            Production year
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.year}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : type === "experience" ? (
                    <div className="space-y-6">
                      {selectedProject.experience && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi">
                            Experience
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.experience}
                          </p>
                        </div>
                      )}

                      {selectedProject.year && (
                        <div>
                          <h3 className="text-lg font-light mb-2 font-satoshi">
                            Year
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.year}
                          </p>
                        </div>
                      )}

                      {selectedProject.outcomes && (
                        <div>
                          <h3 className="text-lg font-medium mb-2 font-satoshi">
                            Outcomes
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.outcomes}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Image Slider */}
                  {selectedProject.additionalImages &&
                    selectedProject.additionalImages.length > 0 && (
                      <div className="mt-8">
                        <Carousel className="w-full max-w-2xl mx-auto">
                          <CarouselContent>
                            {selectedProject.additionalImages.map(
                              (imageUrl, index) => (
                                <CarouselItem
                                  key={index}
                                  className="md:basis-1/2 pl-6"
                                >
                                  <div className="p-2">
                                    <div className="aspect-[4/3] overflow-hidden rounded-md">
                                      <img
                                        src={imageUrl}
                                        alt={`${selectedProject.title} - Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                </CarouselItem>
                              ),
                            )}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>
                    )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PortfolioGrid;