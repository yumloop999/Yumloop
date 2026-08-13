import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png";

const sizes = {
  sm: "h-10",
  md: "h-12",
  lg: "h-16 md:h-24",
};

export default function Logo({ size = "md" }) {
  return (
    <Link to="/" className="flex items-center shrink-0">
      <motion.img
        src={logoImg}
        alt="Yumloop"
        className={`w-auto object-contain ${sizes[size]}`}
        whileHover={{ rotate: [0, -6, 6, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </Link>
  );
}
