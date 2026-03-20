interface VantaEffect {
    destroy(): void;
}

interface Window {
    VANTA: {
        DOTS(options: Record<string, unknown>): VantaEffect;
    };
}
