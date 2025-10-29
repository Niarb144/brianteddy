import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { href: "https://github.com/", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/", icon: "/icons/linkedin.svg" },
    { href: "mailto:teddybrian543@email.com", icon: "/icons/mail.svg" },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        
        <a
          key={index}
          href={link.href}
          target="_blank"
          className="transition-transform hover:scale-110"
          alt={link.label}
        >
          <img src={link.icon} alt="icon" className="w-6 h-6" />
          
        </a>
        
        
      ))}
    </div>
  );
}
