import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-50 to-white lg:pb-24"
    >
      <div className="container mx-auto lg:px-12 h-full pt-20 md:pt-24 lg:pt-28">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col pt-4 pb-8 relative">
          <div className="space-y-6 text-center mb-8 relative z-10">
            <h1 className="font-extrabold text-3xl leading-tight text-(--color-secondary)">
              Solusi Aggregator
              <br />
              <span className="text-(--color-primary)">PPOB Terpercaya</span>
              <br />
              untuk Bisnis Modern
            </h1>

            <p className="text-sm text-(--color-secondary) leading-relaxed px-2">
              <span className="font-bold">INOVASI DIGITAL SELEKTIF</span> adalah
              perusahaan Biller Aggregator PPOB yang menghadirkan ekosistem
              pembayaran digital yang aman, efisien, dan terintegrasi. Kami
              membantu mitra bisnis mengelola berbagai layanan pembayaran dalam
              satu platform yang andal untuk mendukung pertumbuhan dan
              skalabilitas usaha.
            </p>

            <a href="#hubungi-kami">
              <button className="text-(--color-secondary) mb-5 bg-(--color-button) hover:bg-button/90 font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Hubungi Kami
              </button>
            </a>
            <a href="#layanan">
              <button className="text-(--color-primary) bg-white border border-(--color-primary) font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Lihat Layanan
              </button>
            </a>
          </div>

          <div className="relative w-full -mt-16 mb-2 z-0">
            <img
              src="/assets/hero/cewe-cewe-hero-mobile.svg"
              alt="Business professionals discussing"
              className="w-full h-auto max-w-xl mx-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight text-(--color-secondary)">
              Solusi Aggregator
              <br />
              <span className="text-(--color-primary)">PPOB Terpercaya</span>
              <br />
              untuk Bisnis Modern
            </h1>

            <p className="text-lg text-justify text-(--color-secondary) leading-relaxed">
              <span className="font-bold">INOVASI DIGITAL SELEKTIF</span> adalah
              perusahaan Biller Aggregator PPOB yang menghadirkan ekosistem
              pembayaran digital yang aman, efisien, dan terintegrasi. Kami
              membantu mitra bisnis mengelola berbagai layanan pembayaran dalam
              satu platform yang andal untuk mendukung pertumbuhan dan
              skalabilitas usaha.
            </p>
            <div className="text-(--color-secondary)">
              <a href="#hubungi-kami">
                <button className="text-(--color-secondary) bg-(--color-button) hover:bg-button/90 cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Hubungi Kami
                </button>
              </a>
              <a href="#layanan" className="ml-4">
                <button className="bg-transparent border-2 text-(--color-primary) border-(--color-primary) cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Lihat Layanan
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Image positioned at top-right corner */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[51.72%]">
            <Image
            width={1000}
            height={1000}
              src="/assets/hero/bg-hero.png"
              alt="Business professionals discussing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
