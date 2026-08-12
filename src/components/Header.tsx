import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UrbanLogo } from './UrbanLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isLicensing = pathname === '/regional-licensing';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeNavItems = [
    { label: 'App', href: '#download-app' },
    { label: 'Drive With Us', href: '#driver-first' },
    { label: 'Our Story', href: '#our-numbers' },
    { label: 'Founder', href: '#founder' },
  ];

  const licensingNavItems = [
    { label: 'Opportunity', href: '#opportunity' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Founder County', href: '#founder-county' },
    { label: 'Territories', href: '#territories' },
    { label: 'FAQ', href: '#faq' },
  ];

  const navItems = isLicensing ? licensingNavItems : homeNavItems;
  const ctaHref = isLicensing ? '#lead-form' : '#download-app';
  const ctaLabel = isLicensing ? 'RESERVE YOUR REGION' : 'JOIN AS A DRIVER';
  const ctaLabelShort = isLicensing ? 'RESERVE' : 'JOIN NOW';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight/85 backdrop-blur-md border-b border-navy-border/50 py-3 shadow-2xl shadow-midnight/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <UrbanLogo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-urban-electric hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={ctaHref}
              className="relative group overflow-hidden rounded-lg p-[1px] font-semibold text-xs uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-urban-electric focus:ring-offset-2 focus:ring-offset-midnight"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light rounded-lg animate-pulse" />
              <span className="relative block px-5 py-2.5 bg-midnight hover:bg-transparent rounded-[7px] text-white transition-all duration-300 font-bold tracking-wider">
                {ctaLabel}
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={ctaHref}
              className="text-[10px] font-bold tracking-wider uppercase px-3 py-2 rounded-md bg-urban-blue text-white"
            >
              {ctaLabelShort}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-card text-white hover:text-urban-light focus:outline-none border border-navy-border"
              aria-label="Toggle Navigation Menu"
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-midnight/95 backdrop-blur-xl border-b border-navy-border p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ice hover:text-urban-light transition-colors py-2 border-b border-navy-card/60 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <i className="bi bi-chevron-right text-xs text-muted"></i>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={ctaHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-urban-blue/30"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
