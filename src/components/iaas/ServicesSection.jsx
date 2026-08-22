import React, { useState } from 'react';
import { SectionLabel } from './WhatIsIaaS';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const IAAS_INCLUDES = [
  { icon: '🖥', title: 'Cómputo Virtual', desc: 'vCPU, RAM y disco SSD escalables bajo demanda según la necesidad exacta de su organización.' },
  { icon: '🔒', title: 'Redes Privadas', desc: 'Redes privadas por cliente con aislamiento garantizado para máxima seguridad y sin interferencia entre tenants.' },
  { icon: '💾', title: 'Almacenamiento de Alto Rendimiento', desc: 'Almacenamiento SSD en el CPD de COTAS, con latencia mínima y disponibilidad garantizada.' },
  { icon: '⚙️', title: 'Control de SO y Licencias', desc: 'El cliente gestiona sus propios sistemas operativos, aplicaciones y licencias con total autonomía.' },
];

const COMPARE = [
  { feature: 'Soberanía de datos', private: true, public: false, traditional: false },
  { feature: 'Fibra óptica dedicada', private: true, public: false, traditional: false },
  { feature: 'Latencia optimizada para Bolivia', private: true, public: false, traditional: false },
  { feature: 'Sin vendor lock-in', private: true, public: false, traditional: true },
  { feature: 'Escalabilidad elástica', private: true, public: true, traditional: false },
  { feature: 'Soporte local experto', private: true, public: false, traditional: false },
  { feature: 'Recuperación ante desastres', private: true, public: true, traditional: false },
  { feature: 'Descargo de impuestos locales', private: true, public: false, traditional: false },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal();
  const [showCompare, setShowCompare] = useState(false);

  return (
    <section id="services" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,229,255,0.03) 0%, transparent 100%)' }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="SERVICIOS IaaS" />

        <div
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <h2 className="font-black mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}>
            Servicios en la Nube Corporativa Privada
          </h2>
          <p className="mb-6 max-w-3xl" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
            IaaS proporciona recursos de infraestructura virtual —vCPU, RAM, almacenamiento SSD y redes— bajo demanda. El cliente conserva el control total sobre sus sistemas operativos, mientras COTAS e Intelexia Labs garantizan la plataforma y la conectividad.
          </p>

          {/* Toggle Compare */}
          <div className="flex gap-3 mb-12">
            <button
              onClick={() => setShowCompare(false)}
              className="px-5 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200"
              style={{
                border: `0.5px solid ${!showCompare ? '#00E5FF' : 'rgba(30,41,59,0.8)'}`,
                color: !showCompare ? '#00E5FF' : 'rgba(248,250,252,0.5)',
                background: !showCompare ? 'rgba(0,229,255,0.08)' : 'transparent',
                letterSpacing: '0.12em',
              }}
            >
              ¿Qué Incluye?
            </button>
            <button
              onClick={() => setShowCompare(true)}
              className="px-5 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200"
              style={{
                border: `0.5px solid ${showCompare ? '#00E5FF' : 'rgba(30,41,59,0.8)'}`,
                color: showCompare ? '#00E5FF' : 'rgba(248,250,252,0.5)',
                background: showCompare ? 'rgba(0,229,255,0.08)' : 'transparent',
                letterSpacing: '0.12em',
              }}
            >
              Comparativo
            </button>
          </div>

          {!showCompare ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {IAAS_INCLUDES.map((item, i) => (
                <div
                  key={i}
                  className="group p-6 transition-all duration-300"
                  style={{ border: '0.5px solid rgba(30,41,59,0.8)', background: 'rgba(5,7,10,0.6)', cursor: 'default' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,229,255,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-3" style={{ color: '#00E5FF', fontSize: '0.95rem', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(248,250,252,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-16 overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-mono" style={{ color: 'rgba(248,250,252,0.5)', borderBottom: '0.5px solid rgba(30,41,59,0.8)', fontSize: '10px', letterSpacing: '0.15em' }}>CARACTERÍSTICA</th>
                    <th className="p-4 text-center text-sm font-mono" style={{ color: '#00E5FF', borderBottom: '0.5px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.05)', fontSize: '11px', letterSpacing: '0.1em' }}>NUBE PRIVADA<br /><span style={{ color: 'rgba(0,229,255,0.7)', fontSize: '9px' }}>COTAS × INTELEXIA</span></th>
                    <th className="p-4 text-center text-sm font-mono" style={{ color: 'rgba(248,250,252,0.4)', borderBottom: '0.5px solid rgba(30,41,59,0.8)', fontSize: '11px', letterSpacing: '0.1em' }}>CLOUD PÚBLICA<br /><span style={{ fontSize: '9px' }}>AWS / Azure</span></th>
                    <th className="p-4 text-center text-sm font-mono" style={{ color: 'rgba(248,250,252,0.4)', borderBottom: '0.5px solid rgba(30,41,59,0.8)', fontSize: '11px', letterSpacing: '0.1em' }}>HOSTING<br /><span style={{ fontSize: '9px' }}>TRADICIONAL</span></th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '0.5px solid rgba(30,41,59,0.4)' }}>
                      <td className="p-4 text-sm" style={{ color: 'rgba(248,250,252,0.75)' }}>{row.feature}</td>
                      <td className="p-4 text-center" style={{ background: 'rgba(0,229,255,0.03)' }}>
                        {row.private ? <span style={{ color: '#00E5FF', fontSize: '1.2rem' }}>✓</span> : <span style={{ color: 'rgba(248,250,252,0.2)', fontSize: '1rem' }}>—</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.public ? <span style={{ color: 'rgba(248,250,252,0.5)', fontSize: '1.2rem' }}>✓</span> : <span style={{ color: 'rgba(248,250,252,0.2)', fontSize: '1rem' }}>—</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.traditional ? <span style={{ color: 'rgba(248,250,252,0.5)', fontSize: '1.2rem' }}>✓</span> : <span style={{ color: 'rgba(248,250,252,0.2)', fontSize: '1rem' }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Connectivity differential */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8" style={{ border: '0.5px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.04)' }}>
              <div className="text-xs font-mono mb-4" style={{ color: '#00E5FF', letterSpacing: '0.15em' }}>DIFERENCIAL DE CONECTIVIDAD</div>
              <h3 className="font-bold mb-3" style={{ color: '#F8FAFC', fontSize: '1.3rem' }}>IaaS + Fibra Óptica Dedicada</h3>
              <p style={{ color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
                IaaS corporativo combinado con conectividad dedicada COTAS (GPON / fibra óptica), con opciones de redundancia y presencia local para garantizar <strong style={{ color: '#F8FAFC' }}>baja latencia y alta disponibilidad extremo a extremo</strong>.
              </p>
            </div>
            <div className="p-8" style={{ border: '0.5px solid rgba(30,41,59,0.8)', background: 'rgba(30,41,59,0.2)' }}>
              <div className="text-xs font-mono mb-4" style={{ color: 'rgba(248,250,252,0.5)', letterSpacing: '0.15em' }}>OPCIONES DE REDUNDANCIA</div>
              <div className="space-y-3">
                {[
                  'Conectividad GPON / FO evaluada caso a caso',
                  'Análisis de redundancia según criticidad del cliente',
                  'Presencia local para soporte de misión crítica',
                  'Baja latencia garantizada extremo a extremo',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: '#00E5FF', opacity: 0.7 }} />
                    <span style={{ color: 'rgba(248,250,252,0.7)', fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}