import React, { useEffect, useRef, useState } from 'react';

const HUD_STATS = [
  { label: 'UPTIME SLA', value: '99.9%', unit: '' },
  { label: 'LATENCIA', value: '<5', unit: 'ms' },
  { label: 'NODOS ACTIVOS', value: '3', unit: 'PLANES' },
  { label: 'SOBERANÍA', value: 'BOL', unit: 'LOCAL' },
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const coreRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const rotateX = (mouse.y - 0.5) * -12;
  const rotateY = (mouse.x - 0.5) * 12;

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ zIndex: 1 }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(0,229,255,0.07) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >


          <h1
            className="font-black mb-6 leading-none"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#F8FAFC',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Nube Corporativa{' '}
            <span style={{ color: '#00E5FF' }}>"Privada"</span>
            <br />
            <span className="font-light" style={{ color: 'rgba(248,250,252,0.7)' }}>Infraestructura como</span>
            <br />
            Servicio
          </h1>

          <p
            className="mb-10 leading-relaxed"
            style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7, maxWidth: '520px' }}
          >
            Una solución de nube privada empresarial alojada en Bolivia, diseñada para organizaciones que exigen control, seguridad y rendimiento de red de nivel corporativo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-mono font-bold text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(0,229,255,0.05) 100%)',
                border: '1px solid #00E5FF',
                color: '#00E5FF',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,229,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(0,229,255,0.05) 100%)'}
            >
              Solicitar Arquitectura
            </button>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                border: '0.5px solid rgba(248,250,252,0.2)',
                color: 'rgba(248,250,252,0.6)',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F8FAFC'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,250,252,0.6)'}
            >
              Ver Servicios
            </button>
          </div>

          {/* HUD Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
            {HUD_STATS.map((s, i) => (
              <div
                key={i}
                className="p-3 transition-all duration-300"
                style={{
                  border: '0.5px solid rgba(0,229,255,0.2)',
                  background: 'rgba(0,229,255,0.03)',
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 150 + 600}ms`,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="text-xs font-mono mb-1" style={{ color: 'rgba(0,229,255,0.6)', letterSpacing: '0.1em', fontSize: '9px' }}>
                  {s.label}
                </div>
                <div className="font-black" style={{ color: '#00E5FF', fontSize: '1.5rem', lineHeight: 1 }}>
                  {s.value}<span className="text-xs ml-1" style={{ color: 'rgba(0,229,255,0.7)', fontSize: '0.65rem' }}>{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D Core Image */}
        <div
          className="relative flex items-center justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s ease 0.4s',
          }}
        >
          {/* Outer ring */}
          <div
            className="absolute rounded-full animate-spin"
            style={{
              width: '520px', height: '520px',
              border: '0.5px solid rgba(0,229,255,0.15)',
              animationDuration: '20s',
            }}
          />
          <div
            className="absolute rounded-full animate-spin"
            style={{
              width: '420px', height: '420px',
              border: '0.5px solid rgba(0,229,255,0.1)',
              animationDuration: '14s',
              animationDirection: 'reverse',
            }}
          />

          {/* Core image */}
          <div
            ref={coreRef}
            className="relative rounded-full overflow-hidden"
            style={{
              width: '380px', height: '380px',
              transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s ease-out',
              boxShadow: '0 0 80px rgba(0,229,255,0.2), 0 0 160px rgba(0,229,255,0.1)',
            }}
          >
            <img
              src="https://media.base44.com/images/public/6a778c1220d019be8ba7eee2/65b6dc4a8_generated_65595e58.png"
              alt="Núcleo cristalino 3D de la Nube Corporativa Privada"
              className="w-full h-full object-cover"
            />
            {/* Overlay scanline */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.02) 2px, rgba(0,229,255,0.02) 4px)',
              }}
            />
          </div>

          {/* Floating tags */}
          <FloatingTag top="10%" left="-5%" label="OpenStack · KVM" delay={800} />
          <FloatingTag top="75%" left="-8%" label="GPON · Fibra Óptica" delay={1000} />
          <FloatingTag top="15%" right="-5%" label="Alta Disponibilidad" delay={1200} />
          <FloatingTag top="80%" right="-8%" label="CPD COTAS · Bolivia" delay={1400} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: visible ? 0.6 : 0 }}
      >
        <span className="text-xs font-mono tracking-widest" style={{ color: '#00E5FF', fontSize: '9px', letterSpacing: '0.2em' }}>SCROLL</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ backgroundColor: 'rgba(0,229,255,0.2)' }}>
          <div
            className="w-full absolute top-0 animate-bounce"
            style={{ height: '40%', background: 'linear-gradient(to bottom, transparent, #00E5FF)', animationDuration: '1.5s' }}
          />
        </div>
      </div>
    </section>
  );
}

function FloatingTag({ top, left, right, label, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 transition-all duration-700"
      style={{
        top, left, right,
        border: '0.5px solid rgba(0,229,255,0.3)',
        background: 'rgba(5,7,10,0.8)',
        backdropFilter: 'blur(8px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${left ? '-20px' : '20px'})`,
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00E5FF' }} />
      <span className="text-xs font-mono whitespace-nowrap" style={{ color: 'rgba(248,250,252,0.7)', fontSize: '10px' }}>{label}</span>
    </div>
  );
}