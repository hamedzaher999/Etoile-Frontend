import { useGetPaymentMethods } from "../../../../api/services/home_service/footer";

import dottedEarth from "../../../../assets/dotedEarth.png";

import { footer } from "../../../../constant";

import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const { data: paymentMethods } = useGetPaymentMethods();

  return (
    <footer
      id="contact"
      className="pointer-events-auto relative overflow-hidden border-t border-white/10 bg-black pb-8 pt-24 font-serif"
    >
      {/* shine div */}
      <div className="absolute left-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[140px]" />

      <div className="absolute bottom-[40px] right-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* dotted earth img */}
      <div className="pointer-events-none absolute right-[-40px] top-[50px] z-[1] opacity-50">
        <img src={dottedEarth} alt="earth" className="w-[420px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6">
        <div className="flex flex-wrap justify-between gap-10 border-b border-white/10 pb-16">
          {/* contact */}
          <div className="min-w-[260px] flex-1">
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-purple-300">
              Communication
            </p>

            <h2 className="app-text-gradient text-3xl font-black tracking-tight">
              Contact Info
            </h2>

            <div className="mt-8 space-y-4">
              {Object.keys(footer.contactInfo).map((element) => (
                <div
                  key={element}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-1 h-[7px] w-[7px] rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.5)]" />

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                      {element}
                    </p>

                    <p className="mt-1 text-sm text-white/70 transition-all duration-300 group-hover:text-cyan-300">
                      {footer.contactInfo[element]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* social */}
          <div className="min-w-[260px] flex-1">
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-cyan-300">
              Community
            </p>

            <h2 className="app-text-gradient text-3xl font-black tracking-tight">
              Social Media
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              {Object.keys(footer.socialMedia).map((element) => (
                <div
                  key={element}
                  className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-purple-400/20 bg-black/30">
                      <img
                        src={footer.socialMedia[element].icon}
                        alt=""
                        className="aspect-square h-5 transition-all duration-300 group-hover:scale-90 group-hover:rounded-md"
                      />
                    </div>

                    <p className="text-sm text-white/75 transition-all duration-300 group-hover:text-white">
                      {element}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all duration-300 group-hover:text-cyan-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* links */}
          <div className="min-w-[260px] flex-1">
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-purple-300">
              Navigation
            </p>

            <h2 className="app-text-gradient text-3xl font-black tracking-tight">
              Quick Links
            </h2>

            <div className="mt-8 flex flex-col gap-3">
              {footer.quickLinks.map((element) => (
                <div
                  key={element.name}
                  className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:border-cyan-300/20"
                >
                  <p className="text-sm text-white/70 transition-all duration-300 group-hover:text-white">
                    {element.name}
                  </p>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all duration-300 group-hover:text-cyan-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* payment methods */}
        <div className="mt-14">
          <div className="text-center">
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
              Supported Payment Methods
            </h3>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {paymentMethods?.data?.data.map((element) => (
              <div
                key={element.name}
                className="group flex min-w-[120px] flex-col items-center rounded-[28px] border border-white/10 bg-black/25 py-3 shadow-[0_0_30px_rgba(120,0,255,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/10 bg-white p-3">
                  <img
                    src={element.img_url}
                    alt={element.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-4 text-sm text-white/70 transition-all duration-300 group-hover:text-white">
                  {element.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center lg:flex-row">
          <p className="text-sm leading-[1.8] text-white/45">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            <div className="h-[8px] w-[8px] rounded-full bg-cyan-300" />

            <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
              Luxury Cosmic Chocolate Experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
