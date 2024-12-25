"use client";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Handle form submission logic here
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (_error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-8 bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label htmlFor="name" className="text-base text-white">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "mt-2",
              "bg-black/20 border-white/10 text-white placeholder:text-white/50",
              "focus:border-white/20 focus:ring-white/20"
            )}
            required
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label htmlFor="email" className="text-base text-white">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "mt-2",
              "bg-black/20 border-white/10 text-white placeholder:text-white/50",
              "focus:border-white/20 focus:ring-white/20"
            )}
            required
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Label htmlFor="message" className="text-base text-white">Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={cn(
              "w-full mt-2 rounded-md border bg-black/20 px-3 py-2 text-sm",
              "border-white/10 text-white placeholder:text-white/50",
              "focus:border-white/20 focus:ring-white/20 focus:outline-none",
              "resize-none",
              "disabled:opacity-50"
            )}
            required
            disabled={isSubmitting}
          />
        </motion.div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm text-center"
          >
            Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm text-center"
          >
            Failed to send message. Please try again.
          </motion.div>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={cn(
            "w-full py-3 px-4 rounded-md font-medium",
            "bg-gradient-to-r from-purple-500 to-blue-500",
            "text-white shadow-lg",
            "hover:opacity-90 transition-all",
            "border border-white/10",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};
