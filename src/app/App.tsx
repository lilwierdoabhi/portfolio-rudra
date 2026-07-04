import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePhoto from "@/imports/e16ff755-5fbf-42d3-9dc1-237778245b25.jpg";
import logoPremiere from "@/imports/premiere-pro.png";
import logoAfterEffects from "@/imports/adobe-after-effects-logo-png_seeklogo-382522-Photoroom.png";
import logoDaVinci from "@/imports/DaVinci_Resolve_Studio.png";
import thumbRealEstate  from "@/imports/Screenshot_2026-07-04_121141.png";
import thumbRealEstate2 from "@/imports/Screenshot_2026-07-04_151854.png";
import thumbRealEstate3 from "@/imports/Screenshot_2026-07-04_152050.png";
import thumbUGC          from "@/imports/image.png";
import thumbPodcastShort from "@/imports/Screenshot_2026-07-04_152515.png";
import thumbTechReview   from "@/imports/Screenshot_2026-07-04_121325.png";
import thumbPromoLong    from "@/imports/Screenshot_2026-07-04_153638.png";
import thumbInfoI        from "@/imports/Screenshot_2026-07-04_153740.png";
import thumbInfoII       from "@/imports/Screenshot_2026-07-04_153718.png";
import thumbMotivational from "@/imports/Screenshot_2026-07-04_153518.png";
import thumbPodcastLong  from "@/imports/Screenshot_2026-07-04_153812-1.png";
import { X, MapPin, Mail, Instagram, Play, ChevronRight, Youtube, ExternalLink, Linkedin } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const shortForm = [
  { category: "Real Estate Ads",   title: "Real Estate Ad",       thumb: thumbRealEstate,   embed: "https://player.vimeo.com/video/1206938108" },
  { category: "Real Estate Ads",   title: "Real Estate Ad II",    thumb: thumbRealEstate2,  embed: "https://player.vimeo.com/video/1206938111" },
  { category: "Real Estate Ads",   title: "Real Estate Ad III",   thumb: thumbRealEstate3,  embed: "https://player.vimeo.com/video/1206938102" },
  { category: "Tech Review",       title: "Aesthetic Headphones", thumb: thumbTechReview,   embed: "https://player.vimeo.com/video/1206938099" },
  { category: "Podcast",           title: "Podcast Clip",         thumb: thumbPodcastShort, embed: "https://player.vimeo.com/video/1206938101" },
  { category: "UGC",               title: "UGC Ad",               thumb: thumbUGC,          embed: "https://player.vimeo.com/video/1206938100" },
  { category: "Promotional Video", title: "AI Gen Promo Ad",      thumb: thumbPromoLong,    embed: "https://player.vimeo.com/video/1206938146" },
];

const longForm = [
  { category: "Podcast",       title: "Podcast Episode",               thumb: thumbPodcastLong,  embed: "https://player.vimeo.com/video/1206937970" },
  { category: "Informational", title: "Informational — Contracts",     thumb: thumbInfoI,         embed: "https://player.vimeo.com/video/1206938117" },
  { category: "Informational", title: "Informational — Communication", thumb: thumbInfoII,        embed: "https://player.vimeo.com/video/1206938116" },
  { category: "Motivational",  title: "Motivational Video",            thumb: thumbMotivational,  embed: "https://player.vimeo.com/video/1206938170" },
];

const software = [
  { name: "Premiere Pro",    logo: logoPremiere,     color: "#9999ff", bg: "rgba(153,153,255,0.08)", level: "Advanced" },
  { name: "After Effects",   logo: logoAfterEffects, color: "#9b8fff", bg: "rgba(155,143,255,0.08)", level: "Intermediate" },
  { name: "DaVinci Resolve", logo: logoDaVinci,      color: "#e8a237", bg: "rgba(232,162,55,0.08)",  level: "Intermediate" },
];

const niches = ["Podcasts", "Real Estate", "Vlogs", "Product Reviews"];
const languages = ["English", "Hindi"];

