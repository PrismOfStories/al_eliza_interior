import { useEffect, useState } from "react";

/**
 * Custom hook to detect media query match (e.g., screen size).
 *
 * @param query CSS media query string (e.g. "(max-width: 768px)")
 * @returns boolean whether the query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}
