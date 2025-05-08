import { MapPin, Phone, Mail } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Know Who I Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                <span className="text-primary-600 dark:text-primary-400 text-lg">👨‍💻</span>
              </span>
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm Zaid Ashraf, a final year BCA student at G. H. Raisoni College of Arts Commerce and Science, Nagpur.
              I'm an aspiring full-stack developer with a passion for creating innovative web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Driven and detail-oriented, I'm proficient in{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">React.js</span>,{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">Next.js</span>,{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">HTML</span>,{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">CSS</span>,{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">JavaScript</span>,{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">PHP</span>,{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">MySQL</span>,
              <span className="text-primary-600 dark:text-primary-400 font-medium">Python</span>, and{" "}
              <span className="text-primary-600 dark:text-primary-400 font-medium">C/C++</span>. I've designed and
              developed projects like an ATS Resume Checker that demonstrates my full-stack capabilities.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm eager to leverage modern web frameworks and my broad skillset to contribute to innovative projects in
              an entry-level role. I'm constantly learning and improving my skills to stay updated with the latest
              technologies.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                <span className="text-primary-600 dark:text-primary-400 text-lg">📋</span>
              </span>
              Personal Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                    <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Mominpura, Nagpur</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                    <Phone className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+91 9322822436</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                    <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 break-all">zaidashraf249@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary-600 dark:text-primary-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                      <circle cx="17" cy="7" r="5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">Languages</h4>
                    <p className="text-gray-600 dark:text-gray-400">English, Hindi, Urdu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-2">
                  <span className="text-primary-600 dark:text-primary-400 text-sm">🎯</span>
                </span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Football", "Swimming", "Blogging", "Learning New Skills", "Traveling"].map((interest) => (
                  <span
                    key={interest}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-900/30 dark:hover:text-primary-300 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