const contactLinks = [
  { href: "mailto:workwithrudra777@gmail.com",          label: "Email",     display: "workwithrudra777@gmail.com", icon: "mail" },
  { href: "https://www.instagram.com/iabhinavvsingh/",  label: "Instagram", display: "@Rudra",                    icon: "instagram" },
  { href: "https://www.linkedin.com/in/lilwierdorudra/",label: "LinkedIn",  display: "Rudra",                     icon: "linkedin" },
  { href: "https://www.behance.net/rudrapratap112",      label: "Behance",   display: "rudrapratap112",            icon: "behance" },
  { href: "https://x.com/iabhinavvsingh",                label: "X",         display: "@iabhinavvsingh",           icon: "x" },
];

const COUNTRIES = [
  { code: "IN", dial: "+91",  flag: "🇮🇳" },
  { code: "US", dial: "+1",   flag: "🇺🇸" },
  { code: "GB", dial: "+44",  flag: "🇬🇧" },
  { code: "AE", dial: "+971", flag: "🇦🇪" },
  { code: "CA", dial: "+1",   flag: "🇨🇦" },
  { code: "AU", dial: "+61",  flag: "🇦🇺" },
  { code: "SG", dial: "+65",  flag: "🇸🇬" },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type Video = { category: string; title: string; thumb: unknown; embed: string };

// ─── Shared UI ────────────────────────────────────────────────────────────────

function LiveDot() {
  return <span className="w-2 h-2 rounded-full flex-shrink-0"
    style={{ background: "#34d399", animation: "pulse-green 2s infinite" }} />;
}

function VerifiedBadge({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color: "#ff3d2e", flexShrink: 0 }}>
      <path d="M12 2l2.4 2.1 3.1-.4 1 3 2.9 1.3-.6 3.1 1.9 2.5-1.9 2.5.6 3.1-2.9 1.3-1 3-3.1-.4L12 22l-2.4-2.1-3.1.4-1-3-2.9-1.3.6-3.1L1.3 12l1.9-2.5-.6-3.1 2.9-1.3 1-3 3.1.4L12 2z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M8.5 12.2l2.3 2.3 4.7-4.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ContactIcon({ type }: { type: string }) {
  const s = { color: "#7a7a85" };
  if (type === "mail")      return <Mail size={17} style={s} />;
  if (type === "instagram") return <Instagram size={17} style={s} />;
  if (type === "linkedin")  return <Linkedin size={17} style={s} />;
  if (type === "behance")   return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={s}>
      <path d="M2 7h6.5C10.4 7 12 8.1 12 10s-1.6 3-3.5 3H2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 13h7.5C11.9 13 14 14.3 14 16.5S11.9 20 9.5 20H2v-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M16 9h6M22 13.5c0 1.9-1.3 3.5-3 3.5s-3-1.6-3-3.5 1.3-3.5 3-3.5 3 1.6 3 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={s}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function SoftwareBadge({ s }: { s: typeof software[0] }) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 border"
      style={{ background: s.bg, borderColor: `${s.color}28` }}>
      <ImageWithFallback src={s.logo as string} alt={s.name} className="w-8 h-8 rounded-lg object-contain flex-shrink-0" />
      <div className="min-w-0">
        <div className="text-[13px] font-semibold leading-none mb-0.5" style={{ color: "#f0ede8" }}>{s.name}</div>
        <div className="text-[11px] mono" style={{ color: s.color, opacity: 0.85 }}>{s.level}</div>
      </div>
    </div>
  );
}

// ─── Video Card & Grid ────────────────────────────────────────────────────────

