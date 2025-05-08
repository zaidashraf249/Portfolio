import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      institution: "G. H. Raisoni College of Arts Commerce and Science Nagpur",
      period: "August 2022 - 2025",
      details: "Currently pursuing BCA with focus on computer science and application development.",
    },
    {
      degree: "Higher Secondary School Certificate (HSSC)",
      institution: "MB Covent Jr. College Nagpur",
      period: "2020 - February 2022",
      percentage: "56.60%",
      details: "Completed higher secondary education with science stream.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Blue Diamond High School",
      period: "2020",
      percentage: "69.60%",
      details: "Completed secondary education with distinction.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary-600 dark:border-primary-400 pl-8 ml-4">
            {educationData.map((item, index) => (
              <div key={index} className={`mb-12 relative ${index === educationData.length - 1 ? "" : ""}`}>
                <div className="absolute -left-14 bg-white dark:bg-gray-900 p-2 rounded-full border-2 border-primary-600 dark:border-primary-400 shadow-md shadow-primary-500/20 dark:shadow-primary-500/10">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.degree}
                  </h3>
                  <h4 className="text-primary-600 dark:text-primary-400 mb-2">{item.institution}</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                  </div>
                  {item.percentage && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      <strong>Percentage:</strong>{" "}
                      <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-0.5 rounded-md text-sm">
                        {item.percentage}
                      </span>
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
