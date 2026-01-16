"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SubmitButton from "@/components/SubmitButton";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export default function ContactPage() {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

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
    const request = await fetch("/api/contact-us", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await request.json();
    if (response.success) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_form_success",
      });
      router.push("/thank-you");
    } else {
      toast.error(response.error);
    }
  };
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Questions, feedback, or support — we’re here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24 space-y-12">
        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <form
                action={handleSubmit}
                className="space-y-4 flex flex-col h-full"
              >
                <Input name="name" required placeholder="Your name" />
                <Input
                  name="email"
                  required
                  type="email"
                  placeholder="Your email"
                />
                <Input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                />
                <Textarea
                  required
                  name="message"
                  placeholder="Write your message here..."
                  rows={8}
                  className="flex-1"
                />
                <SubmitButton className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </SubmitButton>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span>contact@paahiproductions.in</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span>+91 82966 69344</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  Paahi Productions <br />
                  Bengaluru, Karnataka, India
                </span>
              </div>

              <Separator />

              <p>
                Business Hours:
                <br />
                <strong>Mon – Fri:</strong> 9:00 AM – 6:00 PM
              </p>

              <p>
                We usually respond within <strong>24–48 hours</strong>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Google Map */}
        <Card className="pb-0">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full h-[250px] md:h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2406825661196!2d77.63409307491811!3d12.956444987357477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8675b31adb668b2d%3A0x85bec70d1ab25eac!2sPaahi%20Productions%20-%20Production%20Houses%20in%20Bangalore%20%7C%20Fashion%2C%20Product%2C%20eCommerce%2C%20Apparel%2C%20Food%2C%20Jewellery%20Photography!5e0!3m2!1sen!2sin!4v1768587226302!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
