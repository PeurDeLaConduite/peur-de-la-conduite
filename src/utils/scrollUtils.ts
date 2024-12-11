"use client";
// import { useNavigation } from "../utils/context/NavigationContext";
export const handleScrollClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 750;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutCubic =
            progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 4) / 2;
        window.scrollTo(0, start + (end - start) * easeInOutCubic);

        if (progress < 1) {
            window.requestAnimationFrame(scroll);
        }
    };

    window.requestAnimationFrame(scroll);
};
export const handleNavClick = (
    path: string,
    currentRoute: string | undefined,
    updateRoute: (route: string) => void,
    handleScrollClick: (hash: string) => void
) => {
    // const { currentRoute, updateRoute } = useNavigation();
    if (!currentRoute) {
        console.error("currentRoute is undefined");
        return;
    }
    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");

    if (currentPath != targetPath) {
        console.log("Change Route");

        updateRoute(targetPath);
        if (targetHash === undefined) {
            console.log("Different Route & Hash is undefined");
        } else if (targetHash != currentHash) {
            console.log("Change Hash");
            updateRoute(`${targetPath}#${targetHash}`);
        }
    } else {
        console.log("same Route");
        updateRoute(targetPath);
        if (targetHash === undefined) {
            console.log("same Route & Hash is undefined");
            handleScrollClick(`scroll-start`);
        } else if (targetHash != currentHash) {
            console.log("Change Hash");
            handleScrollClick(`${targetHash}`);
            updateRoute(`${targetPath}#${targetHash}`);
        } else if (targetHash === currentHash) {
            console.log("same Route & same Hash");
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
};
