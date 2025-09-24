// src/components/about/About-Team.jsx
import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import AnimatedBackground from "../../components/test/blot/BoltAnimation";

const AboutTeam = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const teamMembers = [
    {
      id: 0,
      name: "Michael Chen",
      role: "CEO & Digital Strategy Director",
      img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "michael@example.com",
    },
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Head of Content Marketing",
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com",
    },
    {
      id: 2,
      name: "David Rodriguez",
      role: "Technical SEO Specialist",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "david@example.com",
    },
  ];

  // Preload images
  useEffect(() => {
    teamMembers.forEach((member) => {
      const img = new Image();
      img.src = member.img;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [member.id]: true }));
      };
    });
  }, []);

  return (
    <section className="relative py-20 bg-white/80 backdrop-blur-sm overflow-hidden border-b border-white/20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12 bg-white/20 backdrop-blur-md rounded-3xl shadow-xl p-8 lg:p-12 border border-white/20 transition-all duration-300 hover:shadow-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The experts behind your success
              </p>
            </div>

            {/* Enhanced Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative w-full max-w-sm lg:max-w-md">
                  {/* Card container with 3D effects */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:rotate-1 cursor-pointer overflow-hidden border border-gray-100">
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-teal-50/50 group-hover:via-blue-50/30 group-hover:to-purple-50/50 transition-all duration-700"></div>

                    {/* Floating decoration elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-100/30 to-blue-100/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>

                    {/* Profile Picture with enhanced effects */}
                    <div className="relative mx-auto mb-6 transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
                      {/* Ring decoration */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-spin-slow">
                        <div className="w-full h-full bg-white rounded-full"></div>
                      </div>

                      {/* Image loading skeleton */}
                      {!imagesLoaded[member.id] && (
                        <div className="w-40 h-40 rounded-full mx-auto bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse relative z-10" />
                      )}

                      <img
                        src={member.img}
                        alt={member.name}
                        className={`relative z-10 w-40 h-40 rounded-full mx-auto object-cover shadow-2xl transition-all duration-700 ${
                          imagesLoaded[member.id] ? "opacity-100" : "opacity-0"
                        }`}
                        loading="lazy"
                        onLoad={() =>
                          setImagesLoaded((prev) => ({
                            ...prev,
                            [member.id]: true,
                          }))
                        }
                      />

                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-blue-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Content section */}
                    <div className="relative z-10 text-center">
                      {/* Name with gradient */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {member.name}
                      </h3>

                      {/* Role with enhanced styling */}
                      <p className="text-teal-600 font-semibold mb-6 transform group-hover:scale-105 transition-transform duration-500">
                        {member.role}
                      </p>

                      {/* Enhanced Social Links */}
                      <div className="flex justify-center space-x-6">
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social relative p-3 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg">
                            <Instagram className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social relative p-3 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg">
                            <Linkedin className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social relative p-3 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg">
                            <Twitter className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="group/social relative p-3 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg">
                            <Mail className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full group-hover:w-3/4 transition-all duration-700"></div>
                  </div>

                  {/* Shadow card for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100/20 to-blue-100/20 rounded-3xl transform translate-y-4 translate-x-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

