import React from 'react';
import { SectionLabel } from './WhatIsIaaS';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ARCH_STEPS = [
  {
    num: '01',
    title: 'Virtualización y Autoservicio',
    desc: 'OpenStack con hipervisor KVM permite aprovisionar y gestionar máquinas virtuales con control granular de recursos y autoservicio controlado para el cliente.',
    tag: 'OpenStack · KVM',
  },
  {
    num: '02',
    title: 'Conectividad Dedicada',
    desc: 'Fibra óptica COTAS con bajo jitter y latencia mínima, más redes privadas aisladas por cliente para máxima seguridad y rendimiento de red garantizado.',
    tag: 'GPON · Fibra Óptica',
  },
  {
    num: '03',
    title: 'Seguridad en Capas',
    desc: 'Perímetro de seguridad con firewall, segmentación de red por tenant y políticas de acceso granulares para proteger cada entorno empresarial.',
    tag: 'Firewall · Segmentación',
  },
];

const TECH_ADVANTAGES = [
  { label: 'Portabilidad', desc: 'Migre VMs sin fricciones' },
  { label: 'Interoperabilidad', desc: 'Estándar de industria' },
  { label: 'Sin Lock-in', desc: 'Arquitectura abierta' },
  { label: 'Escalabilidad', desc: 'Crece con su negocio' },
];

export default function ArchitectureSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="architecture" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 80% 50%, rgba(0,229,255,0.04) 0%, transparent 60%)' }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="ARQUITECTURA Y TECNOLOGÍA" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-12">
          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <h2 className="font-black mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}>
              Arquitectura de Alto Nivel
              <br />
              <span style={{ color: '#00E5FF' }}>OpenStack + Perímetro</span>
            </h2>
            <p className="mb-10" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
              La plataforma se sustenta en <strong style={{ color: '#F8FAFC' }}>OpenStack con hipervisor KVM</strong>, el estándar de facto en nubes privadas empresariales a nivel mundial. Esta elección tecnológica garantiza portabilidad, interoperabilidad y ausencia de dependencia con un único proveedor.
            </p>

            {/* Architecture steps */}
            <div className="space-y-0">
              {ARCH_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="group flex gap-6 p-6 transition-all duration-300"
                  style={{
                    borderLeft: '0.5px solid rgba(0,229,255,0.2)',
                    borderTop: i === 0 ? '0.5px solid rgba(30,41,59,0.5)' : 'none',
                    borderBottom: '0.5px solid rgba(30,41,59,0.5)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderLeftColor = '#00E5FF';
                    e.currentTarget.style.background = 'rgba(0,229,255,0.03)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderLeftColor = 'rgba(0,229,255,0.2)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-black font-mono"
                    style={{ border: '0.5px solid rgba(0,229,255,0.4)', color: '#00E5FF', fontSize: '1rem' }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold" style={{ color: '#F8FAFC', fontSize: '1rem' }}>{step.title}</h3>
                      <span className="text-xs font-mono px-2 py-0.5" style={{ border: '0.5px solid rgba(0,229,255,0.3)', color: '#00E5FF', fontSize: '9px', letterSpacing: '0.1em' }}>
                        {step.tag}
                      </span>
                    </div>
                    <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transitionDelay: '300ms' }}
          >
            {/* Architecture image */}
            <div
              className="mb-8 relative overflow-hidden"
              style={{ border: '0.5px solid rgba(0,229,255,0.2)', boxShadow: '0 0 60px rgba(0,229,255,0.08)' }}
            >
              <img
                src="https://media.base44.com/images/public/6a778c1220d019be8ba7eee2/7fd14d2f8_generated_0ce585da.png"
                alt="Arquitectura de nodos de infraestructura IaaS interconectados"
                className="w-full object-cover"
                style={{ maxHeight: '320px' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(5,7,10,0.8) 100%)' }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-mono" style={{ color: '#00E5FF', letterSpacing: '0.12em', fontSize: '10px' }}>
                  CPD COTAS · OPENSTACK KVM · FIBRA ÓPTICA DEDICADA
                </div>
              </div>
            </div>

            {/* Tech advantages grid */}
            <div className="grid grid-cols-2 gap-3">
              {TECH_ADVANTAGES.map((t, i) => (
                <div key={i} className="p-4" style={{ border: '0.5px solid rgba(30,41,59,0.8)', background: 'rgba(30,41,59,0.15)' }}>
                  <div className="font-bold text-sm mb-1" style={{ color: '#00E5FF' }}>{t.label}</div>
                  <div className="text-xs" style={{ color: 'rgba(248,250,252,0.6)' }}>{t.desc}</div>
                </div>
              ))}
            </div>

            {/* No lock-in callout */}
            <div className="mt-4 p-5 flex items-start gap-4" style={{ border: '0.5px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.04)' }}>
              <div className="text-2xl flex-shrink-0">🔓</div>
              <div>
                <div className="font-bold text-sm mb-1" style={{ color: '#FFD700' }}>Sin Vendor Lock-in</div>
                <div className="text-sm" style={{ color: 'rgba(248,250,252,0.65)', lineHeight: 1.5 }}>
                  Arquitectura abierta basada en OpenStack que permite migrar máquinas virtuales desde nubes públicas sin fricciones.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}