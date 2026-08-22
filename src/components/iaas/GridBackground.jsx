import React, { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let traces = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create moving trace particles along grid lines
    const CELL = 80;
    class Trace {
      constructor() { this.reset(); }
      reset() {
        this.axis = Math.random() > 0.5 ? 'h' : 'v';
        if (this.axis === 'h') {
          this.y = Math.floor(Math.random() * (canvas.height / CELL)) * CELL;
          this.x = Math.random() > 0.5 ? 0 : canvas.width;
          this.dir = this.x === 0 ? 1 : -1;
        } else {
          this.x = Math.floor(Math.random() * (canvas.width / CELL)) * CELL;
          this.y = Math.random() > 0.5 ? 0 : canvas.height;
          this.dir = this.y === 0 ? 1 : -1;
        }
        this.speed = 1 + Math.random() * 2;
        this.length = 40 + Math.random() * 80;
        this.alpha = 0.3 + Math.random() * 0.5;
      }
      update() {
        if (this.axis === 'h') this.x += this.dir * this.speed;
        else this.y += this.dir * this.speed;
        if (this.x < -200 || this.x > canvas.width + 200 || this.y < -200 || this.y > canvas.height + 200) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        const grad = this.axis === 'h'
          ? ctx.createLinearGradient(this.x - this.dir * this.length, this.y, this.x, this.y)
          : ctx.createLinearGradient(this.x, this.y - this.dir * this.length, this.x, this.y);
        grad.addColorStop(0, 'rgba(0,229,255,0)');
        grad.addColorStop(1, `rgba(0,229,255,${this.alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        if (this.axis === 'h') {
          ctx.moveTo(this.x - this.dir * this.length, this.y);
          ctx.lineTo(this.x, this.y);
        } else {
          ctx.moveTo(this.x, this.y - this.dir * this.length);
          ctx.lineTo(this.x, this.y);
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    for (let i = 0; i < 18; i++) traces.push(new Trace());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = 'rgba(30,41,59,0.5)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += CELL) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += CELL) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Grid intersections
      ctx.fillStyle = 'rgba(0,229,255,0.12)';
      for (let x = 0; x < canvas.width; x += CELL) {
        for (let y = 0; y < canvas.height; y += CELL) {
          ctx.beginPath(); ctx.arc(x, y, 1.2, 0, Math.PI * 2); ctx.fill();
        }
      }

      traces.forEach(t => { t.update(); t.draw(); });
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
    />
  );
}