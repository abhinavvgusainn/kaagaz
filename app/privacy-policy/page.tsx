import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    {
      num: "01",
      title: "Introduction",
      content: (
        <p>
          Welcome to Kaagaz Infinity. This Privacy Policy explains how we handle
          information when you visit our website and use our services. We keep it
          simple because our data practices are simple.
        </p>
      ),
    },
    {
      num: "02",
      title: "Who We Are",
      content: (
        <p>
          Kaagaz Infinity is an independent creative and digital studio operated
          by individuals based in India. We are not a registered legal entity at
          this time.
        </p>
      ),
    },
    {
      num: "03",
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-3">
            We collect minimal personal information, only when you voluntarily
            provide it — typically through our booking system. This may include:
          </p>
          <ul className="space-y-2">
            {["Your name", "Email address", "Phone number"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      num: "04",
      title: "How We Use It",
      content: (
        <>
          <p className="mb-3">Your information is used only to:</p>
          <ul className="space-y-2">
            {[
              "Schedule and manage consultation calls",
              "Communicate with potential clients",
              "Discuss project requirements and services",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">That's it. We don't use it for anything else.</p>
        </>
      ),
    },
    {
      num: "05",
      title: "No Tracking or Cookies",
      content: (
        <p>
          Our website does not use cookies, analytics tools, or tracking
          technologies. Third-party services we use for booking (like Calendly)
          may have their own privacy policies, which we encourage you to review.
        </p>
      ),
    },
    {
      num: "06",
      title: "Data Sharing",
      content: (
        <p>
          We do not sell, rent, or share your personal data with third parties.
          Information is accessed only internally or through our scheduling
          platform for booking purposes.
        </p>
      ),
    },
    {
      num: "07",
      title: "Data Security",
      content: (
        <p>
          We take reasonable steps to protect your information. No method of
          internet transmission is 100% secure — you acknowledge this by using
          our services.
        </p>
      ),
    },
    {
      num: "08",
      title: "International Users",
      content: (
        <p>
          We operate from India but work with clients worldwide. By using our
          website, you consent to your data being processed in India under
          applicable Indian data protection laws.
        </p>
      ),
    },
    {
      num: "09",
      title: "Your Rights",
      content: (
        <p>
          You can request access to your data, ask us to delete it, or withdraw
          consent at any time. Just reach out via the contact below and we'll
          handle it promptly.
        </p>
      ),
    },
    {
      num: "10",
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this policy occasionally. Any changes will be reflected
          on this page with an updated effective date. We won't notify you by
          email, so check back if it matters to you.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors mb-8 inline-flex items-center gap-1">
            ← Back to home
          </Link>
          <div className="mt-6">
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Legal
            </span>
            <h1 className="text-4xl font-semibold text-neutral-900 mt-2">
              Privacy Policy
            </h1>
            <p className="text-neutral-500 mt-3 text-sm">
              Effective date: 1 May 2026
            </p>
          </div>
          <p className="mt-6 text-neutral-600 leading-relaxed border-l-2 border-neutral-200 pl-4">
            We don't do anything sketchy with your data. This page just makes
            that official.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((section, i) => (
            <div
              key={section.num}
              className={`flex gap-8 py-8 ${i !== sections.length - 1 ? "border-b border-neutral-100" : ""}`}
            >
              <span className="text-xs font-mono text-neutral-300 pt-0.5 shrink-0 w-6">
                {section.num}
              </span>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-neutral-900 mb-3">
                  {section.title}
                </h2>
                <div className="text-sm text-neutral-600 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-neutral-900 rounded-2xl px-8 py-8 text-white">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Questions?
          </p>
          <h2 className="text-lg font-semibold mb-1">Get in touch</h2>
          <p className="text-neutral-400 text-sm mb-4">
            If you have any questions about how we handle your data, reach out directly.
          </p>
          <a
            href="mailto:chiragpaliwal53@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            chiragpaliwal53@gmail.com →
          </a>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-neutral-400 mt-8">
          © 2026 Kaagaz Infinity ·{" "}
          <Link href="/terms" className="hover:text-neutral-600 transition-colors">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
}