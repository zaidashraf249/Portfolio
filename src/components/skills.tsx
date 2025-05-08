import { Code, Database, Globe, Server, Cpu, FileCode, Layout, PenTool } from "lucide-react"

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", icon: <Layout className="text-teal-600 dark:text-teal-400" size={24} />, level: 90 },
    { name: "JavaScript", icon: <FileCode className="text-teal-600 dark:text-teal-400" size={24} />, level: 85 },
    { name: "React JS", icon: <Code className="text-teal-600 dark:text-teal-400" size={24} />, level: 80 },
    { name: "Next JS", icon: <Server className="text-teal-600 dark:text-teal-400" size={24} />, level: 75 },
    { name: "Python", icon: <Cpu className="text-teal-600 dark:text-teal-400" size={24} />, level: 70 },
    { name: "PHP", icon: <Globe className="text-teal-600 dark:text-teal-400" size={24} />, level: 65 },
    { name: "MySQL", icon: <Database className="text-teal-600 dark:text-teal-400" size={24} />, level: 75 },
    { name: "C, C++", icon: <Cpu className="text-teal-600 dark:text-teal-400" size={24} />, level: 60 },
    { name: "SEO", icon: <PenTool className="text-teal-600 dark:text-teal-400" size={24} />, level: 70 },
  ]

  const softSkills = [
    { name: "Adaptability", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Teamwork", level: 80 },
    { name: "Time Management", level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What I Can Do</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                <span className="text-primary-600 dark:text-primary-400 text-lg">💻</span>
              </span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="mr-3 bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full shimmer"></div>
                    </div>
                  </div>
                  <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                <span className="text-primary-600 dark:text-primary-400 text-lg">🧠</span>
              </span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-6 mb-10">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group"
                >
                  <div className="flex items-center mb-3">
                    <h4 className="font-medium text-gray-800 dark:text-white">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full shimmer"></div>
                    </div>
                  </div>
                  <div className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">{skill.level}%</div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-2">
                  <span className="text-primary-600 dark:text-primary-400 text-sm">🛠️</span>
                </span>
                Additional Skills
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center text-gray-600 dark:text-gray-400 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  MS Office
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Node.js
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Git & GitHub
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Responsive Design
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  REST APIs
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
