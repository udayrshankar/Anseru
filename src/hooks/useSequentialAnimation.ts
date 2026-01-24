import { useState, useEffect } from 'react';

export function useSequentialAnimation(itemCount: number, duration: number = 4000) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!itemCount || isHovering) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % itemCount);
        }, duration);

        return () => clearInterval(interval);
    }, [itemCount, duration, isHovering]);

    return {
        activeIndex,
        // Handlers to pause animation on hover
        onMouseEnter: () => setIsHovering(true),
        onMouseLeave: () => setIsHovering(false),
        // Allow manual setting if needed (e.g. on card click)
        setActiveIndex
    };
}
