// src/pages/ArticlePage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Individual article page at /insights/:slug
// Renders Sanity Portable Text with @portabletext/react
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { getPostBySlug, urlFor } from '../lib/sanity';

const SITE_URL = 'https://coachlilian.com';
const SITE_NAME = 'Coach Lilian';
const FALLBACK_IMAGE = `${SITE_URL}/logo.png`;

// ── Dynamic SEO / JSON-LD injector ───────────────────────────────────────────
function useSeoHead(post) {
  useEffect(() => {
    if (!post) return;

    const slug     = post.slug?.current ?? '';
    const pageUrl  = `${SITE_URL}/insights/${slug}`;
    const title    = `${post.title} | ${SITE_NAME}`;
    const desc     = post.excerpt || `Read ${post.title} on the career Insight.`;
    const imgUrl   = post.coverImage?.asset
      ? urlFor(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
      : FALLBACK_IMAGE;
    const author   = post.author?.name ?? 'Coach Lilian';
    const pubDate  = post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString();
    const modDate  = post._updatedAt  ? new Date(post._updatedAt).toISOString()  : pubDate;

    // ── <title> ──
    const prevTitle      = document.title;
    document.title       = title;

    // ── Helper: inject a <meta> tag and track it for cleanup ──
    const injected = [];
    const setMeta  = (attr, attrVal, content) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      const isNew = !el;
      if (isNew) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
        injected.push(el);
      }
      el.setAttribute('content', content);
      el.__prevContent = el.getAttribute('content');
    };

    // ── Basic SEO ──
    setMeta('name', 'description',   desc);
    setMeta('name', 'author',        author);

    // ── Canonical ──
    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
      injected.push(canonical);
    }
    canonical.href = pageUrl;

    // ── Open Graph ──
    setMeta('property', 'og:type',        'article');
    setMeta('property', 'og:url',         pageUrl);
    setMeta('property', 'og:title',       post.title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:image',       imgUrl);
    setMeta('property', 'article:published_time', pubDate);
    setMeta('property', 'article:modified_time',  modDate);
    setMeta('property', 'article:author',         author);
    setMeta('property', 'article:section',        post.category ?? 'Remote Jobs');

    // ── Twitter / X ──
    setMeta('name', 'twitter:card',        'summary_large_image');
    setMeta('name', 'twitter:title',       post.title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image',       imgUrl);
    setMeta('name', 'twitter:image:alt',   post.title);

    // ── JSON-LD Article structured data ──
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type':    'Article',
      headline:   post.title,
      description: desc,
      image:      imgUrl,
      datePublished: pubDate,
      dateModified:  modDate,
      url:        pageUrl,
      author: {
        '@type': 'Person',
        name:    author,
        worksFor: { '@type': 'Organization', name: SITE_NAME },
      },
      publisher: {
        '@type': 'Organization',
        name:    SITE_NAME,
        logo:    { '@type': 'ImageObject', url: `${SITE_URL}/images/og-image.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      ...(post.readTime ? { timeRequired: `PT${post.readTime}M` } : {}),
    };
    const ldScript       = document.createElement('script');
    ldScript.type        = 'application/ld+json';
    ldScript.textContent = JSON.stringify(jsonLd);
    ldScript.id          = '__article-ld-json__';
    document.head.appendChild(ldScript);

    // ── Cleanup on unmount / post change ──
    return () => {
      document.title = prevTitle;
      if (prevCanonical) canonical.href = prevCanonical;
      injected.forEach(el => el.parentNode?.removeChild(el));
      ldScript.parentNode?.removeChild(ldScript);
    };
  }, [post]);
}

const CATEGORY_LABELS = {
  'remote-work':          'Remote Work',
  'career-growth':        'Career Growth',
  'financial-freedom':    'Financial Freedom',
  'freelancing':          'Freelancing',
  'interview-tips':       'Interview Tips',
  'mindset-motivation':   'Mindset & Motivation',
  'success-stories':      'Success Stories',
  'announcements':        'Announcements',
};

const CATEGORY_COLORS = {
  'remote-work':          '#F59E0B',
  'career-growth':        '#F59E0B',
  'financial-freedom':    '#F59E0B',
  'freelancing':          '#F59E0B',
  'interview-tips':       '#F59E0B',
  'mindset-motivation':   '#F59E0B',
  'success-stories':      '#F59E0B',
  'announcements':        '#F59E0B',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ── Portable Text component overrides ────────────────────────────────────────
const ptComponents = {
  block: {
    normal:     ({ children }) => <p className="art-p">{children}</p>,
    h2:         ({ children }) => <h2 className="art-h2">{children}</h2>,
    h3:         ({ children }) => <h3 className="art-h3">{children}</h3>,
    h4:         ({ children }) => <h4 className="art-h4">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="art-blockquote">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#0A1F44' }}>{children}</strong>,
    em:     ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
    link:   ({ value, children }) => (
      <a href={value.href} target={value.blank ? '_blank' : '_self'} rel="noopener noreferrer" className="art-link">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="art-figure">
        <img
          src={urlFor(value).width(900).auto('format').url()}
          alt={value.alt || ''}
          className="art-body-img"
        />
        {value.caption && <figcaption className="art-caption">{value.caption}</figcaption>}
      </figure>
    ),
  },
};

export default function ArticlePage() {
  const { slug }    = useParams();
  const [post,    setPost]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [copied,  setCopied]  = useState(false);

  // ── Share logic ──
  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  // ── Inject SEO / JSON-LD whenever post data arrives ──
  useSeoHead(post);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPostBySlug(slug)
      .then(data => {
        if (!data) setError('Article not found.');
        else setPost(data);
      })
      .catch(() => setError('Could not load this article. Please try again.'))
      .finally(() => setLoading(false));
  }, [slug]);

  const accent = post ? (CATEGORY_COLORS[post.category] || '#EE7B30') : '#EE7B30';

  return (
    <>
    <Navbar />
 <style>{`
  /* Simple system font stack - clean and fast loading */
  .art-root    { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  .art-display { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }

  /* ── Hero ── */
  .art-hero {
    background: #13262F;
    position: relative; overflow: hidden;
  }
  .art-hero-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover;
    opacity: 0.25;
  }
  .art-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(7,21,46,0.5) 0%, #13262F 100%);
  }

  /* ── Article body ── */
  .art-body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  .art-p  { font-size: 17px; line-height: 1.85; color: #374151; margin-bottom: 1.5rem; }
  .art-h2 {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 28px; font-weight: 800; text-transform: uppercase;
    color: #0A1F44; letter-spacing: 0.01em;
    margin: 2.5rem 0 1rem; border-left: 3px solid #EE7B30; padding-left: 14px;
  }
  .art-h3 {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 22px; font-weight: 700; text-transform: uppercase;
    color: #0A1F44; margin: 2rem 0 0.75rem;
  }
  .art-h4 {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 17px; font-weight: 700; color: #0A1F44; margin: 1.5rem 0 0.5rem;
  }
  .art-blockquote {
    border-left: 3px solid #F59E0B;
    background: #FFFBEB;
    padding: 20px 24px; margin: 2rem 0;
    font-style: italic; color: #6B7280; font-size: 17px; line-height: 1.75;
  }
  .art-link { color: #EE7B30; text-decoration: underline; text-underline-offset: 3px; }
  .art-link:hover { color: #EE7B30; }
  .art-figure   { margin: 2.5rem 0; }
  .art-body-img { width: 100%; height: auto; display: block; border-radius: 2px; }
  .art-caption  { text-align: center; font-size: 13px; color: #9CA3AF; margin-top: 10px; font-style: italic; }

  /* ── Back button ── */
  .art-back {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
    color: rgba(255,255,255,0.5); text-decoration: none;
    transition: color 0.2s;
  }
  .art-back:hover { color: #F59E0B; }

  /* ── Category badge ── */
  .art-cat-badge {
    display: inline-block;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
    padding: 4px 12px; border-left: 2px solid;
  }

  /* ── Author card ── */
  .art-author-card {
    background: #F3F4F6; border: 1px solid #E5E7EB;
    padding: 24px; display: flex; align-items: center; gap: 16px;
  }
  .art-author-avatar {
    width: 64px; height: 64px; border-radius: 50%; object-fit: cover;
    border: 3px solid rgba(245,158,11,0.3); flex-shrink: 0;
  }
  .art-author-fallback {
    background: #0A1F44; color: white;
    display: flex; align-items: center; justify-content: center;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 800; font-size: 24px;
  }

  /* ── Back to insights CTA ── */
  .art-cta-btn {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
    color: #07152E; background: #EE7B30; padding: 13px 30px;
    text-decoration: none; transition: background 0.2s;
  }
  .art-cta-btn:hover { background: #EE7B30; }

  /* ── Skeleton ── */
  @keyframes art-shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  .art-skel {
    background: linear-gradient(90deg,#E5E7EB 25%,#F3F4F6 50%,#E5E7EB 75%);
    background-size: 200% 100%;
    animation: art-shimmer 1.4s infinite;
    border-radius: 4px;
  }

  /* ── Share Actions ── */
  .art-share-btn {
    display: inline-flex; align-items: center; gap: 8px;
    color: rgba(255,255,255,0.6); font-size: 12px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    padding: 6px 12px; border-radius: 100px; cursor: pointer;
    transition: all 0.2s;
  }
  .art-share-btn:hover { background: rgba(255,255,255,0.1); color: #F59E0B; border-color: rgba(245,158,11,0.3); }
  .art-share-btn.copied { color: #10B981; border-color: #10B981; background: rgba(16,185,129,0.05); }

  .art-share-bottom {
    margin-top: 40px; padding: 24px;
    border: 1px dashed #E5E7EB; border-radius: 4px;
    display: flex; flex-direction: column; align-items: center; gap: 16px;
    text-align: center;
  }
  .art-share-bottom-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: #0A1F44; color: white; border: none;
    padding: 12px 24px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
    font-size: 14px; cursor: pointer; transition: background 0.2s;
  }
  .art-share-bottom-btn:hover { background: #111827; }
  .art-share-bottom-btn.copied { background: #059669; }
`}</style>

      <div className="art-root" style={{ paddingTop: 70 }}>

        {/* ── LOADING ── */}
        {loading && (
          <div>
            <div style={{ background: '#0A1F44', height: 400 }} />
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[80, 60, 100, 100, 70, 100, 85].map((w, i) => (
                <div key={i} className="art-skel" style={{ height: i < 2 ? 28 : 16, width: `${w}%` }} />
              ))}
            </div>
          </div>
        )}

        {/* ── ERROR ── */}
        {error && !loading && (
          <div style={{ textAlign: 'center', padding: '120px 24px' }}>
            <p className="art-display" style={{ fontSize: 24, fontWeight: 700, textTransform: 'uppercase', color: '#0A1F44', marginBottom: 12 }}>{error}</p>
            <Link to="/insights" className="art-cta-btn">← Back to Insights</Link>
          </div>
        )}

        {/* ── ARTICLE ── */}
        {post && !loading && (
          <>
            {/* Hero */}
            <div className="art-hero" style={{ minHeight: 440, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px 24px 48px' }}>
              {post.coverImage?.asset && (
                <img
                  src={urlFor(post.coverImage).width(1400).height(600).fit('crop').auto('format').url()}
                  alt={post.coverImage.alt || post.title}
                  className="art-hero-img"
                />
              )}
              <div className="art-hero-overlay" />

              <div style={{ maxWidth: 860, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                {/* back link */}
                <Link to="/insights" className="art-back" style={{ marginBottom: 24, display: 'inline-flex' }}>
                  <svg style={{ width: 13, height: 13 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Insights
                </Link>

                {/* category */}
                <div style={{ marginBottom: 16 }}>
                  <span className="art-cat-badge" style={{ borderColor: accent, color: accent, background: `${accent}18` }}>
                    {CATEGORY_LABELS[post.category] || post.category}
                  </span>
                </div>

                {/* title */}
                <h1
                  className="art-display"
                  style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, textTransform: 'uppercase', color: 'white', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: 20 }}
                >
                  {post.title}
                </h1>

                {/* meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  {post.author?.photo?.asset ? (
                    <img
                      src={urlFor(post.author.photo).width(40).height(40).fit('crop').url()}
                      alt={post.author.name}
                      style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(245,158,11,0.4)' }}
                    />
                  ) : (
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F59E0B', color: '#07152E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 16 }}>
                      {post.author?.name?.[0] ?? 'R'}
                    </div>
                  )}
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {post.author?.name ?? 'Coach Lilian'}
                    </p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                      {post.author?.role ?? 'Coach Lilian\'s Team'}
                    </p>
                  </div>
                  <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.15)' }} />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{formatDate(post.publishedAt)}</p>
                  <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.15)' }} />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime} min read
                  </p>

                  <div style={{ marginLeft: 'auto' }}>
                    <button 
                      className={`art-share-btn ${copied ? 'copied' : ''}`}
                      onClick={handleShare}
                    >
                      <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        {copied ? (
                          <path d="M20 6L9 17l-5-5" />
                        ) : (
                          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                        )}
                      </svg>
                      {copied ? 'Link Copied!' : 'Share Article'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ background: '#fff', padding: '64px 24px' }}>
              <div style={{ maxWidth: 760, margin: '0 auto' }}>
                {/* excerpt lead */}
                <p style={{ fontSize: 19, color: '#374151', fontWeight: 500, lineHeight: 1.7, borderLeft: `3px solid ${accent}`, paddingLeft: 20, marginBottom: 40, fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
                  {post.excerpt}
                </p>

                {/* Portable text body */}
                <div className="art-body">
                  {post.body
                    ? <PortableText value={post.body} components={ptComponents} />
                    : <p className="art-p" style={{ color: '#9CA3AF', fontStyle: 'italic' }}>No content yet.</p>
                  }
                </div>

                {/* Author card */}
                {post.author && (
                  <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid #E5E7EB' }}>
                    <p className="art-display" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 16 }}>
                      About the Author
                    </p>
                    <div className="art-author-card">
                      {post.author.photo?.asset ? (
                        <img src={urlFor(post.author.photo).width(80).height(80).fit('crop').url()} alt={post.author.name} className="art-author-avatar" />
                      ) : (
                        <div className="art-author-avatar art-author-fallback">{post.author.name?.[0] ?? 'R'}</div>
                      )}
                      <div>
                        <p className="art-display" style={{ fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: '#0A1F44', letterSpacing: '0.01em' }}>
                          {post.author.name}
                        </p>
                        <p style={{ fontSize: 13, color: '#F59E0B', fontWeight: 600 }}>{post.author.role}</p>
                        <p style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>Coach Lilian's Team</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Share Bottom CTA */}
                <div className="art-share-bottom">
                  <p className="art-display" style={{ fontSize: 14, fontWeight: 700, color: '#0A1F44', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Enjoyed this article? Share it with your network
                  </p>
                  <button 
                    className={`art-share-bottom-btn ${copied ? 'copied' : ''}`}
                    onClick={handleShare}
                  >
                    <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {copied ? (
                        <path d="M20 6L9 17l-5-5" />
                      ) : (
                        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                      )}
                    </svg>
                    {copied ? 'Link Copied to Clipboard' : 'Copy Article Link'}
                  </button>
                </div>

                {/* Back CTA */}
                <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
                  <Link to="/insightspage" className="art-cta-btn">
                    <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to All Articles
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}