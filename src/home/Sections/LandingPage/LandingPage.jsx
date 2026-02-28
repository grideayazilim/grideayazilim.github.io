import { useEffect, useRef } from "react";
import { ABOUT_ITEMS } from "../../../data/about-us-details";
import { useNeonCanvas } from "./useNeonCanvas";
import "./LandingPage.scss";

// ─── Scroll süre ayarları ─────────────────────────────────────
//
//  VH_PER_ITEM : her item geçişinin scroll mesafesi (× 100vh)
//    1 = hızlı (1 tam scroll = 1 geçiş)
//    2 = rahat  ← şu an bu
//    3 = yavaş
//
const ITEM_COUNT  = ABOUT_ITEMS.length;          // 3
const VH_PER_ITEM = 1;                           // ← buradan ayarla
const TOTAL_STEPS = 1 + ITEM_COUNT * VH_PER_ITEM + 1; // hero(1) + items + nefes(1)

const clamp01  = (v)       => Math.max(0, Math.min(1, v));
const mapRange = (v, a, b) => clamp01((v - a) / (b - a));


// ─── Bileşen ──────────────────────────────────────────────────
function LandingPage() {
  const canvasRef      = useRef(null);
  const wrapperRef     = useRef(null);
  const heroContentRef = useRef(null);
  const aboutLayerRef  = useRef(null);
  const itemRefs       = useRef([]);

  useNeonCanvas(canvasRef);

  useEffect(() => {
    const wrapper     = wrapperRef.current;
    const heroContent = heroContentRef.current;
    const aboutLayer  = aboutLayerRef.current;
    if (!wrapper || !heroContent || !aboutLayer) return;

    const tick = () => {
      const scrolled   = -wrapper.getBoundingClientRect().top;
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const progress   = clamp01(scrolled / scrollable) * TOTAL_STEPS;

      // ── Katman 1: Hero çıkışı ──────────────────────────────
      const heroP = mapRange(progress, 0, 1);
      heroContent.style.opacity   = String(1 - heroP);
      heroContent.style.filter    = `blur(${heroP * 20}px)`;
      heroContent.style.transform = `scale(${1 + heroP * 0.4})`;

      const hintEl = heroContent.querySelector(".lp-hint");
      if (hintEl) hintEl.style.opacity = String(Math.max(0, 1 - heroP * 3));

      // ── Katman 2: About girişi ─────────────────────────────
      const aboutInP = mapRange(progress, 0.4, 1);
      aboutLayer.style.opacity = String(aboutInP);
      aboutLayer.style.filter  = `blur(${(1 - aboutInP) * 12}px)`;

      // ── About item geçişleri ───────────────────────────────
      // (progress - 1) : hero bölümü geçtikten sonraki scroll
      // VH_PER_ITEM ile bölerek her geçişin kaç 100vh sürdüğünü ayarlıyoruz
      const itemProgress = (progress - 1) / VH_PER_ITEM;
      const activeIndex  = Math.min(Math.floor(itemProgress), ITEM_COUNT - 1);
      const localP       = itemProgress - Math.floor(itemProgress);


      itemRefs.current.forEach((el, i) => {
        if (!el) return;

        if (i < activeIndex) {
          // Geçmiş → sola kayıp gitmiş
          el.style.opacity   = "0";
          el.style.filter    = "blur(16px)";
          el.style.transform = "translateX(-70px)";
        } else if (i === activeIndex) {
          if (i === ITEM_COUNT - 1) {
            // Son item — asla kaybolmaz
            el.style.opacity   = "1";
            el.style.filter    = "blur(0px)";
            el.style.transform = "translateX(0px)";
          } else {
            // Aktif → gidiyor (ease-in)
            const go = localP * localP;
            el.style.opacity   = String(1 - go);
            el.style.filter    = `blur(${go * 16}px)`;
            el.style.transform = `translateX(${-70 * go}px)`;
          }
        } else if (i === activeIndex + 1) {
          // Geliyor → sağdan giriş (ease-out)
          const come = 1 - Math.pow(1 - localP, 2);
          el.style.opacity   = String(come);
          el.style.filter    = `blur(${(1 - come) * 16}px)`;
          el.style.transform = `translateX(${70 * (1 - come)}px)`;
        } else {
          // Henüz gelmedi
          el.style.opacity   = "0";
          el.style.filter    = "blur(16px)";
          el.style.transform = "translateX(70px)";
        }
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <div id="lp-wrapper" className="lp-wrapper" ref={wrapperRef}>
      <div className="lp-sticky">

        <canvas ref={canvasRef} className="lp-canvas" />

        {/* Katman 1 — Hero */}
        <div className="lp-hero" ref={heroContentRef}>
          <h1 className="text-gradient text-gradient--blue">Gridea Yazılım</h1>
          <p className="lp-hint">
            <span className="lp-hint__arrow">↓</span>
            keşfetmek için kaydır
          </p>
        </div>

        {/* Katman 2 — Hakkımızda */}
        <div
          className="lp-about"
          ref={aboutLayerRef}
          style={{ opacity: 0, filter: "blur(12px)" }}
        >
          <div className="lp-about__left">
            <h1 className="text-gradient text-gradient--blue">Hakkımızda</h1>
          </div>
          <div className="lp-about__right">
            {ABOUT_ITEMS.map((item, i) => (
              <div
                key={item.id}
                className="lp-about__card"
                ref={(el) => (itemRefs.current[i] = el)}
                style={{
                  opacity:   i === 0 ? 1 : 0,
                  filter:    i === 0 ? "blur(0px)"  : "blur(16px)",
                  transform: i === 0 ? "translateX(0)" : "translateX(70px)",
                }}
              >
                <h3>{item.label}</h3>
                {item.paragraphs.map((text, pi) => (
                  <p key={pi}>{text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
