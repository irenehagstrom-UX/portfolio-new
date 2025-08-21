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
  projects = [
    {
      id: "1",
      title: "E-commerce Redesign",
      description:
        "Complete UX overhaul of an e-commerce platform focusing on conversion optimization",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
      tags: ["UX Design", "UI Design", "E-commerce"],
    },
    {
      id: "2",
      title: "Banking App",
      description:
        "Mobile banking application with focus on accessibility and security",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      tags: ["Mobile", "UI Design", "Fintech"],
    },
    {
      id: "3",
      title: "Healthcare Dashboard",
      description: "Data visualization dashboard for healthcare professionals",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      tags: ["Dashboard", "Data Visualization", "Healthcare"],
    },
    {
      id: "4",
      title: "Brand Identity",
      description: "Brand identity designs for startups",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      tags: ["Branding", "Logo Design", "Identity", "Web Design"],
    },
    {
      id: "5",
      title: "Social Media App",
      description:
        "Social networking platform focused on creative professionals",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      tags: ["Social Media", "UX Research", "Mobile"],
    },
    {
      id: "6",
      title: "Marketing Campaign",
      description: "Integrated marketing campaign for product launch",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      tags: ["Marketing", "Campaign", "Strategy"],
    },
  ],
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
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-black/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#BED2C9] text-black hover:bg-[#BED2C9] cursor-default"
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
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
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
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {type === "discipline" && selectedProject.modalContent ? (
                    <div className="space-y-6">
                      {selectedProject.modalContent.overview && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">Overview</h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.overview}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.process && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">Process</h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.process}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.outcomes && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">Outcomes</h3>
                          <p className="text-muted-foreground">
                            {selectedProject.modalContent.outcomes}
                          </p>
                        </div>
                      )}

                      {selectedProject.modalContent.year && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">
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
                          <h3 className="text-lg font-medium mb-2">
                            Experience
                          </h3>
                          <p className="text-muted-foreground">
                            {selectedProject.experience}
                          </p>
                        </div>
                      )}

                      {selectedProject.year && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">Year</h3>
                          <p className="text-muted-foreground">
                            {selectedProject.year}
                          </p>
                        </div>
                      )}

                      {selectedProject.outcomes && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">Outcomes</h3>
                          <p className="text-muted-foreground">
                            {selectedProject.outcomes}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4 mb-6">
                      <h3 className="text-lg font-medium">
                        Process & Approach
                      </h3>
                      <p className="text-muted-foreground">
                        The design process included user research, competitive
                        analysis, wireframing, prototyping, and user testing.
                        Key challenges included balancing aesthetic
                        considerations with functional requirements.
                      </p>

                      <h3 className="text-lg font-medium mt-4">Outcomes</h3>
                      <p className="text-muted-foreground">
                        The final design resulted in improved user engagement
                        metrics and positive client feedback. The solution
                        successfully addressed the initial project goals while
                        providing a foundation for future iterations.
                      </p>
                    </div>
                  )}

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
                                  className="md:basis-1/2"
                                >
                                  <div className="p-1">
                                    <div className="aspect-video overflow-hidden rounded-md">
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
