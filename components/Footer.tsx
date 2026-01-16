"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import logo_light from "@/public/pahi_light.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
const Footer = () => {
  const [projectType, setProjectType] = useState("Ecommerce");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [bookReel, setBookReel] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {

    if (!window.grecaptcha) {
      toast.error("Captcha not loaded. Please try again.");
      return;
    }

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "lead_form" }
    );

    const captchaRes = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    if (!captchaRes.ok) {
      toast.error("Captcha verification failed");
      return;
    }

      const res = await fetch("/api/send-msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          phone,
          bookReel,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }
      localStorage.setItem("contact-form", JSON.stringify({ isFilled: true }));
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setProjectType("Ecommerce");
      setBookReel(false);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
    } finally {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_form_success",
        form_name: "survey_form",
      });
      setLoading(false);
    }
  };

  return (
    <section
      className="
        w-full pt-24 pb-4 px-6
        bg-white text-black
        dark:bg-[#1B1918] dark:text-white
        flex flex-col gap-8 border-t-2
      "
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Let’s Build Your <br />
            <span className="italic">Next Campaign.</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-md">
            Whether you need a full-scale brand film, an ecommerce catalog
            overhaul, or AI-driven content, we are ready to partner with you.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6 text-sm tracking-wide">
            {/* NEW BUSINESS */}
            <div>
              <p className="font-semibold text-foreground">NEW BUSINESS</p>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <p className="text-gray-600 dark:text-gray-400">
                  contact@paahiproductions.in
                </p>

                <Link href="mailto:contact@paahiproductions.in">
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto px-2 text-primary"
                  >
                    Contact Us Now →
                  </Button>
                </Link>
              </div>
            </div>

            {/* SHOWREEL CALL */}
            <div>
              <p className="font-semibold text-foreground">SHOWREEL CALL</p>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <p className="text-gray-600 dark:text-gray-400">
                  +91 82966-69344
                </p>

                <Link href="tel:+918296669344">
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto px-2 text-primary"
                  >
                    Call Us For Enquiry →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            p-8 rounded-xl space-y-6
            bg-gray-100 dark:bg-[#231F1D]
            border border-gray-300 dark:border-gray-800
          "
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400">
                NAME
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full mt-1 px-3 py-2 text-sm rounded-md
                  bg-white dark:bg-transparent
                  border border-gray-300 dark:border-gray-700
                  focus:outline-none focus:border-gray-500
                "
              />
            </div>

            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full mt-1 px-3 py-2 text-sm rounded-md
                  bg-white dark:bg-transparent
                  border border-gray-300 dark:border-gray-700
                  focus:outline-none focus:border-gray-500
                "
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              placeholder="+91 xxxxx-xxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                  w-full mt-1 px-3 py-2 text-sm rounded-md
                  bg-white dark:bg-transparent
                  border border-gray-300 dark:border-gray-700
                  focus:outline-none focus:border-gray-500
                "
            />
          </div>
          {/* Project Type */}
          <div>
            <label className="text-xs text-gray-600 dark:text-gray-400">
              PROJECT TYPE
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="
                w-full mt-1 px-3 py-2 text-sm rounded-md
                bg-white dark:bg-transparent
                border border-gray-300 dark:border-gray-700
                focus:outline-none focus:border-gray-500
              "
            >
              <option className="bg-white dark:bg-black" value={"ecommere"}>
                Ecommerce
              </option>
              <option className="bg-white dark:bg-black" value={"brand"}>
                Brand
              </option>
              <option className="bg-white dark:bg-black" value={"Food"}>
                Food & Drink
              </option>
              <option className="bg-white dark:bg-black" value={"Jewellery"}>
                Jewellery
              </option>
              <option className="bg-white dark:bg-black" value={"Fashion"}>
                Fashion
              </option>
              <option className="bg-white dark:bg-black" value={"Model"}>
                Model
              </option>
              <option className="bg-white dark:bg-black" value={"Real Estate"}>
                Real Estate
              </option>
              <option className="bg-white dark:bg-black" value={"AI Services"}>
                AI Services
              </option>
              <option className="bg-white dark:bg-black" value={"other"}>
                Other
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-xs text-gray-600 dark:text-gray-400">
              MESSAGE
            </label>
            <textarea
              placeholder="Tell us about your vision..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full mt-1 px-3 py-2 text-sm rounded-md
                bg-white dark:bg-transparent
                border border-gray-300 dark:border-gray-700
                focus:outline-none focus:border-gray-500
              "
            ></textarea>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
            <input
              checked={bookReel}
              onChange={(e) => setBookReel(e.target.checked)}
              type="checkbox"
              className="
                w-4 h-4 rounded 
                border-gray-400 dark:border-gray-600 
                bg-white dark:bg-transparent
              "
            />
            I want to book a showreel presentation
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full mt-4 py-3 rounded-md font-semibold tracking-wide
              bg-black text-white 
              dark:bg-white dark:text-black
              hover:bg-gray-800 dark:hover:bg-gray-200
              transition
            "
          >
            {loading ? "SENDING..." : "SEND INQUIRY →"}
          </button>
        </form>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t mt-10 pt-5 border-gray-300 dark:border-[#231F1D] w-full">
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col gap-10 items-center justify-between text-center md:text-left">
          {/* LEFT – LOGO + ABOUT */}
          <div>
            <Image
              src={logo_light.src}
              alt="Pahhi Logo"
              width={100}
              height={40}
              className="hidden dark:block"
            />
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-sm">
              A luxury content studio based in Bengaluru. We craft stories that
              move people and build brands.
            </p>
          </div>

          {/* CENTER – STUDIO INFO */}
          <div>
            <h3 className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
              STUDIO
            </h3>
            <div className="mt-4 space-y-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                26A, 1st Floor, 22, Patel Ram Reddy Rd, <br /> K.R.Colony,
                Domlur I Stage, Bengaluru
              </p>
              <a href="tel:+918296669344" className="mt-2">
                +91 8296669344
              </a>
            </div>
          </div>

          {/* RIGHT – LINKS */}
          <div className="flex max-md:flex-col text-center justify-center gap-5 items-start">
            <div>
              <h3 className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
                LINKS
              </h3>
              <ul className="mt-4 grid md:grid-cols-2 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Ecommerce", "/ecommerce"],
                  ["Fashion", "/fashion"],
                  ["Jewellery", "/jewellery"],
                  ["Brand Campaigns", "/brand-campaigns"],
                  ["Food & Drink", "/food-and-drink"],
                  ["Ai Services", "/ai-services"],
                  ["Contact Us", "/contact"],
                ].map(([name, link]) => (
                  <Link key={link} href={link}>
                    <li
                      key={name}
                      className="hover:text-black dark:hover:text-white transition cursor-pointer"
                    >
                      {name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
                Privacy
              </h3>
              <ul className="mt-4 text-center space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <Link href={"/privacy"}>
                  <li className="hover:text-black dark:hover:text-white transition cursor-pointer">
                    Privacy Policy
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