function VideoCard({ video, aspect, onClick }: { video: Video; aspect: "vertical" | "horizontal"; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative rounded-xl overflow-hidden border cursor-pointer"
      style={{ aspectRatio: aspect === "vertical" ? "9/16" : "16/9", borderColor: "#2a2a30", background: "#161618" }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <ImageWithFallback src={video.thumb as string} alt={video.title}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.75) 100%)" }} />
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: hovered ? "#ff3d2e" : "rgba(13,13,15,0.55)",
            border: `1px solid ${hovered ? "#ff3d2e" : "rgba(255,255,255,0.25)"}`,
            backdropFilter: "blur(4px)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}>
          <Play size={13} fill="white" color="white" style={{ marginLeft: 2 }} />
        </div>
      </div>
      <div className="absolute left-2.5 bottom-2.5 text-[11px] font-semibold text-white px-2 py-1 rounded-md"
        style={{ zIndex: 2, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}>
        {video.category}
      </div>
      <div className="absolute bottom-8 left-2.5 right-2.5 text-xs font-semibold text-white transition-all duration-200"
        style={{ zIndex: 2, opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)" }}>
        {video.title}
      </div>
    </div>
  );
}

function VideoGrid({ videos, aspect, onPlay }: { videos: Video[]; aspect: "vertical" | "horizontal"; onPlay: (v: Video) => void }) {
  if (!videos.length) return <p className="text-center text-sm py-10" style={{ color: "#7a7a85" }}>Nothing here yet.</p>;
  return (
    <div className="grid gap-3" style={{
      gridTemplateColumns: aspect === "vertical"
        ? "repeat(auto-fill, minmax(min(140px, 100%), 1fr))"
        : "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
    }}>
      {videos.map((v) => <VideoCard key={v.title} video={v} aspect={aspect} onClick={() => onPlay(v)} />)}
    </div>
  );
}

function PortfolioSection({ title, videos, aspect, onPlay }: { title: string; videos: Video[]; aspect: "vertical" | "horizontal"; onPlay: (v: Video) => void }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h2>
        <span className="text-xs font-mono" style={{ color: "#7a7a85" }}>{videos.length} videos</span>
      </div>
      <VideoGrid videos={videos} aspect={aspect} onPlay={onPlay} />
    </section>
  );
}

// ─── Modals ───────────────────────────────────────────────────────────────────

