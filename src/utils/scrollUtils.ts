"use client";
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
    if (!currentRoute) {
        return;
    }
    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");
    const routeChange = currentPath !== targetPath;
    const hashChange = targetHash !== currentHash;
    const hashUndefined = targetHash === undefined;
    switch (true) {
        case routeChange:
            updateRoute(targetPath);
            switch (true) {
                case hashUndefined:
                    break;
                case hashChange:
                    updateRoute(`${targetPath}#${targetHash}`);
                    break;
            }
            break;
        case !routeChange:
            updateRoute(targetPath);
            switch (true) {
                case hashUndefined:
                    handleScrollClick(`scroll-start`);
                    break;
                case hashChange:
                    handleScrollClick(`${targetHash}`);
                    updateRoute(`${targetPath}#${targetHash}`);
                    break;
                default:
                    updateRoute(`${targetPath}#${targetHash}`);
            }
            break;
        default:
            break;
    }
};
