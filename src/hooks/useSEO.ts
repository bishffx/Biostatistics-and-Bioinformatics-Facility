import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  SEO_SECTION_REGISTRY, 
  INSTITUTIONAL_BASE_URL 
} from '../config/seoConfig';

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Lookup matching route or fallback to root
    const pathKey = location.pathname in SEO_SECTION_REGISTRY ? location.pathname : '/';
    const seoData = SEO_SECTION_REGISTRY[pathKey] || SEO_SECTION_REGISTRY['/'];
    
    const fullCanonicalUrl = seoData.canonicalPath 
      ? `${INSTITUTIONAL_BASE_URL}/${seoData.canonicalPath}`
      : `${INSTITUTIONAL_BASE_URL}/`;

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

    // Scroll to top on path change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
};
