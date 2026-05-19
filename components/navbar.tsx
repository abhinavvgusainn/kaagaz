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
        <a href="tel:+917878302665" className="hidden xl:flex">
          <button className="px-4 py-2 rounded-md flex items-center gap-x-3 text-gray-800">
            91 78783 02665
          </button>
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