import { useRef, useState } from 'react';
import TechStackPage from '../pages/TechStackPage';
import ProjectsPage from '../pages/ProjectsPage';
import InterestsPage from '../pages/InterestsPage';

export default function Showcase() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const scrollToPanel = (i: number) => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        setIndex(Math.round(scroller.scrollLeft / scroller.clientWidth));
    };

    return (
        <section id="start-tech" className="relative h-screen overflow-hidden bg-[#111827]">
            <div
                ref={scrollerRef}
                onScroll={handleScroll}
                className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                <div className="h-full w-screen shrink-0 snap-start overflow-y-auto">
                    <TechStackPage />
                </div>
                <div className="h-full w-screen shrink-0 snap-start overflow-y-auto">
                    <ProjectsPage />
                </div>
                <div className="h-full w-screen shrink-0 snap-start overflow-y-auto">
                    <InterestsPage />
                </div>
            </div>

            {index > 0 && (
                <button
                    aria-label="Previous section"
                    onClick={() => scrollToPanel(index - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
            )}
            {index < 2 && (
                <button
                    aria-label="Next section"
                    onClick={() => scrollToPanel(index + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            )}
        </section>
    );
}
