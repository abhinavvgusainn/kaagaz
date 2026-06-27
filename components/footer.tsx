import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-0 md:mx-auto">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-10 border-b border-neutral-100">
          {/* Brand */}
          <div className="flex flex-col gap-3 md:w-1/3">
            <Image
              src={"/logo/kaagaz.png"}
              width={1000}
              height={1000}
              className="w-36"
              alt="Logo"
            />
            <p className="text-neutral-500 text-sm leading-relaxed">
              A full-service digital studio helping businesses grow through
              design, development, and strategy.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/kaagaz.ddn/",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/kaagaz-infinity/",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 border border-neutral-200 px-3 py-1.5 rounded-full hover:border-neutral-400 hover:text-neutral-700 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            <div>
              <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">
                Pages
              </p>
              {[
                { label: "Showcase", href: "/showcase" },
                { label: "Services", href: "/services" },
                { label: "Our Story", href: "/story" },
                { label: "Book a Call", href: "/meeting" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">
                Services
              </p>
              {[
                "Web Design",
                "SEO",
                "Social Media",
                "Email Marketing",
                "PPC",
                "Content",
              ].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">
                Contact
              </p>
              <a
                href="https://github.com/abhinavvgusainn"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-x-2 px-4 py-2 rounded-md text-gray-800 hover:text-black transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="font-medium text-sm">Work with Me</span>
              </a>
              <a
                href="mailto:kaagazinfinity@proton.me"
                className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors"
              >
                kaagazinfinity@proton.me
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 pt-8 text-sm text-neutral-400">
          <span>© 2026 Kaagaz. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-blue-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
