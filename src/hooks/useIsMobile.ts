import { useState, useEffect } from "react";

const useIsMobile = (breakpoint: number = 768): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        return false;
    });

    useEffect(() => {
        if (typeof window === "undefined") return

        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint)
        };

        handleResize();

        window.addEventListener("resize", handleResize, { passive: true});
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [breakpoint]);
    return isMobile
}

export default useIsMobile