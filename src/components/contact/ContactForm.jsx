import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { whatsappLink } from "../../lib/whatsapp";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    const message = `Hi Yumloop! My name is ${data.name}.\nPhone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ""}\nMessage: ${data.message}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Field label="Your Name" error={errors.name}>
        <input {...register("name", { required: "Name is required" })} className={inputClass} placeholder="Jane Doe" />
      </Field>
      <Field label="Phone Number" error={errors.phone}>
        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9+\-\s]{7,15}$/, message: "Enter a valid phone number" },
          })}
          className={inputClass}
          placeholder="+91 98765 43210"
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
      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          {...register("message", { required: "Please write a message" })}
          className={`${inputClass} resize-none`}
          placeholder="How can we help?"
        />
      </Field>

      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-cherry-500 px-8 py-3.5 font-semibold text-white shadow-soft hover:bg-cherry-600 hover:shadow-lift transition-all"
      >
        <Send size={18} />
        Send Message
      </motion.button>
      {isSubmitSuccessful && (
        <p className="flex items-center gap-2 text-sm text-green-700">
          <CheckCircle2 size={16} /> Thanks! We'll get back to you shortly.
        </p>
      )}
    </form>
  );
}

const inputClass =
  "w-full rounded-2xl border border-coffee-200 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:ring-2 focus:ring-cherry-500 placeholder:text-coffee-300";

function Field({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-coffee-800">{label}</label>
      {children}
      {error && <span className="text-xs text-cherry-600">{error.message}</span>}
    </div>
  );
}
