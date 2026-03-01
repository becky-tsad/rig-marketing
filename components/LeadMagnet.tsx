"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface LeadMagnetProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "inline" | "banner";
}

export default function LeadMagnet({
  title = "Free: The 10-Point Marketing Audit Checklist",
  description = "Not sure where your marketing stands? Download our free checklist and audit your own marketing in 15 minutes — then you'll know exactly where to focus.",
  buttonText = "Get the Free Checklist",
  variant = "inline",
}: LeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would submit to an email service
      console.log("Lead magnet signup:", email);
      setStatus("success");
      setEmail("");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          variant === "banner"
            ? "bg-navy-900"
            : "bg-coral/5 border border-coral/20"
        }`}
      >
        <p
          className={`text-lg font-bold mb-2 ${
            variant === "banner" ? "text-white" : "text-navy-900"
          }`}
        >
          Check your inbox!
        </p>
        <p
          className={`text-sm ${
            variant === "banner" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We&apos;ve sent the checklist to your email. Happy auditing!
        </p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-navy-900 rounded-2xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <p className="text-coral font-semibold text-xs uppercase tracking-widest mb-2">
              Free Resource
            </p>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-4 py-3 rounded-lg bg-navy-800 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-coral focus:border-transparent outline-none text-sm min-w-[240px]"
            />
            <Button type="submit" size="sm">
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coral/5 border border-coral/20 rounded-2xl p-8">
      <p className="text-coral font-semibold text-xs uppercase tracking-widest mb-2">
        Free Resource
      </p>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-coral focus:border-transparent outline-none text-sm text-gray-900"
        />
        <Button type="submit" size="sm">
          {buttonText}
        </Button>
      </form>
    </div>
  );
}
