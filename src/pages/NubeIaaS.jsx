import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/iaas/HeroSection';
import NavBar from '@/components/iaas/NavBar';
import WhatIsIaaS from '@/components/iaas/WhatIsIaaS';
import ServicesSection from '@/components/iaas/ServicesSection';
import ArchitectureSection from '@/components/iaas/ArchitectureSection';
import TechCapabilities from '@/components/iaas/TechCapabilities';
import BenefitsDifferentiators from '@/components/iaas/BenefitsDifferentiators';
import PlansSection from '@/components/iaas/PlansSection';
import CTASection from '@/components/iaas/CTASection';
import GridBackground from '@/components/iaas/GridBackground';

export default function NubeIaaS() {
  useEffect(() => {
    document.body.style.backgroundColor = '#05070A';
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#05070A', color: '#F8FAFC', fontFamily: "'Inter', sans-serif" }}>
      <GridBackground />
      <CustomCursor />
      <NavBar />
      <main>
        <HeroSection />
        <WhatIsIaaS />
        <ServicesSection />
        <ArchitectureSection />
        <TechCapabilities />
        <BenefitsDifferentiators />
        <PlansSection />
        <CTASection />
      </main>
    </div>
  );
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] select-none"
      style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <line x1="16" y1="0" x2="16" y2="10" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="16" y1="22" x2="16" y2="32" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="0" y1="16" x2="10" y2="16" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="22" y1="16" x2="32" y2="16" stroke="#00E5FF" strokeWidth="1.5" />
        <rect x="13" y="13" width="6" height="6" stroke="#00E5FF" strokeWidth="1" fill="none" />
      </svg>
      <div className="absolute top-8 left-2 text-xs font-mono whitespace-nowrap" style={{ color: '#00E5FF', fontSize: '9px', opacity: 0.7 }}>
        {pos.x},{pos.y}
      </div>
    </div>
  );
}