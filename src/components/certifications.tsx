import { Award, ExternalLink } from "lucide-react"

const Certifications = () => {
  const certifications = [
    {
      title: "Python Fundamentals for Beginners",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      title: "Mobile App Development",
      issuer: "Udemy",
      date: "2022",
      link: "#",
    },
    {
      title: "Navigating On-Page and Technical SEO",
      issuer: "Google Digital Garage",
      date: "2023",
      link: "#",
    },
    {
      title: "The CRAFT of Mobile SEO",
      issuer: "SEMrush Academy",
      date: "2022",
      link: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-40 w-80 h-80 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Development</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group overflow-hidden"
            >
              <div className="h-24 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md">
                  <Award className="text-primary-600 dark:text-primary-400" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  <p className="font-medium">{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                </div>
                <div className="flex justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center text-sm bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full transition-colors"
                  >
                    View Certificate <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
