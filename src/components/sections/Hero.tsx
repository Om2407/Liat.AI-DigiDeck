
import { motion, AnimatePresence } from 'motion/react';
import { useDeck } from '../DeckEngine';
import { useState, useEffect, useRef } from 'react';
import { useAudience, AUDIENCE_CONFIG, Audience } from '../../context/AudienceContext';

// Free Pexels MP4 videos — no CORS issues, autoplay friendly
const VIDEOS = [
  'https://videos.pexels.com/video-files/3843435/3843435-uhd_2560_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/1581878/1581878-hd_1280_720_25fps.mp4',
];

// Fallback KB images if video fails
const KB_SLIDES = [
  { url: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80&auto=format&fit=crop', label: 'The Avenue — Luxury Retail' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&auto=format&fit=crop', label: 'Live Events — 5,000-Seat Arena' },
  { url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80&auto=format&fit=crop', label: '40M+ Visitors. One Destination.' },
  { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80&auto=format&fit=crop', label: 'World-Class Entertainment' },
];

const AUDIENCE_HERO: Record<Audience, {
  tag: string; headline: string[]; sub: string;
  stats: { num: string; label: string }[];
  cta1: { label: string; section: number };
  cta2: { label: string; section: number };
}> = {
  all: {
    tag: 'East Rutherford, New Jersey',
    headline: ['AMERICAN', 'DREAM'],
    sub: "The Western Hemisphere's most spectacular entertainment & retail destination",
    stats: [
      { num: '40M+', label: 'Annual Visitors' },
      { num: '3M', label: 'Sq Ft' },
      { num: '450+', label: 'Brands' },
      { num: '8mi', label: 'From NYC' },
    ],
    cta1: { label: 'Explore the Opportunity', section: 1 },
    cta2: { label: 'Book a Venue', section: 10 },
  },
  tenant: {
    tag: '🏪 Retail Leasing Opportunity',
    headline: ['YOUR FLAG-', 'SHIP HOME'],
    sub: "Join 450+ brands in the Western Hemisphere's most visited destination — 40M+ shoppers, steps from NYC",
    stats: [
      { num: '40M+', label: 'Annual Footfall' },
      { num: '$180', label: 'Avg Spend / Visit' },
      { num: '4hrs+', label: 'Avg Dwell Time' },
      { num: '2-3×', label: 'Revenue vs Comparable' },
    ],
    cta1: { label: 'View Leasing Opportunities', section: 6 },
    cta2: { label: 'Calculate Your ROI', section: 7 },
  },
  sponsor: {
    tag: '🎯 Brand Sponsorship Platform',
    headline: ['OWN THE', 'MOMENT'],
    sub: '40M+ captive eyeballs. NYC proximity. From digital activations to full venue naming rights.',
    stats: [
      { num: '40M+', label: 'Annual Impressions' },
      { num: '20M', label: 'NYC Metro Reach' },
      { num: '300+', label: 'Events / Year' },
      { num: '#1', label: 'Mall in the US' },
    ],
    cta1: { label: 'View Sponsorship Tiers', section: 11 },
    cta2: { label: 'Audience Insights', section: 1 },
  },
  event: {
    tag: '🎤 Event & Venue Booking',
    headline: ['BOOK THE', 'ARENA'],
    sub: '5,000-seat Performing Arts Center + 300,000 sq ft Expo Hall. Full production. 8 miles from Manhattan.',
    stats: [
      { num: '5K', label: 'Seat Capacity' },
      { num: '300K', label: 'Sq Ft Expo Hall' },
      { num: '200+', label: 'Events / Year' },
      { num: '30K', label: 'Parking Spots' },
    ],
    cta1: { label: 'Book the Venue', section: 10 },
    cta2: { label: 'View Event Packages', section: 10 },
  },
};

export default function Hero() {
  const { go } = useDeck();
  const { audience, setAudience } = useAudience();
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fallback: cycle images if video fails
  useEffect(() => {
    if (!videoFailed) return;
    const t = setInterval(() => setActiveSlide(p => (p + 1) % KB_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [videoFailed]);

  const copy = AUDIENCE_HERO[audience];
  const cfg = AUDIENCE_CONFIG[audience];
  const audienceList = Object.entries(AUDIENCE_CONFIG) as [Audience, typeof AUDIENCE_CONFIG[Audience]][];

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">

      {/* ── Background: Video first, KB images fallback ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay muted loop playsInline preload="metadata"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.05)' }}
          >
            <source src={VIDEOS[0]} type="video/mp4" />
            <source src={VIDEOS[1]} type="video/mp4" />
          </video>
        ) : (
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ backgroundImage: `url(${KB_SLIDES[activeSlide].url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                initial={{ scale: 1.1 }} animate={{ scale: 1.0 }}
                transition={{ duration: 7, ease: 'linear' }}
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/50 to-zinc-950/10" />
      </div>

      {/* ── Audience Switcher ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-6 right-6 z-30 flex items-center gap-2 flex-wrap justify-end"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.25em] font-bold mr-1">I am a</span>
        {audienceList.filter(([k]) => k !== 'all').map(([key, c]) => (
          <motion.button
            key={key}
            onClick={() => setAudience(key as Audience)}
            whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
            className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 border"
            style={
              audience === key
                ? { backgroundColor: c.color, color: '#fff', borderColor: c.color, boxShadow: `0 0 16px ${c.color}60` }
                : { backgroundColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.12)' }
            }
          >
            {c.emoji} {c.label.replace('Retail ', '').replace('Brand ', '').replace('Event ', '')}
          </motion.button>
        ))}
        <button
          onClick={() => setAudience('all')}
          className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 border"
          style={
            audience === 'all'
              ? { backgroundColor: 'rgba(255,255,255,0.18)', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }
              : { backgroundColor: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', borderColor: 'rgba(255,255,255,0.08)' }
          }
        >
          🌐 All
        </button>
      </motion.div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 h-full pt-24 pb-24">

        <div className="flex-1 text-left">
          <AnimatePresence mode="wait">
            <motion.p key={`tag-${audience}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
              className="text-[11px] font-black uppercase mb-6 tracking-[0.4em]" style={{ color: cfg.color }}>
              {copy.tag}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1 key={`h1-${audience}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[0.82] mb-6 tracking-tighter"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 8.5rem)' }}>
              {copy.headline.map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span style={{ background: `linear-gradient(135deg, #ffffff 0%, ${cfg.color} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {line}
                    </span>
                  ) : line}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p key={`sub-${audience}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-white/60 text-base md:text-xl font-light italic mb-10 max-w-lg leading-relaxed">
              {copy.sub}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div key={`cta-${audience}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <button onClick={() => go(copy.cta1.section)}
                className="px-10 py-4 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:opacity-90 transition-all duration-300"
                style={{ backgroundColor: cfg.color, boxShadow: `0 8px 30px ${cfg.color}50` }}>
                {copy.cta1.label}
              </button>
              <button onClick={() => go(copy.cta2.section)}
                className="px-10 py-4 border-2 border-white/30 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/10 transition-all">
                {copy.cta2.label}
              </button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div key={`stats-${audience}`} className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: 0.15 }}>
              {copy.stats.map(s => (
                <div key={s.label}>
                  <p className="font-black text-2xl md:text-3xl tracking-tighter" style={{ color: cfg.color === '#3b82f6' ? 'white' : cfg.color }}>{s.num}</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-[0.25em] font-bold mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right panel — video indicator */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:flex flex-col gap-4 w-[300px] flex-shrink-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/10' }}>
            {!videoFailed ? (
              <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover">
                <source src={VIDEOS[1]} type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${KB_SLIDES[activeSlide % KB_SLIDES.length].url})` }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-black text-sm tracking-tight">
                {videoFailed ? KB_SLIDES[activeSlide % KB_SLIDES.length].label : 'American Dream — Live Experience'}
              </p>
            </div>
            {/* Live badge */}
            {!videoFailed && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.6)' }}>
                <motion.div className="w-1.5 h-1.5 rounded-full bg-red-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-white text-[9px] font-black uppercase tracking-widest">Live</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        <motion.div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${cfg.color}cc, transparent)` }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</p>
      </motion.div>
    </section>
  );
}
