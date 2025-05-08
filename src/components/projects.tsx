import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"

const Projects = () => {
  const projects = [
    {
      title: "ATS Resume Checker",
      description:
        "A full-stack web application built with Next.js, Node.js, and MySQL, utilizing AI/ML to analyze resumes and provide feedback for improved ATS compatibility.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript", "MySQL", "Node.js", "AI/ML"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with HTML and CSS to showcase skills, projects, and personal information in a structured and visually appealing layout.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "A dashboard for e-commerce store owners to track sales, inventory, and customer data with interactive charts and analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Chart.js", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
            My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Recent Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience as a full-stack
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1 rounded-full">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 rounded-full">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
