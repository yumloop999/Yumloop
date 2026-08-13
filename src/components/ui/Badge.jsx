const styles = {
  bestseller: "bg-cherry-500 text-white",
  new: "bg-coffee-800 text-cream-100",
  veg: "border-2 border-green-600 bg-white",
  "non-veg": "border-2 border-red-600 bg-white",
};

export default function Badge({ type, children, className = "" }) {
  if (type === "veg" || type === "non-veg") {
    const dotColor = type === "veg" ? "bg-green-600" : "bg-red-600";
    return (
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded-sm ${styles[type]} ${className}`}
        title={type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
      >
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${styles[type]} ${className}`}
    >
      {children}
    </span>
  );
}
