import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="flex space-x-4 mt-6">
      {socialLinks.map(({ Icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          aria-label={label}
          className="text-gray-600 hover:text-teal-600 p-2 rounded-full hover:bg-teal-50">
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

