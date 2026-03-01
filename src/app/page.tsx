'use client';

import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Shield, Brain, Zap, Smartphone, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // 1. Unconditional Hook Calls for Framer Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for a premium, heavy, fluid feel
  const springX = useSpring(mouseX, { stiffness: 35, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 15 });

  // 2. CRITICAL FIX: Extract useMotionTemplate to the top level so it runs unconditionally
  const backgroundSpotlight = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(108, 99, 255, 0.15), transparent 80%)`;

  useEffect(() => {
    setIsMounted(true);
    let input = '';
    const secret = 'you complete me juhi !';
    
    // Easter Egg Key Listener
    const handleKeyDown = (e: KeyboardEvent) => {
      input += e.key.toLowerCase();
      if (input.length > secret.length) {
        input = input.slice(-secret.length);
      }
      if (input === secret) {
        router.push('/developer');
      }
    };

    // Mouse Movement Listener for Interactive Background
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set initial mouse position to center of screen on load
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [router, mouseX, mouseY]);

  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* =========================================
          INTERACTIVE DYNAMIC BACKGROUND
      ========================================= */}
      {isMounted && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: backgroundSpotlight, // Now using the unconditionally created template
          }}
        />
      )}

      {/* Ambient static auroras to maintain baseline cyberpunk aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#6C63FF] opacity-10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#03DAC6] opacity-10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center min-h-[85vh] justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest text-[#03DAC6] mb-8 inline-block shadow-[0_0_20px_rgba(3,218,198,0.2)]"
          >
            SEASON 1 LIVE
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">
            Pure Cognition.<br />Zero RNG.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Step into the arena where luck is obsolete. Test your logic, math, and memory against the world in high-stakes cognitive duels.
          </p>
          
          {/* Download & Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            {/* Download iOS / Android Primary Call to Action */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold tracking-wide flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <Smartphone size={20} />
              <span>Download App</span>
              <ChevronRight size={18} className="text-black/50" />
            </motion.button>

            {/* View Leaderboards Secondary Action */}
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E1E1E] text-white border border-white/10 px-8 py-4 rounded-2xl font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              View Leaderboards
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          FEATURES GRID
      ========================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: 'Cognitive Engine', desc: 'Deterministic matchmaking based on pure ELO. No pay-to-win mechanics.' },
            { icon: Zap, title: 'Sub-Millisecond', desc: 'Lightning-fast interactions powered by robust anti-cheat architecture.' },
            { icon: Shield, title: 'Absolute Integrity', desc: 'Secure data flows and strict environments to protect the competitive balance.' },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
              className="p-8 rounded-3xl bg-[#1E1E1E]/80 backdrop-blur-md border border-white/5 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                <feature.icon className="text-[#03DAC6]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}