import { Star } from "lucide-react";

export default function RatingStars({ rating = 5, size = 16, className = "" }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-cherry-500 text-cherry-500" : "fill-coffee-100 text-coffee-100"}
        />
      ))}
    </div>
  );
}
