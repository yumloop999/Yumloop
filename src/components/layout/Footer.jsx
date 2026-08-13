import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Logo from "./Logo";
import Container from "../ui/Container";
import SocialIcon from "../ui/SocialIcon";
import { siteConfig, navLinks, categories } from "../../data/siteConfig";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-coffee-950 text-cream-200 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-coffee-800">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo size="lg" />
            <p className="text-sm text-cream-300 max-w-xs">{siteConfig.description}</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-coffee-800 hover:bg-cherry-500 transition-colors"
                aria-label="Instagram"
              >
                <SocialIcon name="instagram" size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-coffee-800 hover:bg-cherry-500 transition-colors"
                aria-label="Facebook"
              >
                <SocialIcon name="facebook" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-cream-50 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-cherry-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-cream-50 mb-4">Menu Categories</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/menu?category=${cat.id}`} className="hover:text-cherry-300 transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-cream-50 mb-1">Stay in the Loop</h4>
            <p className="text-sm text-cream-300">Get updates on new flavors and offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-full bg-coffee-800 px-4 py-2.5 text-sm text-cream-50 placeholder:text-cream-400 outline-none focus:ring-2 focus:ring-cherry-500"
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-cherry-500 hover:bg-cherry-600 transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            {subscribed && <p className="text-xs text-cherry-300">Thanks for subscribing!</p>}

            <div className="flex flex-col gap-2 text-sm pt-2">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-cherry-300">
                <Phone size={15} /> {siteConfig.phone}
              </a>
              <a href={`tel:${siteConfig.phoneSecondary}`} className="flex items-center gap-2 hover:text-cherry-300">
                <Phone size={15} /> {siteConfig.phoneSecondary}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-cherry-300">
                <Mail size={15} /> {siteConfig.email}
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" /> {siteConfig.address}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-cream-400">
          <p>&copy; {new Date().getFullYear()} Yumloop. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {siteConfig.serviceOptions.map((opt, i) => (
              <span key={opt} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-50">•</span>}
                {opt}
              </span>
            ))}
          </div>
          <p className="italic font-display text-cream-200">"Loop into Flavor."</p>
        </div>
      </Container>
    </footer>
  );
}
