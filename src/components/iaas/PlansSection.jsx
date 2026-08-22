import React, { useState } from 'react';
import { SectionLabel } from './WhatIsIaaS';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const COMPUTE_PLANS = [
  { plan: 'Small', vcpu: 2, ram: 2, ssd: 60 },
  { plan: 'Medium', vcpu: 4, ram: 4, ssd: 100 },
  { plan: 'Large', vcpu: 8, ram: 16, ssd: 200 },
];

const CONNECTIVITY_PLANS = [
  { plan: 'Small', enlace: '10 + 10 Mbps' },
  { plan: 'Medium', enlace: '50 + 50 Mbps' },
  { plan: 'Large', enlace: '100 + 100 Mbps' },
];

export default function PlansSection() {
  const { ref, visible } = useScrollReveal();
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  const plan = COMPUTE_PLANS[selectedPlan];
  const conn = CONNECTIVITY_PLANS[selectedPlan];

  return (
    <section id="plans" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 20% 60%, rgba(0,229,255,0.04) 0%, transparent 60%)' }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="PLANES IaaS" />

        <div
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <h2 className="font-black mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}>
            Planes IaaS:{' '}
            <span style={{ color: '#00E5FF' }}>¿Qué Ofrecemos?</span>
          </h2>
          <p className="mb-16 max-w-3xl" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7 }}>
            La propuesta comercial se estructura en tres planes base escalables. Elija el plan que mejor se adapta al requerimiento del cliente y multiplique los recursos según la demanda.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Compute Plans Table */}
            <div>
              <div className="text-xs font-mono mb-6 flex items-center gap-3" style={{ color: '#00E5FF', letterSpacing: '0.15em' }}>
                <div className="w-4 h-px" style={{ backgroundColor: '#00E5FF' }} />
                PLANES DE CÓMPUTO
              </div>
              <div style={{ border: '0.5px solid rgba(0,229,255,0.2)' }}>
                {/* Header */}
                <div
                  className="grid grid-cols-4 px-4 py-3"
                  style={{ borderBottom: '0.5px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.06)' }}
                >
                  {['PLAN', 'vCPU', 'RAM GB', 'DISCO SSD GB'].map((h, i) => (
                    <div key={i} className="text-xs font-mono font-bold" style={{ color: '#00E5FF', letterSpacing: '0.1em', fontSize: '10px' }}>{h}</div>
                  ))}
                </div>
                {COMPUTE_PLANS.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 px-4 py-4 cursor-pointer transition-all duration-200"
                    style={{
                      borderBottom: i < COMPUTE_PLANS.length - 1 ? '0.5px solid rgba(30,41,59,0.5)' : 'none',
                      background: selectedPlan === i ? 'rgba(0,229,255,0.06)' : 'transparent',
                    }}
                    onClick={() => setSelectedPlan(i)}
                  >
                    <div className="font-bold text-sm flex items-center gap-2" style={{ color: selectedPlan === i ? '#00E5FF' : '#F8FAFC' }}>
                      {selectedPlan === i && <div className="w-1.5 h-1.5" style={{ backgroundColor: '#00E5FF' }} />}
                      {p.plan}
                    </div>
                    <div className="text-sm font-mono" style={{ color: 'rgba(248,250,252,0.8)' }}>{p.vcpu}</div>
                    <div className="text-sm font-mono" style={{ color: 'rgba(248,250,252,0.8)' }}>{p.ram}</div>
                    <div className="text-sm font-mono" style={{ color: 'rgba(248,250,252,0.8)' }}>{p.ssd}</div>
                  </div>
                ))}
              </div>
              {/* Multiplier info */}
              <div className="mt-4 p-4 flex items-start gap-3" style={{ border: '0.5px solid rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.03)' }}>
                <div className="text-lg flex-shrink-0">ℹ️</div>
                <p className="text-xs" style={{ color: 'rgba(248,250,252,0.65)', lineHeight: 1.6 }}>
                  Los planes son multiplicables: si el cliente necesita más recursos, se aplican N veces el plan base hasta alcanzar el requerimiento exacto.
                </p>
              </div>
            </div>

            {/* Connectivity Plans Table */}
            <div>
              <div className="text-xs font-mono mb-6 flex items-center gap-3" style={{ color: '#00E5FF', letterSpacing: '0.15em' }}>
                <div className="w-4 h-px" style={{ backgroundColor: '#00E5FF' }} />
                CONECTIVIDAD DEDICADA
              </div>
              <div style={{ border: '0.5px solid rgba(0,229,255,0.2)' }}>
                <div
                  className="grid grid-cols-2 px-4 py-3"
                  style={{ borderBottom: '0.5px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.06)' }}
                >
                  {['PLAN', 'ENLACE (UP + DOWN)'].map((h, i) => (
                    <div key={i} className="text-xs font-mono font-bold" style={{ color: '#00E5FF', letterSpacing: '0.1em', fontSize: '10px' }}>{h}</div>
                  ))}
                </div>
                {CONNECTIVITY_PLANS.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 px-4 py-4 transition-all duration-200"
                    style={{
                      borderBottom: i < CONNECTIVITY_PLANS.length - 1 ? '0.5px solid rgba(30,41,59,0.5)' : 'none',
                      background: selectedPlan === i ? 'rgba(0,229,255,0.06)' : 'transparent',
                    }}
                  >
                    <div className="font-bold text-sm flex items-center gap-2" style={{ color: selectedPlan === i ? '#00E5FF' : '#F8FAFC' }}>
                      {selectedPlan === i && <div className="w-1.5 h-1.5" style={{ backgroundColor: '#00E5FF' }} />}
                      {p.plan}
                    </div>
                    <div className="text-sm font-mono" style={{ color: 'rgba(248,250,252,0.8)' }}>{p.enlace}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 flex items-start gap-3" style={{ border: '0.5px solid rgba(255,215,0,0.2)', background: 'rgba(255,215,0,0.03)' }}>
                <div className="text-lg flex-shrink-0">⚠️</div>
                <p className="text-xs" style={{ color: 'rgba(248,250,252,0.65)', lineHeight: 1.6 }}>
                  Factibilidad técnica GPON/FO evaluada caso a caso. Se analiza la necesidad de redundancia según criticidad del cliente.
                </p>
              </div>
            </div>
          </div>

          {/* Resource Visualizer */}
          <div className="p-8" style={{ border: '0.5px solid rgba(0,229,255,0.25)', background: 'rgba(0,229,255,0.03)' }}>
            <div className="text-xs font-mono mb-8 flex items-center gap-3" style={{ color: '#00E5FF', letterSpacing: '0.15em' }}>
              <div className="w-4 h-px" style={{ backgroundColor: '#00E5FF' }} />
              CONFIGURADOR DE RECURSOS — PLAN {plan.plan.toUpperCase()}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { label: 'vCPU', value: plan.vcpu * multiplier, unit: 'cores', max: 64 },
                { label: 'RAM', value: plan.ram * multiplier, unit: 'GB', max: 128 },
                { label: 'DISCO SSD', value: plan.ssd * multiplier, unit: 'GB', max: 2000 },
              ].map((r, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-mono" style={{ color: 'rgba(248,250,252,0.5)', letterSpacing: '0.1em', fontSize: '10px' }}>{r.label}</span>
                    <span className="font-black font-mono" style={{ color: '#00E5FF', fontSize: '1.5rem' }}>
                      {r.value}<span className="text-xs ml-1" style={{ color: 'rgba(0,229,255,0.7)', fontSize: '0.65rem' }}>{r.unit}</span>
                    </span>
                  </div>
                  <div className="h-1.5 w-full" style={{ backgroundColor: 'rgba(30,41,59,0.8)' }}>
                    <div
                      className="h-full transition-all duration-500"
                      style={{ width: `${Math.min((r.value / r.max) * 100, 100)}%`, backgroundColor: '#00E5FF' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-mono" style={{ color: 'rgba(248,250,252,0.5)', letterSpacing: '0.1em', fontSize: '11px' }}>MULTIPLICADOR:</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 10].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMultiplier(m)}
                    className="w-10 h-10 font-mono text-sm font-bold transition-all duration-200"
                    style={{
                      border: `0.5px solid ${multiplier === m ? '#00E5FF' : 'rgba(30,41,59,0.8)'}`,
                      color: multiplier === m ? '#00E5FF' : 'rgba(248,250,252,0.5)',
                      background: multiplier === m ? 'rgba(0,229,255,0.1)' : 'transparent',
                    }}
                  >
                    {m}x
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono ml-2" style={{ color: 'rgba(248,250,252,0.35)', fontSize: '10px' }}>
                × PLAN {plan.plan.toUpperCase()} BASE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}