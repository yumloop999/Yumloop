import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whatsappLink } from "../../lib/whatsapp";

const sizes = ["0.5 Kg", "1 Kg", "1.5 Kg", "2 Kg", "3+ Kg"];
const shapes = ["Round", "Square", "Heart", "Rectangle", "Number / Letter"];
const occasions = ["Birthday", "Anniversary", "Wedding", "Baby Shower", "Farewell", "Other"];

export default function CakeOrderForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: { fulfillment: "pickup" },
  });

  const onSubmit = (data) => {
    const lines = [
      `Hi Yumloop! I'd like to order a custom cake.`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Flavor: ${data.flavor} | Size: ${data.size} | Shape: ${data.shape}`,
      `Occasion: ${data.occasion}`,
      `Theme: ${data.theme || "-"}`,
      `Message on Cake: ${data.cakeMessage || "-"}`,
      `${data.fulfillment === "pickup" ? "Pickup" : "Delivery"} on ${data.date} at ${data.time}`,
      `Notes: ${data.notes || "-"}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Full Name" error={errors.name}>
        <input {...register("name", { required: "Name is required" })} className={inputClass} placeholder="Your name" />
      </Field>

      <Field label="Phone Number" error={errors.phone}>
        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]{10}$/, message: "Enter a 10-digit phone number" },
          })}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
          }}
          inputMode="numeric"
          maxLength={10}
          className={inputClass}
          placeholder="9876543210"
        />
      </Field>

      <Field label="Email Address (optional)" error={errors.email}>
        <input
          type="email"
          {...register("email", {
            validate: (value) => !value || /^\S+@\S+\.\S+$/.test(value) || "Enter a valid email",
          })}
          className={inputClass}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Occasion" error={errors.occasion}>
        <select {...register("occasion", { required: "Please select an occasion" })} className={inputClass}>
          <option value="">Select occasion</option>
          {occasions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </Field>

      <Field label="Cake Flavor" error={errors.flavor}>
        <input
          {...register("flavor", { required: "Please enter a flavor" })}
          className={inputClass}
          placeholder="e.g. Chocolate, Red Velvet, Butterscotch"
        />
      </Field>

      <Field label="Cake Size" error={errors.size}>
        <select {...register("size", { required: "Please select a size" })} className={inputClass}>
          <option value="">Select size</option>
          {sizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Cake Shape" error={errors.shape}>
        <select {...register("shape", { required: "Please select a shape" })} className={inputClass}>
          <option value="">Select shape</option>
          {shapes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Theme (optional)">
        <input {...register("theme")} className={inputClass} placeholder="e.g. Superhero, Floral, Minimalist" />
      </Field>

      <Field label="Cake Message" className="md:col-span-2">
        <input {...register("cakeMessage")} className={inputClass} placeholder="e.g. Happy Birthday Aanya!" />
      </Field>

      <Field label="Pickup or Delivery">
        <div className="flex gap-3">
          {["pickup", "delivery"].map((opt) => (
            <label
              key={opt}
              className={`flex-1 flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold capitalize cursor-pointer transition-colors ${
                watch("fulfillment") === opt
                  ? "bg-coffee-900 border-coffee-900 text-cream-100"
                  : "bg-white border-coffee-200 text-coffee-700"
              }`}
            >
              <input type="radio" value={opt} {...register("fulfillment")} className="hidden" />
              {opt}
            </label>
          ))}
        </div>
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Preferred Date" error={errors.date}>
          <input type="date" {...register("date", { required: "Please pick a date" })} className={inputClass} />
        </Field>
        <Field label="Preferred Time" error={errors.time}>
          <input type="time" {...register("time", { required: "Please pick a time" })} className={inputClass} />
        </Field>
      </div>

      <Field label="Additional Notes" className="md:col-span-2">
        <textarea
          {...register("notes")}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Any allergies, colors, or special requests..."
        />
      </Field>

      <div className="md:col-span-2 flex flex-col items-center gap-3 pt-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full sm:w-auto rounded-full bg-cherry-500 px-10 py-4 font-semibold text-white shadow-lift hover:bg-cherry-600 transition-colors"
        >
          Submit Cake Request via WhatsApp
        </motion.button>
        {isSubmitSuccessful && (
          <p className="flex items-center gap-2 text-sm text-green-700">
            <CheckCircle2 size={16} /> Request sent! We'll confirm your order shortly.
          </p>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-2xl border border-coffee-200 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:ring-2 focus:ring-cherry-500 placeholder:text-coffee-300";

function Field({ label, children, error, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-semibold text-coffee-800">{label}</label>
      {children}
      {error && <span className="text-xs text-cherry-600">{error.message}</span>}
    </div>
  );
}
