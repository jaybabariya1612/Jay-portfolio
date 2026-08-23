import { useEffect, useState } from 'react';
import { useTouchDevice } from '../hooks/useEffects';

const CustomCursor = () => {
  const isTouchDevice = useTouchDevice();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .proj-card, .service-card, .skill-tag');
      if (target) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Aurora glow */}
      <div
        id="aurora-cursor"
        style={{
          position: 'fixed',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,184,108,0.08) 0%, rgba(77,182,172,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.12s ease, top 0.12s ease',
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Cursor dot */}
      <div
        id="cursor-dot"
        style={{
          position: 'fixed',
          width: isHovering ? '16px' : '8px',
          height: isHovering ? '16px' : '8px',
          borderRadius: '50%',
          background: 'var(--secondary)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s ease, top 0.05s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
          mixBlendMode: 'screen',
          boxShadow: '0 0 12px var(--secondary), 0 0 24px rgba(77,182,172,0.5)',
          left: position.x,
          top: position.y,
          opacity: isHovering ? 0.8 : 1,
        }}
      />
      
      {/* Cursor ring */}
      <div
        id="cursor-ring"
        style={{
          position: 'fixed',
          width: isHovering ? '56px' : '36px',
          height: isHovering ? '56px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(255,184,108,0.8)' : 'rgba(255,184,108,0.5)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.15s ease, top 0.15s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CustomCursor;
