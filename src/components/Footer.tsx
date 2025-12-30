export default function Footer() {
  return (
    <footer className="bg-(--color-secondary) sleek-zoom-90">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="w-full mx-auto px-20 py-16">
          <div className="grid grid-cols-4 gap-16">
            {/* Column 1 - Logo & Description */}
            <div className="space-y-6">
              <img
                src="/assets/ids-footer-logo.svg"
                alt="IDS Logo"
                className="h-20 mb-2"
              />
              <p className="font-inter text-white text-base font-light leading-relaxed">
                Platform aggregator PPOB terdepan dengan teknologi modern untuk
                akselerasi bisnis digital Anda.
              </p>
            </div>

            {/* Column 2 - Menu */}
            <div>
              <h3 className="font-urbanist font-bold text-2xl text-white mb-8">
                Menu
              </h3>
              <ul className="space-y-4 font-inter font-light text-white text-base">
                <li className="hover:text-white/80 transition-colors cursor-pointer">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-white/80 transition-colors cursor-pointer">
                  <a href="#tentang">Tentang Kami</a>
                </li>
                <li className="hover:text-white/80 transition-colors cursor-pointer">
                  <a href="#layanan">Layanan</a>
                </li>
                <li className="hover:text-white/80 transition-colors cursor-pointer">
                  <a href="#hubungi-kami">Hubungi kami</a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Hubungi Kami */}
            <div>
              <h3 className="font-urbanist font-bold text-2xl text-white mb-8">
                Hubungi Kami
              </h3>
              <ul className="space-y-5 font-inter font-light text-white text-base">
                <li className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="var(--color-button)"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-white">+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="var(--color-button)"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <span className="text-white">+62 21 555 0123</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="var(--color-button)"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-white">hello@ids.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4 - Alamat Kantor */}
            <div>
              <h3 className="font-urbanist font-bold text-2xl text-white mb-8">
                Alamat Kantor
              </h3>
              <div className="flex items-start gap-4 font-inter font-light text-white text-base">
                <svg
                  className="w-6 h-6 shrink-0 mt-1"
                  fill="var(--color-button)"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p className="leading-relaxed text-white text-sm">
                  Satrio Tower, Lt. 16, Jl. Prof. Dr. Satrio Kav. 1-4
                  <br />
                  Kuningan, Jakarta Selatan, 12950
                  <br />
                  Jl. Sudirman Kav. 50, Jakarta Selatan 12190
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white mt-12 pt-8">
            <p className="text-center font-inter text-white text-sm">
              © 2025 Inovasi Digital Selektif. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-6 py-12">
        {/* Logo & Description */}
        <div className="mb-12">
          <img
            src="/assets/ids-footer-logo.svg"
            alt="IDS Logo"
            className="h-16 mb-6"
          />
          <p className="font-inter text-white font-light leading-relaxed text-base">
            Platform aggregator PPOB terdepan dengan teknologi modern untuk
            akselerasi bisnis digital Anda.
          </p>
        </div>

        {/* Menu, Hubungi Kami, Alamat - Grid Layout */}
        <div className="grid grid-cols-1 gap-10 mb-10">
          {/* Menu */}
          <div>
            <h3 className="font-urbanist font-bold text-2xl text-white mb-6">
              Menu
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-inter font-light text-white text-base">
              <a href="#" className="hover:text-white/80 transition-colors">
                Home
              </a>
              <a
                href="#layanan"
                className="hover:text-white/80 transition-colors"
              >
                Layanan
              </a>
              <a
                href="#tentang"
                className="hover:text-white/80 transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="#hubungi-kami"
                className="hover:text-white/80 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h3 className="font-urbanist font-bold text-2xl text-white mb-6">
              Hubungi Kami
            </h3>
            <ul className="space-y-5 font-inter font-light text-white text-base">
              <li className="flex items-center gap-4 ">
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="var(--color-button)"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="var(--color-button)"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span>+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="var(--color-button)"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>hello@ids.com</span>
              </li>
            </ul>
          </div>

          {/* Alamat Kantor */}
          <div>
            <h3 className="font-urbanist font-bold text-2xl text-white mb-6">
              Alamat Kantor
            </h3>
            <div className="flex items-start gap-4 font-inter font-light text-white text-base">
              <svg
                className="w-6 h-6 shrink-0 mt-1"
                fill="var(--color-button)"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="leading-relaxed">
                Satrio Tower, Lt. 16, Jl. Prof. Dr. Satrio Kav. 1-4, Kuningan,
                Jakarta Selatan, 12950
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white pt-8">
          <p className="text-center font-inter text-white text-sm">
            © 2025 Inovasi Digital Selektif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
