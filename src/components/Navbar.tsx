"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Tentang Kami", target: "tentang" },
    { label: "Layanan", target: "layanan" },
  ];

  // Handle scroll to add frosted effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleScrollTo = (target: string) => {
    const element = document.getElementById(target);
    if (!element) return;

    const yOffset = 0; // OFFSET (sesuain aja ama tinggi navbar)
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src="/assets/ids-main-logo.svg"
                alt="IDS Logo"
                className="h-11 w-auto cursor-pointer"
                onClick={() => handleScrollTo("home")}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.target}
                  onClick={() => handleScrollTo(item.target)}
                  className="text-(--color-secondary) cursor-pointer hover:text-(--color-primary) font-semibold text-base transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleScrollTo("hubungi-kami")}
                className="text-(--color-secondary) bg-(--color-button) hover:bg-button/70 cursor-pointer font-semibold rounded-lg px-6 py-2.5 transition-colors duration-200"
              >
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 relative w-full h-full">
                <span
                  className={`absolute h-0.5 w-full bg-[#240046] transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3.5" : "top-1"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-[#240046] top-3.5 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-[#240046] transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 bottom-3.5" : "bottom-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay + Top Sheet (Mobile) */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Top Panel */}
          <div className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden shadow-2xl animate-slideDown rounded-b-2xl">
            <div className="px-6 pt-6 pb-8">
              {/* Header row inside sheet */}
              <div className="flex items-center justify-between mb-6">
                <img
                  src="/assets/ids-main-logo.svg"
                  alt="IDS Logo"
                  className="h-9"
                  onClick={() => handleScrollTo("home")}
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <div className="relative w-6 h-6">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#240046] rotate-45" />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#240046] -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Menu items */}
              <ul className="space-y-5 font-semibold text-base text-(--color-secondary)">
                {navItems.map((item) => (
                  <li
                    key={item.target}
                    className="hover:text-(--color-primary) transition-colors cursor-pointer"
                  >
                    <a
                      onClick={() => handleScrollTo(item.target)}
                      className="block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => handleScrollTo("hubungi-kami")}
                    className="w-full text-(--color-secondary) bg-(--color-button) hover:bg-button/70 px-6 py-3 rounded-lg transition-colors font-semibold"
                  >
                    Hubungi Kami
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
