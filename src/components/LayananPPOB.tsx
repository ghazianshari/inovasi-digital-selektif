"use client";
import { useState } from "react";

const LayananPPOB = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const layanan = [
    {
      icon: "/assets/layanan/pulsa.svg",
      title: "Pulsa & Paket Data",
      description:
        "Isi ulang pulsa dan paket data semua operator seluler dengan harga bersaing.",
    },
    {
      icon: "/assets/layanan/bpjs.svg",
      title: "Jaminan Sosial & Kesehatan",
      description:
        "Pembayaran iuran BPJS Kesehatan dan Ketenagakerjaan yang praktis.",
    },
    {
      icon: "/assets/layanan/wifi.svg",
      title: "Internet & Telkom",
      description:
        "Bayar tagihan IndiHome, telepon rumah, dan penyedia internet lainnya.",
    },
    {
      icon: "/assets/layanan/voucher-game.svg",
      title: "Voucher Game",
      description:
        "Top up voucher game online dan layanan streaming hiburan digital.",
    },
    {
      icon: "/assets/layanan/listrik-air.svg",
      title: "Tagihan Listrik & Air",
      description:
        "Layanan pembayaran PLN pascabayar, token listrik, dan tagihan PDAM berbagai wilayah.",
    },
    {
      icon: "/assets/layanan/multifinance.svg",
      title: "Multifinance",
      description:
        "Angsuran kredit kendaraan dan pinjaman dari berbagai leasing terkemuka.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % layanan.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + layanan.length) % layanan.length);
  };

  return (
    <section
      id="layanan"
      className="py-16 md:py-24 relative overflow-hidden bg-[#EDF7FF] sleek-zoom-90"
    >
      {/* Background gradient - only bottom half */}
      {/* <div
        className="absolute inset-x-0 bottom-0 h-full z-0"
        style={{
          background:
            "linear-gradient(170deg,rgba(16, 192, 254, 1) 0%, rgba(5, 51, 249, 1) 83%)",
        }}
      /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--color-primary) mb-4">
            Produk & Layanan PPOB
          </h2>
          <h3 className="text-(--color-secondary) text-sm md:text-base mb-4 tracking-wider text-center">
            Satu koneksi, ribuan produk digital. Buka aliran pendapatan baru
            dengan katalog lengkap kami.
          </h3>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {layanan.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-(--color-button) rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center md:justify-start mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-(--color-primary) mb-4 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-(--color-secondary) text-center leading-relaxed text-sm lg:text-base md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {layanan.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 shadow-lg mx-auto max-w-md">
                    <div className="flex justify-center mb-6">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-(--color-primary) mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-(--color-secondary) text-center leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {layanan.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-(--color-button) border-transparent"
                    : "w-2 bg-transparent border-2 border-(--color-button)"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch/Swipe handlers */}
          <div
            className="absolute inset-0 z-10"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              const startX = touch.clientX;

              const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0];
                const diff = startX - touch.clientX;

                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                  document.removeEventListener("touchmove", handleTouchMove);
                }
              };

              document.addEventListener("touchmove", handleTouchMove);
              document.addEventListener(
                "touchend",
                () => {
                  document.removeEventListener("touchmove", handleTouchMove);
                },
                { once: true }
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LayananPPOB;
