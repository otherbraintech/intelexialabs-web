import React from 'react';
import { SectionLabel } from './WhatIsIaaS';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CAPABILITIES = [
  {
    icon: '⚡',
    title: 'Alta Disponibilidad de VMs',
    tag: 'HA · Auto-Recovery',
    desc: 'Las máquinas virtuales se reinician automáticamente en caso de fallo de nodo, minimizando el impacto en la operación y garantizando continuidad del servicio.',
    vmware: 'Equivalente: VMware HA',
  },
  {
    icon: '📸',
    title: 'Instantáneas (Snapshots)',
    tag: 'Backup · Restore',
    desc: 'Capturas del estado completo de la VM en cualquier momento, ideales para pruebas, actualizaciones controladas y puntos de restauración ante incidentes.',
    vmware: 'Equivalente: VMware Snapshots',
  },
  {
    icon: '🔄',
    title: 'Migración en Vivo',
    tag: 'Live Migration · Zero Downtime',
    desc: 'Traslado de VMs entre nodos físicos sin interrupción del servicio ni pérdida de conectividad. Mantenimiento sin impacto en producción.',
    vmware: 'Equivalente: VMware vMotion',
  },
  {
    icon: '⚖️',
    title: 'Reequilibrio Dinámico de Recursos',
    tag: 'DRS · Load Balancing',
    desc: 'Redistribución automática de cargas de trabajo para optimizar el uso de cómputo disponible y garantizar rendimiento constante en todo el cluster.',
    vmware: 'Equivalente: VMware DRS/DRR',
  },
];

export default function TechCapabilities() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="capabilities" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      {/* Security-feel bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(5,7,10,0) 0%, rgba(0,229,255,0.02) 50%, rgba(5,7,10,0) 100%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionLabel label="CAPACIDADES TÉCNICAS" />

        <div
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            <div>
              <h2 className="font-black mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}>
                Gestión Empresarial de<br />
                <span style={{ color: '#00E5FF' }}>Máquinas Virtuales</span>
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
                La plataforma IaaS de COTAS ofrece todas las funcionalidades que un equipo de TI espera de una solución lista para producción, equivalentes a las que brindan plataformas como VMware. Esto garantiza una <strong style={{ color: '#F8FAFC' }}>curva de adopción baja y una operación robusta desde el primer día</strong>.
              </p>
            </div>
            {/* Security image */}
            <div
              className="relative overflow-hidden hidden lg:block"
              style={{ border: '0.5px solid rgba(0,229,255,0.15)', maxHeight: '200px' }}
            >
              <img
                src="https://media.base44.com/images/public/6a778c1220d019be8ba7eee2/acf3dbe45_generated_4abf775d.png"
                alt="Protocolo de seguridad multi-capa — fortaleza digital"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,7,10,0.6) 0%, transparent 50%, rgba(5,7,10,0.6) 100%)' }} />
              {/* Scanning animation */}
              <div
                className="absolute inset-x-0 h-px pointer-events-none"
                style={{
                  backgroundColor: 'rgba(0,229,255,0.6)',
                  top: '50%',
                  boxShadow: '0 0 12px rgba(0,229,255,0.8)',
                  animation: 'scanline 3s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          <style>{`
            @keyframes scanline {
              0% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          `}</style>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="group p-8 transition-all duration-300 relative overflow-hidden"
                style={{
                  border: '0.5px solid rgba(30,41,59,0.8)',
                  background: 'rgba(5,7,10,0.7)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0,229,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: '0.5px solid rgba(0,229,255,0.3)', borderRight: '0.5px solid rgba(0,229,255,0.3)' }} />

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="text-2xl flex-shrink-0 w-14 h-14 flex items-center justify-center"
                    style={{ border: '0.5px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.06)' }}
                  >
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#F8FAFC', fontSize: '1.05rem' }}>{cap.title}</h3>
                    <span className="text-xs font-mono px-2 py-0.5" style={{ border: '0.5px solid rgba(0,229,255,0.25)', color: '#00E5FF', fontSize: '9px', letterSpacing: '0.1em' }}>
                      {cap.tag}
                    </span>
                  </div>
                </div>

                <p className="mb-4" style={{ color: 'rgba(248,250,252,0.65)', fontSize: '0.9rem', lineHeight: 1.65 }}>{cap.desc}</p>

                <div
                  className="flex items-center gap-2 text-xs font-mono"
                  style={{ color: 'rgba(248,250,252,0.35)', fontSize: '10px', letterSpacing: '0.08em' }}
                >
                  <div className="w-4 h-px" style={{ backgroundColor: 'rgba(248,250,252,0.2)' }} />
                  {cap.vmware}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}