const TentangKami = () => {
  return (
    <section id="tentang" className="bg-white py-16 md:py-24">
      {/* <div className="container mx-auto px-0"> */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section - Desktop */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="relative">
            <div className="lg:absolute -top-8 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
            <img
              src="/assets/tentang/cewe-ngomong-depan.svg"
              alt="Team collaboration"
              className="relative z-10 w-full h-full rounded-3xl"
            />
          </div>
        </div>

        {/* Image Section - Mobile */}
        <div className="block lg:hidden w-full relative">
          <div className="relative">
            {/* <div className="lg:absolute -top-8 -left-8 w-64 h-64 bg-purple-200 rounded-full opacity-50 blur-3xl"></div> */}
            <img
              src="/assets/tentang/cewe-ngomong-depan-mobile.svg"
              alt="Team collaboration"
              className="relative z-10 w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:pl-12 lg:pr-20 sleek-zoom-90">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--color-primary) mb-6 leading-tight text-center lg:text-left">
            Mitra Strategis dalam Ekosistem Pembayaran Digital
          </h2>

          <p className="text-(--color-secondary) text-base md:text-lg mb-12 leading-relaxed text-center lg:text-justify">
            <span className="font-bold">INOVASI DIGITAL SELEKTIF</span> hadir
            sebagai jembatan teknologi yang menghubungkan ribuan biller dengan
            pelaku bisnis di seluruh Indonesia. Kami memahami bahwa kecepatan
            dan keandalan adalah kunci dalam industri pembayaran digital.
            <br />
            <br />
            Dengan pengalaman bertahun-tahun dalam pengembangan infrastruktur
            PPOB, kami berkomitmen untuk menyediakan solusi yang tidak hanya
            canggih secara teknologi, tetapi juga mudah diakses dan
            menguntungkan bagi mitra bisnis kami.
          </p>

          <div className="flex flex-col md:flex-row gap-9 md:gap-18">
            {/* Visi Section */}
            <div className="flex flex-col items-center lg:items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src="/assets/tentang/visi.svg"
                  alt="Visi Kami"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-(--color-primary) mb-3">
                  Visi Kami
                </h3>
                <p className="text-(--color-secondary) text-md leading-relaxed text-center lg:text-justify">
                  Menjadi mitra infrastruktur pembayaran digital paling
                  tepercaya di Indonesia.
                </p>
              </div>
            </div>

            {/* Misi Section */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/assets/tentang/misi.svg"
                  alt="Misi Kami"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-(--color-primary) mb-3">
                  Misi Kami
                </h3>
                <p className="text-(--color-secondary) text-md leading-relaxed text-center lg:text-justify">
                  Menyederhanakan transaksi digital dengan teknologi mutakhir
                  dan dukungan luar biasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default TentangKami;
