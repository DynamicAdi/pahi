"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
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
              <form className="space-y-4 flex flex-col h-full">
                <Input placeholder="Your name" />
                <Input type="email" placeholder="Your email" />
                <Textarea
                  placeholder="Write your message here..."
                  rows={8}
                  className="flex-1"
                />
                <Button className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
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
                <span>support@yourdomain.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span>+91 90000 00000</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  [Your Company Name] <br />
                  Amritsar, Punjab, India
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d424.63410198599996!2d74.86746810777889!3d31.6318566265605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768313693784!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
