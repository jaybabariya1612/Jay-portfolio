import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  enabled?: boolean;
}

export function CustomCursor({ enabled = true }: CustomCursorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    if (!enabled || isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .interactive, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [enabled, isTouchDevice, cursorX, cursorY]);

  if (!enabled || isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D97706] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          scale: isPressed ? 0.8 : isHovering ? 1.5 : 1,
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#D97706]/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: smoothX.get() - 8,
          y: smoothY.get() - 8,
          scale: isHovering ? 1.5 : 1,
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-30"
        style={{
          x: smoothX.get() - 250,
          y: smoothY.get() - 250,
          background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, rgba(217,119,6,0.02) 40%, transparent 70%)',
        }}
      />
    </>
  );
}
