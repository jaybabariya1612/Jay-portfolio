import { useEffect, useState } from 'react';

// Hook to detect if user is on a touch device
export const useTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  return isTouch;
};

// Hook for typing effect
export const useTypingEffect = (phrases, typingSpeed = 100, deletingSpeed = 55, pauseTime = 2200) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : (displayText.length === currentPhrase.length ? pauseTime : typingSpeed));

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

// Hook for scroll-based animations
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// Hook for counter animation
export const useCounterAnimation = (target, duration = 2000, startWhenVisible = true) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!startWhenVisible || hasAnimated) return;

    let startTime;
    let animationFrame;
    const step = Math.ceil(target / 40);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount((prev) => Math.min(prev + step, target));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startWhenVisible, hasAnimated]);

  return count;
};

// Hook for intersection observer (scroll reveal)
export const useInView = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, options);

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isInView];
};

// Hook for active section based on scroll position
export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
