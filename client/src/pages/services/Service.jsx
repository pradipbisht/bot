import React, { useState } from "react";
import { Search, Users, Target, TrendingUp, Award, Zap } from "lucide-react";
import ServicesHeader from "./components/ServicesHeader";
import ServiceAccordion from "./components/ServiceAccordion";
import ServiceSidebar from "./components/ServiceSidebar";
import ServicePackages from "./components/ServicePackages";

function Services() {
  const [openAccordion, setOpenAccordion] = useState(0);

  // Service categories data
  const services = [
    {
      id: 0,
      title: "Website & Funnel Marketing",
      icon: <Award className="w-6 h-6" />,
      description:
        "Complete website optimization and conversion funnel solutions",
      services: [
        "Website redesign & optimization (UI/UX improvements)",
        "Landing page creation (for ads, offers, lead generation)",
        "Conversion Rate Optimization (CRO)",
        "A/B testing and performance analysis",
      ],
    },
    {
      id: 1,
      title: "Search Marketing",
      icon: <Search className="w-6 h-6" />,
      description: "Dominate search results and drive targeted traffic",
      services: [
        "Search Engine Optimization (SEO: on-page, off-page, technical)",
        "Local SEO (Google My Business optimization, local citations)",
        "Search Engine Marketing (SEM: Google Ads, Bing Ads)",
        "Keyword research and competitive analysis",
      ],
    },
    {
      id: 2,
      title: "Social Media Marketing",
      icon: <Users className="w-6 h-6" />,
      description: "Build your brand presence across all social platforms",
      services: [
        "Social media management (Instagram, Facebook, LinkedIn, Twitter, TikTok)",
        "Paid ads (Meta Ads, LinkedIn Ads, TikTok Ads)",
        "Influencer marketing campaigns",
        "Content creation (graphics, videos, reels, short-form content)",
      ],
    },
    {
      id: 3,
      title: "Content & Brand Marketing",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Create compelling content that converts",
      services: [
        "Blog writing & SEO content",
        "Email newsletters & drip campaigns",
        "Copywriting for websites & ads",
        "Branding (logo, brand identity, design systems)",
      ],
    },
    {
      id: 4,
      title: "Performance Marketing",
      icon: <Target className="w-6 h-6" />,
      description: "Data-driven campaigns that deliver ROI",
      services: [
        "Paid Ads campaigns",
        "Retargeting ads (bring back past visitors)",
        "Analytics tracking & ROI reporting",
        "Conversion optimization and funnel analysis",
      ],
    },
    {
      id: 5,
      title: "Reputation & Growth Services",
      icon: <Zap className="w-6 h-6" />,
      description: "Manage your reputation and accelerate growth",
      services: [
        "Online reputation management (reviews, ratings, PR mentions)",
        "Lead generation campaigns (LinkedIn automation, cold email)",
        "Customer relationship management (CRM setup & automation)",
        "Chatbots & AI receptionist (to convert more leads)",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <ServicesHeader />

      {/* Main Content Area */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <ServiceAccordion
              services={services}
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
            />
            <ServiceSidebar />
          </div>
        </div>
      </section>

      <ServicePackages />
    </div>
  );
}

export default Services;

