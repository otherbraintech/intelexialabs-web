import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Infraestructura', href: '#services' },
  { label: 'Arquitectura', href: '#architecture' },
  { label: 'Seguridad', href: '#capabilities' },
  { label: 'Planes', href: '#plans' },
  { label: 'Contacto', href: '#cta' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(5,7,10,0.95)' : 'transparent',
          borderBottom: scrolled ? '0.5px solid rgba(30,41,59,0.8)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/78c24084-f5b3-4072-816f-9c02d6ab72eb.png"
              alt="Logo"
              className="h-20 md:h-28 lg:h-32 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-mono tracking-wider transition-all duration-200 hover:scale-105 text-slate-100/60 hover:text-[#00E5FF]"
                style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#cta')}
              className="px-5 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 border border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5 hover:bg-[#00E5FF]/15"
              style={{
                letterSpacing: '0.15em',
              }}
            >
              Solicitar Arquitectura
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: '#00E5FF' }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ backgroundColor: 'rgba(5,7,10,0.97)' }}
        >
          <button className="absolute top-6 right-8 text-2xl" style={{ color: '#00E5FF' }} onClick={() => setOpen(false)}>✕</button>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block text-2xl font-mono tracking-widest uppercase py-4 transition-all duration-200"
              style={{ color: 'rgba(248,250,252,0.7)', letterSpacing: '0.2em' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}