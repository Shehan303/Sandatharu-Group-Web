import { useEffect, useRef, useState } from 'react';
import { ADMIN_TOOLS } from '../data/adminConfig';

interface Props {
  activeIndex: number;
  onSelect: (i: number) => void;
  onOpenLogin: (i: number) => void;
}

export default function Prism({ activeIndex, onSelect, onOpenLogin }: Props) {
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ x: 0, rot: 0, moved: false });
  const suppress = useRef(false);
  const [size, setSize] = useState({ S: 1200, PH: 800, R: 600, P: 3200 });

  /* Resize → recompute geometry */
  useEffect(() => {
    const calc = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const S = Math.max(W, 900) * 1.15;
      const PH = Math.max(H, 700) * 1.12;
      const R = S / 2;
      const P = Math.max(W, H) * 3.2;
      setSize({ S, PH, R, P });
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  /* Animate when active changes */
  useEffect(() => {
    setRotation(-90 * activeIndex);
  }, [activeIndex]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    drag.current = { x: e.clientX, rot: rotation, moved: false };
    try { (e.currentTarget as Element).setPointerCapture(e.pointerId); } catch {}
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    if (drag.current.moved) setRotation(drag.current.rot + dx * 0.35);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    try { (e.currentTarget as Element).releasePointerCapture(e.pointerId); } catch {}

    if (drag.current.moved) {
      const snapped = Math.round(rotation / 90) * 90;
      setRotation(snapped);
      const idx = ((-Math.round(snapped / 90) % 4) + 4) % 4;
      onSelect(idx);
      suppress.current = true;
      setTimeout(() => { suppress.current = false; }, 60);
    }
  };

  const handleFaceClick = (i: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (suppress.current) return;
    if (i === activeIndex) onOpenLogin(i);
    else onSelect(i);
  };

  return (
    <div
      className={`p-stage ${dragging ? 'grabbing' : ''}`}
      style={{ ['--P' as any]: `${size.P}px` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="p-world">
        <div
          className="p-prism"
          style={{
            transform: `rotateY(${rotation}deg)`,
            ['--S' as any]: `${size.S}px`,
            ['--PH' as any]: `${size.PH}px`,
            ['--R' as any]: `${size.R}px`
          }}
        >
          {ADMIN_TOOLS.map((tool, i) => (
            <div
              key={tool.key}
              className={`p-face ${i === activeIndex ? 'is-active' : ''}`}
              data-i={i}
              style={{ ['--c' as any]: tool.color, ['--cd' as any]: tool.colorDark }}
            >
              <div className="p-face-inner" onClick={handleFaceClick(i)}>
                <div className="p-face-bg" style={{ backgroundImage: `url(${tool.heroImage})` }} />
                <div className="p-face-veil" />
                <div className="p-face-content">
                  <div className="p-face-badge">
                    <span>0{i + 1}</span>
                    <span className="p-face-badge-line" />
                    <span>{tool.tag}</span>
                  </div>
                  <img src={tool.logo} alt={tool.name} className="p-face-logo" />
                  <h2 className="p-face-name">{tool.name}</h2>
                  <div className="p-face-cta">
                    {i === activeIndex ? (
                      <>
                        <span>Click to Sign In</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M13 6l6 6-6 6"/>
                        </svg>
                      </>
                    ) : 'Rotate to focus'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}