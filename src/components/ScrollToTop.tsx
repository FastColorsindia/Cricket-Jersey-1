import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                // If element doesn't exist yet (e.g. page still loading),
                // try again after a short delay
                setTimeout(() => {
                    const el = document.getElementById(hash.substring(1));
                    if (el) {
                        const navHeight = 80;
                        const elementPos = el.getBoundingClientRect().top;
                        const offsetPos = elementPos + window.pageYOffset - navHeight;
                        window.scrollTo({
                            top: offsetPos,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
