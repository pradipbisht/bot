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

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full max-w-sm lg:max-w-md perspective-1000 transform transition-transform duration-500 hover:scale-105 hover:rotate-y-2 hover:rotate-x-2 flex flex-col items-center text-center group cursor-pointer">
                  {/* Profile Picture */}
                  <div className="relative mx-auto mb-6 transition-transform duration-500 group-hover:scale-110">
                    {!imagesLoaded[member.id] && (
                      <div className="w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                    )}

                    <img
                      src={member.img}
                      alt={member.name}
                      className={`w-48 h-48 rounded-full mx-auto object-cover shadow-lg transition-opacity duration-500 ${
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
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-4">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Instagram className="w-5 h-5 text-gray-700 hover:text-teal-500 transition-colors" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 text-gray-700 hover:text-teal-500 transition-colors" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Twitter className="w-5 h-5 text-gray-700 hover:text-teal-500 transition-colors" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-5 h-5 text-gray-700 hover:text-teal-500 transition-colors" />
                      </a>
                    )}
                  </div>
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
