"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="text-teal-600 dark:text-teal-400" size={24} />,
      title: "Phone",
      details: "+91 9322822436",
      link: "tel:+919322822436",
    },
    {
      icon: <Mail className="text-teal-600 dark:text-teal-400" size={24} />,
      title: "Email",
      details: "zaidashraf249@gmail.com",
      link: "mailto:zaidashraf249@gmail.com",
    },
    {
      icon: <MapPin className="text-teal-600 dark:text-teal-400" size={24} />,
      title: "Location",
      details: "Mominpura, Nagpur, India",
      link: "https://maps.google.com/?q=Mominpura,Nagpur,India",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group overflow-hidden"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block p-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="h-16 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center px-6">
                <h3 className="text-white font-semibold text-lg">Send Me a Message</h3>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="w-full rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="w-full min-h-[150px] rounded-lg border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white w-full rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all"
                  >
                    <Send size={16} className="mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
