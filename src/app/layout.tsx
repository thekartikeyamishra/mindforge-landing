import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MindForge: Battle of Minds',
  description: 'Pure cognition. Zero RNG. The ultimate cognitive e-sports arena.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0F0F1A] text-white min-h-screen flex flex-col antialiased selection:bg-[#03DAC6] selection:text-black`}>
        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>
        
        {/* Razorpay Compliant Footer (Appears on every page) */}
        <footer className="border-t border-white/10 bg-[#121212] py-12 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/50">
            <div>
              <h3 className="text-white font-bold tracking-widest mb-4">MINDFORGE</h3>
              <p>Elevating cognitive performance through competitive arenas.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-white font-bold tracking-widest mb-2">LEGAL</h3>
              <Link href="/terms" className="hover:text-[#03DAC6] transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-[#03DAC6] transition-colors">Privacy Policy</Link>
              <Link href="/refund" className="hover:text-[#03DAC6] transition-colors">Refund Policy</Link>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-white font-bold tracking-widest mb-2">CONNECT</h3>
              <Link href="/about" className="hover:text-[#03DAC6] transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-[#03DAC6] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-12 text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} MindForge. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}