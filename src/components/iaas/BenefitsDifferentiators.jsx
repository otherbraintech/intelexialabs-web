import React from 'react';
import { SectionLabel } from './WhatIsIaaS';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BENEFITS = [
  {
    icon: '🔗',
    title: 'Conectividad Punto a Punto',
    desc: 'GPON y fibra óptica dedicada con opciones de redundancia. Experiencia de red comparable a infraestructura on-premise, con la flexibilidad de la nube.',
  },
  {
    icon: '💰',
    title: 'Reducción de Costes de TI',
    desc: 'Elimine la inversión en hardware propio y evite la obsolescencia tecnológica. Ahorro significativo en electricidad, refrigeración y seguridad física del CPD.',
  },
  {
    icon: '🛡',
    title: 'Continuidad Operativa y DR',
    desc: 'Utilice el IaaS como sitio alterno de recuperación ante desastres (DR) para reducir riesgos, minimizar el downtime y garantizar la continuidad del negocio.',
  },
  {
    icon: '🤝',
    title: 'Soporte Experto Local',
    desc: 'Intelexia Labs by IT911 diseña e implementa soluciones a medida, con acompañamiento continuo orientado a misión crítica y presencia en Bolivia.',
  },
];

const DIFFERENTIATORS = [
  {
    emoji: '🇧🇴',
    title: 'Soberanía de Datos',
    desc: 'Sus datos permanecen en Bolivia, cumpliendo normativas locales y eliminando riesgos de jurisdicción extranjera.',
    color: '#00E5FF',
  },
  {
    emoji: '⚡',
    title: 'Conectividad Dedicada',
    desc: 'Experiencia "como on-premise" pero en la nube: acceso por fibra óptica exclusiva con latencia mínima garantizada.',
    color: '#00E5FF',
  },
  {
    emoji: '🔓',
    title: 'Sin Lock-in',
    desc: 'Arquitectura abierta basada en OpenStack que permite migrar máquinas virtuales desde nubes públicas sin fricciones.',
    color: '#00E5FF',
  },
  {
    emoji: '🚀',
    title: 'POC Flexible',
    desc: 'Entrada rápida tipo "Land & Expand": comience con un piloto y escale según las necesidades reales del negocio.',
    color: '#00E5FF',
  },
  {
    emoji: '🛡',
    title: 'Soporte Crítico',
    desc: 'Acompañamiento especializado de Intelexia Labs en eventos críticos, con tiempo de respuesta orientado a misión crítica.',
    color: '#FFD700',
  },
  {
    emoji: '💵',
    title: 'Ahorro Operativo',
    desc: 'Reduce inversión en hardware, electricidad, refrigeración y seguridad física. Aplica descargo de impuestos locales.',
    color: '#FFD700',
  },
];

export default function BenefitsDifferentiators() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="benefits" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.025) 50%, transparent)' }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="BENEFICIOS Y DIFERENCIADORES" />

        <div
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <h2 className="font-black mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}>
            Beneficios para su Negocio,<br />
            <span style={{ color: '#00E5FF' }}>Empresa e Industria</span>
          </h2>
          <p className="mb-16 max-w-3xl" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
            Tanto grandes corporaciones como pymes y emprendedores obtienen ventajas concretas al adoptar la Nube Corporativa Privada de COTAS. La propuesta combina infraestructura de alto nivel con soporte local experto y una conectividad sin igual en el mercado boliviano.
          </p>

          {/* Benefits 4-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="p-6 transition-all duration-300"
                style={{ border: '0.5px solid rgba(30,41,59,0.8)', background: 'rgba(30,41,59,0.15)', cursor: 'default' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)';
                  e.currentTarget.style.background = 'rgba(0,229,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)';
                  e.currentTarget.style.background = 'rgba(30,41,59,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold mb-3" style={{ color: '#00E5FF', fontSize: '0.95rem', lineHeight: 1.3 }}>{b.title}</h3>
                <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Differentiators section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: '#00E5FF' }} />
              <span className="text-xs font-mono tracking-widest" style={{ color: '#00E5FF', letterSpacing: '0.2em', fontSize: '10px' }}>
                COMPARATIVO FRENTE A HOSTING TRADICIONAL Y CLOUD PÚBLICA
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(0,229,255,0.1)' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DIFFERENTIATORS.map((d, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 relative"
                  style={{
                    border: `0.5px solid ${d.color === '#FFD700' ? 'rgba(255,215,0,0.25)' : 'rgba(30,41,59,0.8)'}`,
                    background: d.color === '#FFD700' ? 'rgba(255,215,0,0.03)' : 'rgba(30,41,59,0.2)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = d.color === '#FFD700' ? 'rgba(255,215,0,0.5)' : 'rgba(0,229,255,0.4)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = d.color === '#FFD700' ? 'rgba(255,215,0,0.25)' : 'rgba(30,41,59,0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{d.emoji}</span>
                    <h3 className="font-bold text-sm" style={{ color: d.color }}>{d.title}</h3>
                  </div>
                  <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}