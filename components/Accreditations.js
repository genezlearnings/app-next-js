import { useEffect, useRef } from "react";

export default function Accreditations() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone the images for seamless loop
    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  const logos = [
    { src: "/Malluru-logo.webp", alt: "Malluru Logo" },
    { src: "/dpiit-startup-logo.png", alt: "DPIIT Startup India Logo" },
    { src: "/iso-logo-web.png", alt: "ISO Certification Logo" },
    { src: "/msme-logo-web.png", alt: "MSME Logo" },
    { src: "/startuptn-logo.png", alt: "Startup TN Logo" },
    { src: "/reva-logo.png", alt: "REVA University Logo" },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#7b2979] mb-8 md:mb-12">
          Our Accreditations &amp; Partnerships
        </h2>

        <div ref={scrollerRef} className="scroller" data-animated="true">
          <div className="scroller-inner flex gap-8 md:gap-12 animate-scroll">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 md:p-6 w-[200px] md:w-[280px] h-[100px] md:h-[120px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`object-contain transition-all duration-300 
                    ${
                      logo.src === "/iso-logo-web.png"
                        ? "scale-75 md:scale-75" // Further reduced ISO logo size
                        : logo.src === "/msme-logo-web.png"
                        ? "scale-90 md:scale-90"
                        : logo.src === "/dpiit-startup-logo.png"
                        ? "scale-110 md:scale-110"
                        : "scale-100"
                    }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroller {
          max-width: 100%;
        }

        .scroller-inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: nowrap;
          gap: 2rem;
        }

        .scroller[data-animated="true"] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        .scroller[data-animated="true"] .scroller-inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scroller[data-animated="true"] .scroller-inner {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
