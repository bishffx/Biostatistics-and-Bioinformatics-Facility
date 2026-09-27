import { useEffect } from 'react';
import { 
  SEO_SECTION_REGISTRY, 
  INSTITUTIONAL_BASE_URL 
} from '../config/seoConfig';

export const useSEO = (activeSection: string, setActiveSection?: (sec: string) => void) => {
  // 1. Initial mount: Listen to hash changes / browser history navigation
  useEffect(() => {
    if (!setActiveSection) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && SEO_SECTION_REGISTRY[hash]) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection('home');
      }
    };

    // Check initial hash on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveSection]);

  // 2. Active section change: Synchronize page title, meta description, canonical URL, and OpenGraph/Twitter tags
  useEffect(() => {
    const seoData = SEO_SECTION_REGISTRY[activeSection] || SEO_SECTION_REGISTRY.home;
    const fullCanonicalUrl = `${INSTITUTIONAL_BASE_URL}/${seoData.canonicalPath}`;

    // Update document title
    document.title = seoData.title;

    // Helper to safely update or create meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Description
    setMetaTag('name', 'description', seoData.description);

    // Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonicalUrl);

    // Open Graph updates
    setMetaTag('property', 'og:title', seoData.title);
    setMetaTag('property', 'og:description', seoData.description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);

    // Twitter Card updates
    setMetaTag('name', 'twitter:title', seoData.title);
    setMetaTag('name', 'twitter:description', seoData.description);

    // Synchronize browser URL bar hash without forcing scroll jumps
    const currentHash = window.location.hash.replace('#', '').trim();
    if (activeSection === 'home' && currentHash !== '') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else if (activeSection !== 'home' && currentHash !== activeSection) {
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);
};
