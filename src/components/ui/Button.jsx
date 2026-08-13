import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-cherry-500 text-white hover:bg-cherry-600 shadow-soft hover:shadow-lift",
  secondary:
    "bg-coffee-800 text-cream-100 hover:bg-coffee-900 shadow-soft hover:shadow-lift",
  outline:
    "border-2 border-coffee-800 text-coffee-800 hover:bg-coffee-800 hover:text-cream-100",
  ghost: "text-coffee-800 hover:bg-coffee-100",
  white: "bg-white text-coffee-800 hover:bg-cream-100 shadow-soft hover:shadow-lift",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
