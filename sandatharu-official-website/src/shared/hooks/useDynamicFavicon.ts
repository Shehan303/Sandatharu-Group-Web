import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Route → favicon map. First match wins. */
const ROUTES: { test: (p: string) => boolean; icon: string }[] = [
  { test: p => p.startsWith('/coco'),      icon: '/public/logos/coco-logo.png' },
  { test: p => p.startsWith('/travels'),   icon: '/public/logos/travels-logo.png' },
  { test: p => p.startsWith('/it'),        icon: '/public/logos/it-logo.png' },
  { test: p => p.startsWith('/admin'),     icon: '/public/logos/sandatharu-logo-01.png' },
  { test: () => true,                      icon: '/public/logos/sandatharu-logo-01.png' } // default
];

export default function useDynamicFavicon() {
  const { pathname } = useLocation();

  useEffect(() => {
    const match = ROUTES.find(r => r.test(pathname));
    if (!match) return;

    // Find or create the favicon link
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    // Only update if changed (avoids redundant DOM writes)
    if (link.getAttribute('href') !== match.icon) {
      link.type = match.icon.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
      link.href = match.icon;
    }
  }, [pathname]);
}