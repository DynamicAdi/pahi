"use client";

import { useEffect } from "react";
import { CheckCircle2, ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    // 🔹 Conversion tracking hook
    console.log("Conversion: Form Submitted");
    // window.gtag?.("event", "conversion");
    // window.fbq?.("track", "Lead");
  }, []);

  return (
    <main className="min-h-screen max-md:py-20 flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 px-6">
      <div className="animate-btu relative max-w-lg w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-10 text-center overflow-hidden">

        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl" />

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-3">
          Thank You!
        </h1>

        {/* Subtext */}
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
          Your submission was successful. Our team has received your request and
          will get back to you shortly.
        </p>

        {/* Info blocks */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 justify-center text-sm text-neutral-700 dark:text-neutral-300">
            <Mail className="w-4 h-4" />
            <span>We’ll reach out via email</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-sm text-neutral-700 dark:text-neutral-300">
            <Sparkles className="w-4 h-4" />
            <span>No further action needed</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 text-sm font-medium hover:scale-105 transition-transform"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
