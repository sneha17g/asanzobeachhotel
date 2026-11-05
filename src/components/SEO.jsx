import { useEffect } from "react";

const SITE_URL = "https://asanzobeachhotel.com";
const SOCIAL_IMAGE = `${SITE_URL}/social-share.jpg?v=2`;

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const [, key, keyValue] = selector.match(/\[(name|property)="([^"]+)"\]/);
    element.setAttribute(key, keyValue);
    document.head.append(element);
  }
  element.setAttribute(attribute, value);
}

function SEO({ title, description, path, pageType = "WebPage" }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", SOCIAL_IMAGE);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", SOCIAL_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    let pageSchema = document.head.querySelector('script[data-page-schema="true"]');
    if (!pageSchema) {
      pageSchema = document.createElement("script");
      pageSchema.type = "application/ld+json";
      pageSchema.dataset.pageSchema = "true";
      document.head.append(pageSchema);
    }
    pageSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": pageType,
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#hotel` },
    });
  }, [description, pageType, path, title]);

  return null;
}

export default SEO;
