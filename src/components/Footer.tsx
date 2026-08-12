import React from 'react';
import { UrbanLogo } from './UrbanLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight border-t border-navy-border pt-16 pb-12 text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-border/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <UrbanLogo />
            <p className="text-white font-bold text-sm tracking-wider uppercase">
              MOBILITY. INNOVATION. OWNERSHIP.
            </p>
            <p className="text-muted text-xs leading-relaxed max-w-sm">
              Built by drivers. Built for growth. Urban positions local entrepreneurs and qualified operators at the forefront of regional mobility licensing across the United States.
            </p>

            <div className="pt-2 flex items-center gap-4 text-lg">
              <a
                href="https://www.facebook.com/profile.php?id=61590568566244"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Urban Facebook Profile"
                className="w-9 h-9 rounded-lg bg-navy-card border border-navy-border flex items-center justify-center text-muted hover:text-urban-light hover:border-urban-electric transition-all"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/urbanusmobility/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Urban Instagram Profile"
                className="w-9 h-9 rounded-lg bg-navy-card border border-navy-border flex items-center justify-center text-muted hover:text-urban-light hover:border-urban-electric transition-all"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#download-app" className="hover:text-white transition-colors">Mobility App</a></li>
              <li><a href="/regional-licensing" className="hover:text-white transition-colors">Regional Licensing</a></li>
              <li><a href="/regional-licensing#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/regional-licensing#territories" className="hover:text-white transition-colors">Territories</a></li>
              <li><a href="/regional-licensing#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Official Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <i className="bi bi-globe text-urban-light"></i>
                <a href="https://www.urbanusaapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">www.urbanusaapp.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-envelope text-urban-light"></i>
                <a href="mailto:licensing@urbanUSAapp.com" className="hover:text-white">licensing@urbanUSAapp.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-telephone text-urban-light"></i>
                <a href="tel:+14077261547" className="hover:text-white">+1 407 726 1547</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-geo-alt text-urban-light"></i>
                <span>United States (USA)</span>
              </li>
            </ul>
          </div>

          {/* Program Disclaimer */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Licensing Scope</h4>
            <p className="text-[11px] leading-relaxed text-muted">
              Regional licensing opportunities are subject to availability, approval and applicable agreements.
            </p>
            <div className="mt-4 p-3 rounded bg-navy-card/60 border border-navy-border">
              <span className="text-[10px] font-mono text-urban-light uppercase font-bold block">USA TERRITORIAL SCOPE</span>
              <span className="text-[10px] text-muted block mt-0.5">Exclusive County Franchising & Operations</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span>© {new Date().getFullYear()} URBAN. All rights reserved.</span>
            <span className="hidden sm:inline text-navy-border">•</span>
            <a
              href="https://camaly.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium"
            >
              <span>Produzida com 💚 por</span>
              <span className="font-bold text-white hover:text-emerald-400 underline">CAMALY</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Regional Licensing Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
