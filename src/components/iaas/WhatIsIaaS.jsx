import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PILLARS = [
  {
    title: 'Agilidad',
    desc: 'Provisione recursos en minutos, sin esperas por hardware físico.',
    icon: '⚡',
  },
  {
    title: 'Control Total',
    desc: 'Gestione sus SO, aplicaciones y licencias con autonomía completa.',
    icon: '🎛',
  },
  {
    title: 'Soberanía',
    desc: 'Sus datos permanecen en Bolivia, bajo regulación y jurisdicción local.',
    icon: '🇧🇴',
  },
];

const WORKLOADS = [
  'ERP y core de negocio',
  'Bases de datos relacionales y NoSQL',
  'Aplicaciones internas',
  'VDI – Infraestructura de Escritorio Virtual',
  'Sitio principal de producción',
  'Sitio alterno de recuperación ante desastres (DR)',
];

export default function WhatIsIaaS() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="what-is" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="DEFINICIÓN" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-12">
          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <h2
              className="font-black mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              ¿Qué es la Nube Corporativa{' '}
              <span style={{ color: '#00E5FF' }}>"Privada"?</span>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
              Se trata de una infraestructura de nube empresarial alojada en el <strong style={{ color: '#F8FAFC' }}>Centro de Procesamiento de Datos (CPD) de COTAS</strong>, accesible mediante conectividad de fibra óptica privada.
            </p>
            <p className="leading-relaxed" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
              A diferencia de las nubes públicas globales, esta solución ofrece soberanía de datos, soporte local y rendimiento de red óptimo para el mercado boliviano.
            </p>

            {/* Workloads */}
            <div className="mt-10 p-6" style={{ border: '0.5px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.03)' }}>
              <div className="text-xs font-mono mb-4" style={{ color: '#00E5FF', letterSpacing: '0.15em' }}>CARGAS EMPRESARIALES SOPORTADAS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {WORKLOADS.map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: '#00E5FF' }} />
                    <span className="text-sm" style={{ color: 'rgba(248,250,252,0.75)', lineHeight: 1.6 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="transition-all duration-1000 delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transitionDelay: '300ms' }}
          >
            {/* 3 Pillars */}
            <div className="space-y-4">
              {PILLARS.map((p, i) => (
                <div
                  key={i}
                  className="group p-6 transition-all duration-300"
                  style={{
                    border: '0.5px solid rgba(30,41,59,0.8)',
                    background: 'rgba(30,41,59,0.2)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)';
                    e.currentTarget.style.background = 'rgba(0,229,255,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)';
                    e.currentTarget.style.background = 'rgba(30,41,59,0.2)';
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-2xl flex-shrink-0 w-12 h-12 flex items-center justify-center"
                      style={{ border: '0.5px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.08)' }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: '#F8FAFC', fontSize: '1.1rem' }}>{p.title}</h3>
                      <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '1rem', lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual modes */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4" style={{ border: '0.5px solid rgba(0,229,255,0.25)', background: 'rgba(0,229,255,0.04)' }}>
                <div className="text-xs font-mono mb-2" style={{ color: '#00E5FF', letterSpacing: '0.1em', fontSize: '10px' }}>MODO 1</div>
                <div className="font-bold text-sm mb-1" style={{ color: '#F8FAFC' }}>Sitio Principal</div>
                <div className="text-xs" style={{ color: 'rgba(248,250,252,0.6)', lineHeight: 1.5 }}>Producción y operaciones diarias del negocio</div>
              </div>
              <div className="p-4" style={{ border: '0.5px solid rgba(255,215,0,0.25)', background: 'rgba(255,215,0,0.03)' }}>
                <div className="text-xs font-mono mb-2" style={{ color: '#FFD700', letterSpacing: '0.1em', fontSize: '10px' }}>MODO 2</div>
                <div className="font-bold text-sm mb-1" style={{ color: '#F8FAFC' }}>Sitio Alterno DR</div>
                <div className="text-xs" style={{ color: 'rgba(248,250,252,0.6)', lineHeight: 1.5 }}>Recuperación ante desastres y resiliencia operativa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-px" style={{ backgroundColor: '#00E5FF' }} />
      <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#00E5FF', letterSpacing: '0.2em', fontSize: '10px' }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(0,229,255,0.1)' }} />
    </div>
  );
}