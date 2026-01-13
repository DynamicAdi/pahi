import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShieldCheck, Cookie, Lock, Globe } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */} 
      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters to us. This page explains how we collect, use,
            and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-24 space-y-10">
        {/* Intro */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong>[Your Website Name]</strong> ("we", "our", or "us") operates
              <strong> [yourdomain.com]</strong>. This Privacy Policy describes
              how we collect, use, and safeguard your information when you use
              our website and services.
            </p>
            <p>
              By accessing or using our services, you agree to the terms of this
              Privacy Policy.
            </p>
            <p className="text-xs">Last updated: [Insert Date]</p>
          </CardContent>
        </Card>

        {/* Info Collected */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p><strong>Personal Information:</strong> Name, email address, phone number,
              billing/shipping address, and payment details (processed securely
              via third-party providers).</p>

            <p><strong>Automatically Collected Information:</strong> IP address,
              browser type, device details, pages visited, time spent, and
              referring URLs.</p>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process transactions and payments</li>
              <li>Improve website performance and user experience</li>
              <li>Send service updates and marketing communications</li>
              <li>Detect fraud and ensure platform security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              Cookies & Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We use cookies, pixels, and similar technologies to remember user
              preferences, analyze traffic, and deliver relevant content and
              advertisements.
            </p>
            <p>
              You can control cookies through your browser settings. Disabling
              cookies may limit certain features.
            </p>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We implement industry-standard security measures to protect your
              data. However, no method of transmission over the internet is
              100% secure.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Rights */}
        <Card>
          <CardHeader>
            <CardTitle>User Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Depending on your location, you may have rights under GDPR, CCPA,
              or other laws, including access, correction, deletion, or data
              portability requests.
            </p>
            <p>
              To exercise your rights, contact us using the information below.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
