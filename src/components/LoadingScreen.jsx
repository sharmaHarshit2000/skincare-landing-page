import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const LoadingScreen = () => {
  const loadingRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut"
    });
    
    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        document.body.style.overflow = 'visible';
      }
    });
    
    return () => tl.kill();
  }, []);

  return (
    <div ref={loadingRef} className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="text-3xl font-bold mb-6">GLOWWW NATURALLY</div>
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div ref={progressRef} className="h-full bg-primary-dark rounded-full w-2/3"></div>
      </div>
      <span className="text-sm text-gray-600">Loading...</span>
    </div>
  );
};