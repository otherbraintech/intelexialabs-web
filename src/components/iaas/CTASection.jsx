import React from 'react';
import { SectionLabel } from './WhatIsIaaS';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NEXT_STEPS = [
  { num: '01', title: 'Evaluación de Factibilidad', desc: 'Evaluación técnica GPON/FO para su ubicación y requerimientos específicos.' },
  { num: '02', title: 'Definición del Plan Base', desc: 'Definición del plan base y recursos requeridos según la demanda real del negocio.' },
  { num: '03', title: 'Propuesta Comercial', desc: 'Propuesta comercial personalizada con precios y condiciones adaptadas a su organización.' },
  { num: '04', title: 'POC de Entrada Rápida', desc: 'Piloto tipo "Land & Expand": comience rápido y escale sin fricciones conforme crece.' },
];

export default function CTASection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="cta" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Alliance section */}
        <div
          className="mb-20 p-8 transition-all duration-1000"
          style={{
            border: '0.5px solid rgba(0,229,255,0.2)',
            background: 'rgba(5,7,10,0.8)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <div className="text-xs font-mono mb-6 flex items-center gap-3" style={{ color: '#00E5FF', letterSpacing: '0.15em' }}>
            <div className="w-4 h-px" style={{ backgroundColor: '#00E5FF' }} />
            ALIANZA ESTRATÉGICA
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#F8FAFC', fontSize: '1.2rem' }}>COTAS</h3>
              <p style={{ color: 'rgba(248,250,252,0.65)', lineHeight: 1.7 }}>
                Aporta la <strong style={{ color: '#F8FAFC' }}>infraestructura CPD</strong> y la conectividad de fibra óptica dedicada. Centro de Procesamiento de Datos de clase empresarial ubicado en Bolivia.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#F8FAFC', fontSize: '1.2rem' }}>Intelexia Labs by IT911</h3>
              <p style={{ color: 'rgba(248,250,252,0.65)', lineHeight: 1.7 }}>
                Aporta el <strong style={{ color: '#F8FAFC' }}>diseño, implementación y soporte</strong> orientado a misión crítica. Expertise técnico especializado con presencia local en Bolivia.
              </p>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div
          className="mb-20 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transitionDelay: '200ms' }}
        >
          <SectionLabel label="PRÓXIMOS PASOS" />
          <h2 className="font-black mb-12 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}>
            Estamos Listos Para<br />
            <span style={{ color: '#00E5FF' }}>Acompañar su Organización</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NEXT_STEPS.map((step, i) => (
              <div
                key={i}
                className="p-6 relative transition-all duration-300"
                style={{ border: '0.5px solid rgba(30,41,59,0.8)', background: 'rgba(5,7,10,0.7)', cursor: 'default' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,229,255,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: '0.5px solid rgba(0,229,255,0.4)', borderLeft: '0.5px solid rgba(0,229,255,0.4)' }} />
                <div className="text-xs font-mono mb-4 font-bold" style={{ color: 'rgba(0,229,255,0.5)', letterSpacing: '0.2em', fontSize: '10px' }}>
                  PASO {step.num}
                </div>
                <h3 className="font-bold mb-3" style={{ color: '#F8FAFC', fontSize: '0.95rem', lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ color: 'rgba(248,250,252,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="text-center py-16 relative transition-all duration-1000"
          style={{
            border: '0.5px solid rgba(0,229,255,0.2)',
            background: 'rgba(0,229,255,0.03)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '400ms',
          }}
        >
          {/* Corner accents */}
          {[['top-0 left-0', 'border-t border-l'], ['top-0 right-0', 'border-t border-r'], ['bottom-0 left-0', 'border-b border-l'], ['bottom-0 right-0', 'border-b border-r']].map(([pos, border], i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6`} style={{ [border.includes('t') ? 'borderTopColor' : 'borderBottomColor']: '#00E5FF', [border.includes('l') ? 'borderLeftColor' : 'borderRightColor']: '#00E5FF', borderTopWidth: border.includes('t') ? '0.5px' : 0, borderBottomWidth: border.includes('b') ? '0.5px' : 0, borderLeftWidth: border.includes('l') ? '0.5px' : 0, borderRightWidth: border.includes('r') ? '0.5px' : 0 }} />
          ))}

          <div className="text-xs font-mono mb-4" style={{ color: 'rgba(0,229,255,0.6)', letterSpacing: '0.2em', fontSize: '10px' }}>
            NUBE CORPORATIVA PRIVADA · IaaS · BOLIVIA
          </div>
          <h2
            className="font-black mb-6 leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F8FAFC', letterSpacing: '-0.02em' }}
          >
            Inicie su Infraestructura<br />
            <span style={{ color: '#00E5FF' }}>Privada Hoy</span>
          </h2>
          <p className="mb-10 max-w-xl mx-auto" style={{ fontSize: '1.125rem', color: 'rgba(248,250,252,0.65)', lineHeight: 1.7 }}>
            Una infraestructura de nube privada corporativa, segura, ágil y totalmente boliviana. Sin compromisos iniciales — comience con un piloto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-10 py-4 font-mono font-black text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.3), rgba(0,229,255,0.1))',
                border: '1px solid #00E5FF',
                color: '#00E5FF',
                letterSpacing: '0.15em',
                boxShadow: '0 0 30px rgba(0,229,255,0.15)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,229,255,0.3)';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0,229,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,229,255,0.3), rgba(0,229,255,0.1))';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.15)';
              }}
            >
              Solicitar Arquitectura
            </button>
            <button
              className="px-10 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                border: '0.5px solid rgba(248,250,252,0.2)',
                color: 'rgba(248,250,252,0.6)',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F8FAFC'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,250,252,0.6)'}
            >
              Ver Planes
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '0.5px solid rgba(30,41,59,0.5)' }}>
          <div className="text-xs font-mono" style={{ color: 'rgba(248,250,252,0.3)', letterSpacing: '0.1em', fontSize: '10px' }}>
            © 2025 INTELEXIA LABS BY IT911 · EN ALIANZA CON COTAS · TODOS LOS DERECHOS RESERVADOS
          </div>
          <div className="flex items-center gap-6">
            {['Infraestructura', 'Seguridad', 'Planes', 'Contacto'].map((item, i) => (
              <span
                key={i}
                className="text-xs font-mono cursor-pointer transition-colors duration-200 text-slate-100/30 hover:text-[#00E5FF]"
                style={{ letterSpacing: '0.08em', fontSize: '10px' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}