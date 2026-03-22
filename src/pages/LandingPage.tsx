import { useEffect, useRef } from 'react';

export default function Hero() {
    const vantaRef = useRef<HTMLElement>(null);
    const vantaEffect = useRef<VantaEffect | null>(null);

    useEffect(() => {
        if (!vantaEffect.current) {
            vantaEffect.current = window.VANTA.DOTS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                color2: 0x111827,
                backgroundColor: 0x111827
            });
        }
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <section ref={vantaRef} className="relative min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-center text-5xl sm:text-7xl font-bold tracking-tight text-white leading-none relative -top-5">
                Hello! Welcome to my website!
                </h1>
                <button 
                    id="scroll-btn" 
                    className="border p-2 cursor-pointer text-white" 
                    onClick={() => document.getElementById('start-tech')?.scrollIntoView({behavior : 'smooth'})}
                >
                    About Me<span className="ml-2 relative -top-0.5">↓</span>
                </button>
            </div>
        </section>
    );
}