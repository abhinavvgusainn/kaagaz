import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="
      sticky
      top-5
      z-50
      mx-6
      md:mx-auto
      xl:w-4/5
      2xl:w-[68%]

      flex
      items-center
      justify-between

      overflow-hidden
      rounded-[24px]

      px-4
      md:px-8
      py-5

      border
      border-white/20

      liquid-glass
      supports-[backdrop-filter]:bg-white/10

      shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      
      before:absolute
      before:inset-0
      before:bg-gradient-to-b
      before:from-white/30
      before:to-white/5
      before:pointer-events-none

      after:absolute
      after:inset-[1px]
      after:rounded-[23px]
      after:border
      after:border-white/10
      after:pointer-events-none
    "
    >
      {/* subtle glow */}
      <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-white/20 blur-3xl pointer-events-none" />

      <Link href="/" className="relative z-10">
        <Image
          src="/logo/logo.png"
          alt="Kaagaz Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform z-10">
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-800 font-medium text-lg">
          <Link
            href={"/"}
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </Link>

          <Link
            href={"/showcase"}
            className="hover:text-blue-500 transition-colors"
          >
            Showcase
          </Link>

          <Link
            href={"/services"}
            className="hover:text-blue-500 transition-colors"
          >
            Services
          </Link>

          <Link
            href={"/story"}
            className="hover:text-blue-500 transition-colors"
          >
            Story
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4 relative z-10">
        <a
          href="https://github.com/abhinavvgusainn"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:flex items-center gap-x-2 px-4 py-2 rounded-md text-gray-800 hover:text-black transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
  <span className="font-medium text-sm">The Developer</span>
</a>

        <Link
          href={"/meeting"}
          className="
          px-6
          py-3
          text-lg

          rounded-[14px]

          border
          border-white/20

          bg-black/70
          backdrop-blur-xl

          text-white

          transition-all
          duration-300

          hover:bg-black/80
          hover:scale-[1.02]

          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        "
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default Navbar;