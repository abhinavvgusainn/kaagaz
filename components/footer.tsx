import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-0 md:mx-auto">
        <div className="xl:w-4/5 2xl:w-[68%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-10 border-b border-neutral-100">
            {/* Brand */}
            <div className="flex flex-col gap-3 md:w-1/3">
              <Image src={"/logo/kaagaz.png"} width={1000} height={1000} className="w-36" alt="Logo" />
              <p className="text-neutral-500 text-sm leading-relaxed">
                A full-service digital studio helping businesses grow  through design, development, and strategy.
              </p>
              <div className="flex gap-3 mt-2">
                {[{
                  name: "Instagram",
                  href: "https://www.instagram.com/kaagaz.udp/",
                }, {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/kaagaz-infinity/",
                }].map((social) => (
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
                <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">Pages</p>
                {[
                  { label: "Showcase", href: "/showcase" },
                  { label: "Services", href: "/services" },
                  { label: "Our Story", href: "/story" },
                  { label: "Book a Call", href: "/meeting" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">Services</p>
                {["Web Design", "SEO", "Social Media", "Email Marketing", "PPC", "Content"].map((s) => (
                  <Link key={s} href="/services" className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors">
                    {s}
                  </Link>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">Contact</p>
                <a href="tel:+917878302665" className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors">
                 +91 78783 02665
                </a>
                <a href="mailto:kaagazinfinity@proton.me" className="block text-neutral-500 text-sm mb-2 hover:text-blue-500 transition-colors">
                  kaagazinfinity@proton.me
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 pt-8 text-sm text-neutral-400">
            <span>© 2026 Kaagaz. All Rights Reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
