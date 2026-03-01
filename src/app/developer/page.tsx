'use client';

// cspell:ignore Vyra Gamified Docu
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function DeveloperPage() {
  const projects = [
    { name: "Vyra", url: "https://play.google.com/store/apps/details?id=com.kartikeyamishra.vyra", desc: "Digital utility and productivity ecosystem." },
    { name: "Social Quest", url: "https://play.google.com/store/apps/details?id=com.kartikeyamishra.social_quest_app", desc: "Gamified social interactions and networking." },
    { name: "DocuFix", url: "https://www.docufix.in/", desc: "Seamless document formatting and management." },
    { name: "FreelanceShield", url: "https://freelanceshield.me", desc: "Contract protection and escrow for modern freelancers." },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#CF6679] font-mono text-sm tracking-widest mb-4"
          >
            {"// SYSTEM OVERRIDE ACCEPTED"}
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-black mb-4">Kartikeya Mishra</h1>
          <p className="text-xl text-white/50">Architect. Engineer. Creator.</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-20">
          {[
            { icon: Mail, href: "mailto:workmailkartikeya@gmail.com" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/thekartikeyamishra" },
            { icon: Github, href: "https://github.com/thekartikeyamishra" },
            { icon: Twitter, href: "https://x.com/kartikeyahere" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#03DAC6] transition-all hover:scale-110 active:scale-95"
            >
              <social.icon size={20} className="text-white" />
            </motion.a>
          ))}
        </div>

        {/* Projects Grid */}
        <h2 className="text-2xl font-bold mb-8 text-center tracking-widest text-white/80">ACTIVE DEPLOYMENTS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="group block p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-[#6C63FF]/50 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#6C63FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#03DAC6] transition-colors">{project.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.desc}</p>
                </div>
                <ExternalLink size={20} className="text-white/20 group-hover:text-white/80 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}