function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const isVertical = shortForm.some((v) => v.title === video?.title);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  if (!video) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full rounded-2xl overflow-hidden border"
        style={{ maxWidth: isVertical ? 380 : 900, background: "#000", borderColor: "#2a2a30" }}>
        <button onClick={onClose}
          className="absolute -top-9 right-0 flex items-center gap-1.5 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
          style={{ color: "#f0ede8" }}>
          <X size={13} /> Close
        </button>
        <div style={{ position: "relative", paddingTop: isVertical ? "177.78%" : "56.25%" }}>
          {video.embed ? (
            <iframe src={video.embed} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-center px-6" style={{ color: "#7a7a85" }}>
              <Youtube size={32} style={{ opacity: 0.35 }} />
              <span>No embed link yet for <strong style={{ color: "#f0ede8" }}>{video.title}</strong>.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HireModal({ onClose }: { onClose: () => void }) {
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [showCountryMenu, setShowCountryMenu] = useState(false);
  const [form, setForm] = useState({ name: "", brand: "", email: "", phone: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);

  const field: React.CSSProperties = {
    background: "#1a1a1e", border: "1px solid #2a2a30", borderRadius: 10,
    color: "#f0ede8", outline: "none", width: "100%", padding: "11px 14px", fontSize: 14,
    fontFamily: "inherit",
  };

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center z-50 sm:p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full rounded-t-2xl sm:rounded-2xl border"
        style={{ maxWidth: 520, background: "#111113", borderColor: "#2a2a30", maxHeight: "96dvh", overflowY: "auto" }}>

        {/* Sticky header */}
        <div className="flex items-start justify-between p-5 pb-3 sticky top-0 z-10"
          style={{ background: "#111113", borderBottom: "1px solid #1e1e22" }}>
          <div>
            <h2 className="text-lg font-extrabold mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Work with Rudra</h2>
            <p className="text-xs leading-relaxed" style={{ color: "#7a7a85" }}>
              Send a project inquiry — Rudra will reach out to discuss details.
            </p>
          </div>
          <button onClick={onClose}
            className="ml-3 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            style={{ color: "#7a7a85" }}>
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-16 px-6 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
              style={{ background: "rgba(52,211,153,0.12)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-base font-bold">Inquiry sent!</p>
            <p className="text-sm" style={{ color: "#7a7a85" }}>
              Rudra will reply to <strong style={{ color: "#f0ede8" }}>{form.email}</strong> shortly.
            </p>
            <button onClick={onClose}
              className="mt-3 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
              style={{ border: "1px solid #2a2a30", color: "#f0ede8" }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="px-5 pb-6 pt-4 flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold mb-1.5 block" style={{ color: "#c8c5c0" }}>
                  Your Name <span style={{ color: "#ff3d2e" }}>*</span>
                </label>
                <input required placeholder="John Doe" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} style={field} />
              </div>
              <div>
                <label className="text-[11px] font-semibold mb-1.5 block" style={{ color: "#c8c5c0" }}>
                  Channel / Brand Name
                </label>
                <input placeholder="Optional" value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })} style={field} />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold mb-1.5 block" style={{ color: "#c8c5c0" }}>
                Contact Email <span style={{ color: "#ff3d2e" }}>*</span>
              </label>
              <input required type="email" placeholder="john@example.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} style={field} />
            </div>

            <div>
              <label className="text-[11px] font-semibold mb-1.5 block" style={{ color: "#c8c5c0" }}>
                WhatsApp Number <span style={{ color: "#ff3d2e" }}>*</span>
              </label>
              <div className="flex gap-2 relative">
                <button type="button" onClick={() => setShowCountryMenu((p) => !p)}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border flex-shrink-0 hover:border-red-500/50 transition-colors"
                  style={{ background: "#1a1a1e", borderColor: "#2a2a30", color: "#f0ede8", minWidth: 82 }}>
                  <span className="text-base leading-none">{country.flag}</span>
                  <span className="text-xs mono" style={{ color: "#7a7a85" }}>{country.dial}</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: "#7a7a85", flexShrink: 0 }}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {showCountryMenu && (
                  <div className="absolute top-full left-0 mt-1 rounded-xl border z-20 overflow-hidden"
                    style={{ background: "#1a1a1e", borderColor: "#2a2a30", minWidth: 164 }}>
                    {COUNTRIES.map((c) => (
                      <button key={c.code} type="button"
                        onClick={() => { setCountry(c); setShowCountryMenu(false); }}
                        className="flex items-center gap-2.5 w-full px-3 py-2.5 text-sm text-left hover:bg-white/5 transition-colors"
                        style={{ color: "#f0ede8" }}>
                        <span>{c.flag}</span>
                        <span className="mono text-xs" style={{ color: "#7a7a85" }}>{c.dial}</span>
                        <span className="text-xs" style={{ color: "#9a9a9f" }}>{c.code}</span>
                      </button>
                    ))}
                  </div>
                )}
                <input required type="tel" placeholder="9876543210" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} style={field} />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold mb-1.5 block" style={{ color: "#c8c5c0" }}>
                Project Description <span style={{ color: "#ff3d2e" }}>*</span>
              </label>
              <textarea required rows={4} placeholder="Tell me about your project, timeline, and budget..."
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                style={{ ...field, resize: "none" }} />
            </div>

            <button type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 active:scale-[0.98] transition-all"
              style={{ background: "#2a52fe", color: "#fff" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Loader ───────────────────────────────────────────────────────────────────

function Loader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"idle" | "launch" | "curtain">("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("launch"), 600);
    const t2 = setTimeout(() => setPhase("curtain"), 1800);
    const t3 = setTimeout(() => {
      document.body.style.overflow = "";
      onDone();
    }, 2900);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[999]" style={{ pointerEvents: phase === "curtain" ? "none" : "all" }}>
      {/* Left curtain */}
      <div className="absolute top-0 left-0 h-full w-1/2"
        style={{
          background: "linear-gradient(135deg, #0d0d0f 0%, #161618 100%)",
          transform: phase === "curtain" ? "translateX(-100%)" : "translateX(0)",
          transition: phase === "curtain" ? "transform 0.9s cubic-bezier(0.76,0,0.24,1)" : "none",
        }}>
        <div className="absolute right-0 top-0 bottom-0 w-1.5"
          style={{ backgroundImage: "radial-gradient(circle, #2a2a30 1.5px, transparent 2px)", backgroundSize: "100% 20px", backgroundRepeat: "repeat-y" }} />
      </div>

      {/* Right curtain */}
      <div className="absolute top-0 right-0 h-full w-1/2"
        style={{
          background: "linear-gradient(225deg, #0d0d0f 0%, #161618 100%)",
          transform: phase === "curtain" ? "translateX(100%)" : "translateX(0)",
          transition: phase === "curtain" ? "transform 0.9s cubic-bezier(0.76,0,0.24,1)" : "none",
        }}>
        <div className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ backgroundImage: "radial-gradient(circle, #2a2a30 1.5px, transparent 2px)", backgroundSize: "100% 20px", backgroundRepeat: "repeat-y" }} />
      </div>

      {/* Center seam glow */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          background: "linear-gradient(180deg, transparent, #ff3d2e55, #ff3d2e, #ff3d2e55, transparent)",
          opacity: phase === "curtain" ? 0 : 1,
          transition: "opacity 0.3s ease",
        }} />

      {/* Rocket */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          bottom: phase === "launch" ? "110%" : "42%",
          transition: phase === "launch" ? "bottom 1s cubic-bezier(0.55,0,1,0.45)" : "none",
          opacity: phase === "curtain" ? 0 : 1,
          zIndex: 2,
        }}>
        {/* Flame */}
        <div style={{ order: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            width: 6, height: phase === "launch" ? 52 : 0,
            borderRadius: 99,
            background: "linear-gradient(180deg, #ff3d2e, #ff8c00, transparent)",
            transition: "height 0.25s ease",
            filter: "blur(2px)",
            margin: "0 auto",
          }} />
          <div style={{
            width: 3, height: phase === "launch" ? 30 : 0,
            borderRadius: 99,
            background: "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)",
            transition: "height 0.25s ease 0.05s",
            marginTop: -22, filter: "blur(1px)",
            margin: "0 auto",
          }} />
        </div>

        {/* Rocket SVG */}
        <svg width="56" height="56" viewBox="0 0 52 52" fill="none"
          style={{ order: 0, filter: "drop-shadow(0 0 14px rgba(255,61,46,0.55))" }}>
          <path d="M26 4C26 4 14 16 14 30h24C38 16 26 4 26 4z" fill="#f0ede8"/>
          <path d="M26 4C26 4 20 12 20 18h12C32 12 26 4 26 4z" fill="#ff3d2e"/>
          <circle cx="26" cy="24" r="4" fill="#0d0d0f" stroke="#9999ff" strokeWidth="1.5"/>
          <circle cx="26" cy="24" r="2" fill="#9999ff" opacity="0.5"/>
          <path d="M14 30L8 40h10V30h-4z" fill="#ff3d2e"/>
          <path d="M38 30l6 10H34V30h4z" fill="#ff3d2e"/>
          <rect x="20" y="38" width="12" height="6" rx="2" fill="#2a2a30"/>
          <path d="M22 44l-2 4h12l-2-4H22z" fill="#1e1e22"/>
          <rect x="22" y="28" width="8" height="2" rx="1" fill="#9999ff" opacity="0.6"/>
        </svg>

        {/* Label */}
        <div className="text-[11px] font-semibold uppercase tracking-widest mono"
          style={{ order: 2, color: "#7a7a85", whiteSpace: "nowrap" }}>
          {phase === "launch" ? "Launching…" : "Rudra · Portfolio"}
        </div>
      </div>

      {/* Smoke particles */}
      {phase === "launch" && (
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "38%", zIndex: 2 }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              width: 6 + i * 2, height: 6 + i * 2,
              borderRadius: "50%",
              background: "rgba(255,61,46,0.25)",
              left: (i % 2 === 0 ? -1 : 1) * (8 + i * 5),
              animation: `smoke-${i % 2 === 0 ? "l" : "r"} 0.8s ease-out forwards`,
              animationDelay: `${i * 0.06}s`,
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar content (shared between desktop and mobile) ──────────────────────

function SidebarContent({ onHire }: { onHire: () => void }) {
  return (
    <>
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border" style={{ borderColor: "#2a2a30" }}>
          <ImageWithFallback src={profilePhoto} alt="Rudra"
            className="w-full h-full object-cover" style={{ objectPosition: "center 8%" }} />
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <h1 className="text-lg font-extrabold leading-tight outfit">Rudra</h1>
            <VerifiedBadge size={17} />
          </div>
          <div className="flex items-center gap-1.5">
            <LiveDot />
            <span className="text-[12px] font-medium" style={{ color: "#34d399" }}>Available for work</span>
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "#9a9a9f" }}>
        Video editor & filmmaker with 1 year of experience. Blending creative editing, sound design,
        and motion graphics to craft visual stories that make audiences feel, think, and remember.
      </p>

      <div className="flex items-center gap-2 text-sm" style={{ color: "#7a7a85" }}>
        <MapPin size={14} /> India
      </div>

      <button onClick={onHire}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
        style={{ background: "#f0ede8", color: "#0d0d0f" }}>
        Hire Me <ChevronRight size={14} />
      </button>

      <div style={{ height: 1, background: "#2a2a30" }} />

      <div>
        <div className="text-[10.5px] font-semibold uppercase tracking-widest mb-3 mono" style={{ color: "#7a7a85" }}>Niches</div>
        <div className="flex flex-wrap gap-2">
          {niches.map((n) => (
            <span key={n} className="text-[12.5px] px-3 py-1.5 rounded-lg border"
              style={{ background: "#1e1e22", borderColor: "#2a2a30", color: "#c8c5c0" }}>{n}</span>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[10.5px] font-semibold uppercase tracking-widest mb-3 mono" style={{ color: "#7a7a85" }}>Languages</div>
        <div className="flex gap-2">
          {languages.map((l) => (
            <span key={l} className="text-[12.5px] px-3 py-1.5 rounded-lg border"
              style={{ background: "#1e1e22", borderColor: "#2a2a30", color: "#c8c5c0" }}>{l}</span>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[10.5px] font-semibold uppercase tracking-widest mb-3 mono" style={{ color: "#7a7a85" }}>Software</div>
        <div className="flex flex-col gap-2">
          {software.map((s) => <SoftwareBadge key={s.name} s={s} />)}
        </div>
      </div>

      <div style={{ height: 1, background: "#2a2a30" }} />

      <button onClick={onHire}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border transition-all duration-150 hover:border-red-500 active:scale-[0.98]"
        style={{ background: "transparent", borderColor: "#2a2a30", color: "#c8c5c0" }}>
        Like my work? Contact me!
      </button>
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [showHireModal, setShowHireModal] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <style>{`
        @keyframes pulse-green {
          0%   { box-shadow: 0 0 0 0   rgba(52,211,153,0.55); }
          70%  { box-shadow: 0 0 0 8px rgba(52,211,153,0);    }
          100% { box-shadow: 0 0 0 0   rgba(52,211,153,0);    }
        }
        @keyframes smoke-l {
          0%   { transform: translate(0,0) scale(1); opacity: 0.6; }
          100% { transform: translate(-18px, 24px) scale(2.5); opacity: 0; }
        }
        @keyframes smoke-r {
          0%   { transform: translate(0,0) scale(1); opacity: 0.6; }
          100% { transform: translate(18px, 24px) scale(2.5); opacity: 0; }
        }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2a30; border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: #3a3a42; }
        * { font-family: 'Inter', system-ui, sans-serif; box-sizing: border-box; }
        h1, h2, h3, .outfit { font-family: 'Outfit', sans-serif; }
        .mono { font-family: 'DM Mono', monospace; }
        input::placeholder, textarea::placeholder { color: #4a4a55; }
      `}</style>

      <div className="min-h-screen" style={{ background: "#0d0d0f", color: "#f0ede8" }}>

        {/* ── Mobile profile card (always visible, no hamburger) ── */}
        <div className="lg:hidden" style={{ background: "#111113", borderBottom: "1px solid #2a2a30" }}>

          {/* Top row: photo + name + hire */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-3">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border" style={{ borderColor: "#2a2a30" }}>
              <ImageWithFallback src={profilePhoto} alt="Rudra"
                className="w-full h-full object-cover" style={{ objectPosition: "center 8%" }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-base font-extrabold" style={{ fontFamily: "'Outfit', sans-serif" }}>Rudra</span>
                <VerifiedBadge size={14} />
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <div className="flex items-center gap-1.5">
                  <LiveDot />
                  <span className="text-[11px] font-medium" style={{ color: "#34d399" }}>Available for work</span>
                </div>
                <div className="flex items-center gap-1 text-[11px]" style={{ color: "#7a7a85" }}>
                  <MapPin size={11} /> India
                </div>
              </div>
            </div>
            <button onClick={() => setShowHireModal(true)}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold active:scale-[0.97] transition-transform"
              style={{ background: "#f0ede8", color: "#0d0d0f" }}>
              Hire Me
            </button>
          </div>

          {/* Bio */}
          <p className="text-xs leading-relaxed px-4 pb-3" style={{ color: "#9a9a9f" }}>
            Video editor & filmmaker blending creative editing, sound design, and motion graphics to craft
            visual stories that make audiences feel, think, and remember.
          </p>

          <div style={{ height: 1, background: "#2a2a30", margin: "0 16px" }} />

          {/* Niches – horizontal scroll */}
          <div className="px-4 pt-3 pb-2">
            <div className="text-[9.5px] font-semibold uppercase tracking-widest mb-2 mono" style={{ color: "#7a7a85" }}>Niches</div>
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {niches.map((n) => (
                <span key={n} className="text-[11.5px] px-3 py-1.5 rounded-lg border flex-shrink-0"
                  style={{ background: "#1e1e22", borderColor: "#2a2a30", color: "#c8c5c0" }}>{n}</span>
              ))}
            </div>
          </div>

          {/* Software – horizontal scroll */}
          <div className="px-4 pt-1 pb-4">
            <div className="text-[9.5px] font-semibold uppercase tracking-widest mb-2 mono" style={{ color: "#7a7a85" }}>Software</div>
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {software.map((s) => (
                <div key={s.name} className="flex items-center gap-2 px-3 py-2 rounded-xl border flex-shrink-0"
                  style={{ background: s.bg, borderColor: `${s.color}28` }}>
                  <ImageWithFallback src={s.logo as string} alt={s.name} className="w-6 h-6 rounded-md object-contain flex-shrink-0" />
                  <div>
                    <div className="text-[12px] font-semibold leading-none mb-0.5" style={{ color: "#f0ede8" }}>{s.name}</div>
                    <div className="text-[10px] mono" style={{ color: s.color, opacity: 0.85 }}>{s.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop two-column layout ─────────────────────── */}
        <div className="lg:flex" style={{ minHeight: "100vh" }}>

          {/* Desktop sidebar */}
          <aside className="hidden lg:flex flex-col gap-7 p-8 sticky top-0 h-screen overflow-y-auto relative flex-shrink-0"
            style={{ width: 320, background: "#111113", borderRight: "1px solid #2a2a30" }}>
            {/* Film perforation strip */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5"
              style={{ backgroundImage: "radial-gradient(circle, #2a2a30 1.5px, transparent 2px)", backgroundSize: "100% 20px", backgroundRepeat: "repeat-y", opacity: 0.7 }} />
            <SidebarContent onHire={() => setShowHireModal(true)} />
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 flex flex-col gap-10 p-4 sm:p-6 lg:p-10 pb-16 lg:pb-20">

            {/* REC indicator bar */}
            <div className="flex items-center justify-between pb-4"
              style={{ borderBottom: "1px solid #2a2a30" }}>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#ff3d2e", boxShadow: "0 0 8px rgba(255,61,46,0.55)" }} />
                <span className="text-[10px] font-semibold uppercase tracking-widest mono" style={{ color: "#7a7a85" }}>
                  Portfolio · 2026
                </span>
              </div>
              <span className="text-[10px] mono" style={{ color: "#7a7a85" }}>
                {shortForm.length + longForm.length} projects
              </span>
            </div>

            <PortfolioSection title="Short-Form" videos={shortForm} aspect="vertical"  onPlay={setActiveVideo} />
            <PortfolioSection title="Long-Form"  videos={longForm}  aspect="horizontal" onPlay={setActiveVideo} />

            {/* Contact */}
            <section id="contact" className="pt-8" style={{ borderTop: "1px solid #2a2a30" }}>
              <h2 className="text-2xl font-extrabold mb-6 tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}>Get In Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {contactLinks.map((item) => (
                  <a key={item.label} href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group p-3 rounded-xl border transition-colors duration-150"
                    style={{ background: "#161618", borderColor: "#2a2a30" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ff3d2e")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a30")}>
                    <span className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0"
                      style={{ background: "#1e1e22", borderColor: "#2a2a30" }}>
                      <ContactIcon type={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] mono uppercase tracking-widest mb-0.5" style={{ color: "#7a7a85" }}>{item.label}</div>
                      <div className="text-xs font-semibold truncate transition-colors group-hover:text-red-400">{item.display}</div>
                    </div>
                    <ExternalLink size={11} className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity" />
                  </a>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {activeVideo   && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
      {showHireModal && <HireModal onClose={() => setShowHireModal(false)} />}
      {loading       && <Loader onDone={() => setLoading(false)} />}
    </>
  );
}
