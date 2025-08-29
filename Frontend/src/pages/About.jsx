import React from "react";
import { Film, Users, Award, Globe, Mail, Github, Twitter } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Film,
      title: "Curated Collection",
      description:
        "Hand-picked movies from various genres and decades, ensuring quality recommendations.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built by movie enthusiasts for movie enthusiasts, with user feedback at the core.",
    },
    {
      icon: Award,
      title: "Quality Ratings",
      description:
        "Comprehensive rating system based on critical acclaim and user reviews.",
    },
    {
      icon: Globe,
      title: "Global Cinema",
      description:
        "Discover movies from around the world, including international and indie films.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      bio: "Movie buff with 10+ years in product development.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating great user experiences.",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      bio: "Designer focused on making complex interfaces simple and beautiful.",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <Film className="h-16 w-16 mx-auto mb-6 text-yellow-400 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            About <span className="text-yellow-300">CineFind</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping movie lovers discover their next
            favorite film. Our platform combines cutting-edge technology with a
            deep love for cinema to create the ultimate movie discovery
            experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At CineFind, we believe that everyone deserves to find movies
            they'll love. Our mission is to bridge the gap between movie
            enthusiasts and the perfect film for any mood, occasion, or
            preference. We're building a community where discovering great
            cinema is effortless and enjoyable.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose CineFind?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have questions, suggestions, or just want to chat about movies?
            We'd love to hear from you!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="mailto:hello@cinefind.com"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </a>
          </div>

          <p className="text-gray-400 border-t border-gray-700 pt-6">
            © 2025 CineFind. Made with ❤️ for movie lovers everywhere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
