import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
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
        {/* Introduction */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Introduction</p>
            <p>
              Welcome to Paahi Productions Private Limited ("we," "our," or
              "us") is a creative production and marketing agency based in
              Bengaluru, committed to protecting your personal information and
              respecting your privacy.
            </p>
            <p>
              This Privacy Policy applies to our website{" "}
              <strong>https://paahiproductions.in</strong> (the “Site”) and
              governs how we collect, use, and safeguard information when you
              visit our Site, request a quote, or engage with our marketing
              campaigns.
            </p>
            <p>
              By accessing our website or submitting your details via our lead
              forms, you consent to the data practices described in this policy.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
              Information We Collect
            </p>
            <p>
              We collect personal data to provide you with accurate service
              quotes, creative proposals, and relevant updates.
            </p>

            <p className="font-medium text-foreground">
              A. Personal Information You Provide
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Identity Data:</strong> Name, Company Name
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, Phone number
              </li>
              <li>
                <strong>Business Data:</strong> Project requirements (e.g.
                E-commerce photography, Brand Films, AI services), budget
                estimates, and other details shared in your messages
              </li>
            </ul>

            <p className="font-medium text-foreground">
              B. Information Automatically Collected
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Device Data:</strong> IP address, browser type,
                operating system, and device model
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages,
                click patterns, and referring websites
              </li>
            </ul>
            <p className="font-medium text-foreground">
              C. Cookies & Tracking Technologies
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Google Analytics 4 (GA4):</strong> To understand user
                behavior and website performance
              </li>
              <li>
                <strong>Advertising Pixels:</strong> Google Ads, Facebook (Meta)
                Pixel, and LinkedIn Insight Tag for conversion tracking and
                retargeting
              </li>
              <li>
                <strong>Other Marketing Tools:</strong> Additional tracking
                tools may be used to optimize campaigns
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
               How We Use Your Information
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Service Fulfillment:</strong> Responding to inquiries,
                scheduling consultations, and delivering services
              </li>
              <li>
                <strong>Lead Generation & Marketing:</strong> Sending proposals,
                case studies, and relevant offers
              </li>
              <li>
                <strong>Campaign Optimization:</strong> Evaluating performance
                across channels like Google Search and LinkedIn
              </li>
              <li>
                <strong>Legal Compliance:</strong> Meeting applicable Indian
                legal and regulatory requirements
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
              How We Share Your Information
            </p>
            <p>
              We do not sell, rent, or trade your personal information to third
              parties.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Trusted Service Providers:</strong> Secure vendors such
                as hosting, CRM, and email platforms
              </li>
              <li>
                <strong>Legal Obligations:</strong> Disclosure when required by
                law
              </li>
              <li>
                <strong>Business Transfers:</strong> Data may transfer during
                mergers or acquisitions
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookie Management */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
              Your Choices and Cookie Management
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Browser Settings:</strong> You can disable cookies via
                your browser, which may affect site functionality
              </li>
              <li>
                <strong>Ad Settings:</strong> Opt out of personalized ads via
                Google, Facebook, and LinkedIn
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Data Security</p>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data. However, no internet transmission is
              100% secure.
            </p>
          </CardContent>
        </Card>

        {/* Rights */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Your Rights</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access and correction of your personal data</li>
              <li>Request deletion of stored data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </CardContent>
        </Card>

        {/* Third-party Links */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
              Third-Party Links
            </p>
            <p>
              Our website may contain links to external platforms such as
              Instagram, LinkedIn, or YouTube. We are not responsible for their
              privacy practices.
            </p>
          </CardContent>
        </Card>

        {/* Jurisdiction */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
              Jurisdiction and Governing Law
            </p>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts in
              Bengaluru, Karnataka.
            </p>
            <p className="text-xs text-muted-foreground">
              Last updated: January 2026
            </p>
          </CardContent>
        </Card>

        {/* Contact Us */}
        <Card>
          <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Contact Us</p>

            <p>
              If you have any questions about this Privacy Policy or wish to
              exercise your data rights, please contact us using the details
              below:
            </p>

            <div className="space-y-2">
              <p className="font-medium text-foreground">
                Paahi Productions Private Limited
              </p>

              <p>
                <strong>Address:</strong> 26A, 1st Floor, 22, Patel Ram Reddy
                Rd, K.R. Colony, Domlur I Stage, Bengaluru, Karnataka 560071
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@paahiproductions.in"
                  className="underline underline-offset-2"
                >
                  contact@paahiproductions.in
                </a>
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+918296669344"
                  className="underline underline-offset-2"
                >
                  +91 82966 69344
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
