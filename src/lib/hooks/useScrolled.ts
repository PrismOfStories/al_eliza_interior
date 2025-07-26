import { useEffect, useState } from "react";

/**
 * Detects if the page has been scrolled past a specified Y offset (default: 50px).
 * @param offset Scroll Y offset threshold
 * @returns boolean - whether the user has scrolled past the offset
 */
export function useScrolled(offset: number = 50): boolean {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > offset);
        };

        handleScroll(); // initialize on mount

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return scrolled;
}
