"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { ModeToggle as ThemeButton } from "./ui/ThemeButton";
import Image from "next/image";
import logo_light from "@/public/pahi_light.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled,setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed z-[90] text-black dark:text-white py-5 px-9 flex justify-between items-center transition-all transition-colors ${scrolled ? "bg-white/60 dark:bg-black/60 backdrop-filter backdrop-blur-lg":"bg-transparent"}`}>
      {/* Logo */}
      <Link href={"/"}>
      <div className="font-semibold text-xl">
        <Image 
        src={logo_light.src}
        alt="Pahhi Logo"
        width={100}
        height={35}
        className="hidden dark:block"
        />
      </div>
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Ecommerce", "/ecommerce"],
          ["Fashion", "/fashion"],
          ["Jewellery", "/jewellery"],
          ["Brand Campaigns", "/brand-campaigns"],
          ["Food & Drink", "/food-and-drink"],
          ["Ai Services", "/ai-services"],
        ].map(([label, href]) => (
          <li key={href}>
            <Link
              onClick={() => setOpen(false)}
              className="uppercase outline-none text-sm hover:font-semibold duration-200"
              href={href}
            >
              {label}
            </Link>
          </li>
          
        ))}
          <li>
              <Link
                onClick={() => setOpen(false)}
                className="uppercase text-sm hover:font-semibold duration-200"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </li>
        {/* Dark / Light Toggle */}
        {/* <li>
          <ThemeButton />
        </li> */}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex gap-5 items-center">
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-6 h-[2px] bg-black dark:bg-white transition ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-black dark:bg-white transition ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-black dark:bg-white transition ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>
{/* <ThemeButton /> */}
</div>
      {/* Mobile Menu */}
      <div
        className={`absolute z-50 top-[70px] left-0 w-full bg-white/70 dark:bg-black/80 backdrop-blur-md md:hidden transition-all duration-300 ${
          open ? "min-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-5 py-5 text-black dark:text-white">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Ecommerce", "/ecommerce"],
            ["Fashion", "/fashion"],
            ["Jewellery", "/jewellery"],
            ["Brand Campaigns", "/brand-campaigns"],
            ["Food & Drink", "/food-and-drink"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link
                onClick={() => setOpen(false)}
                className="uppercase text-sm hover:font-semibold duration-200"
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
              <Link
                onClick={() => setOpen(false)}
                className="uppercase text-sm hover:font-semibold duration-200"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
