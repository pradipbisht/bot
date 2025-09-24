import FooterColumn from "./FooterColumn";
import ContactInfo from "./ContactFooter";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";
import AnimatedBackground from "../test/blot/BoltAnimation";
// import AnimatedBackground from "../test/blot/BoltAnimation";

const Footer = () => {
  const servicesLinks = [
    { href: "/services?cat=seo", label: "SEO" },
    { href: "/services?cat=content-marketing", label: "Content Marketing" },
    { href: "/services?cat=social-media", label: "Social Media" },
    { href: "/services?cat=paid-ads", label: "Paid Ads" },
    { href: "/services?cat=email-marketing", label: "Email Marketing" },
    { href: "/services?cat=ai-emerging-tech", label: "AI & Emerging Tech" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Privacy Policy" },
  ];

  const resourcesLinks = [
    { href: "/blog", label: "Blog" },
    { href: "#", label: "Free Tools" },
    { href: "#", label: "Guides" },
    { href: "#", label: "Templates" },
    { href: "#", label: "Webinars" },
    { href: "#", label: "Support" },
  ];

  return (
    <footer className="relative bg-slate-50 text-gray-800 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn title="Services" links={servicesLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourcesLinks} />
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

