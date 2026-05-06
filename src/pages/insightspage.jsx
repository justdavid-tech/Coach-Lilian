// src/pages/InsightsPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full /insights page — lists ALL articles with category filter tabs.
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, urlFor } from '../lib/sanity';

import { Helmet } from "react-helmet-async";

const CATEGORY_LABELS = {
  all:                    'All Articles',
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

function ArticleCard({ post, index }) {
  const accent   = CATEGORY_COLORS[post.category] || '#F59E0B';
  const label    = CATEGORY_LABELS[post.category]  || post.category;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(600).height(340).fit('crop').auto('format').url()
    : 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop';

  return (   
    <Link 
      to={`/insights/${post.slug.current}`} 
      className="ip-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
      data-aos-offset="50"
    >
      <div className="ip-img-wrap">
        <img 
          src={imageUrl} 
          alt={post.coverImage?.alt || post.title} 
          className="ip-img"
          data-aos="zoom-in"
          data-aos-delay={index * 100 + 50}
          data-aos-duration="600"
        />
        <div className="ip-img-overlay" />
        <span 
          className="ip-cat-badge" 
          style={{ borderColor: accent, color: accent }}
          data-aos="fade-left"
          data-aos-delay={index * 100 + 100}
          data-aos-duration="500"
        >
          {label}
        </span>
      </div>
      <div className="ip-card-body">
        <div className="ip-meta-row">
          <span className="ip-meta-item">
            <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {formatDate(post.publishedAt)}
          </span>
          <span className="ip-meta-dot" />
          <span className="ip-meta-item">
            <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
        </div>

        <h3 
          className="ip-title"
          data-aos="fade-right"
          data-aos-delay={index * 100 + 150}
          data-aos-duration="600"
        >
          {post.title}
        </h3>
        <p 
          className="ip-excerpt"
          data-aos="fade-up"
          data-aos-delay={index * 100 + 200}
          data-aos-duration="600"
        >
          {post.excerpt}
        </p>
        <div className="ip-rule" />
        <div className="ip-footer">
          <div className="ip-author">
            {post.author?.photo?.asset ? (
              <img 
                src={urlFor(post.author.photo).width(36).height(36).fit('crop').url()} 
                alt={post.author.name} 
                className="ip-avatar"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 250}
                data-aos-duration="500"
              />
            ) : (
              <div 
                className="ip-avatar ip-avatar-fallback"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 250}
                data-aos-duration="500"
              >
                {post.author?.name?.[0] ?? 'R'}
              </div>
            )}
            <div>
              <p className="ip-author-name">{post.author?.name ?? 'Coach Lilian'}</p>
              <p className="ip-author-role">{post.author?.role ?? 'Coach Lilian\'s Team'}</p>
            </div>
          </div>
          <span 
            className="ip-read-more" 
            style={{ color: accent }}
            data-aos="fade-left"
            data-aos-delay={index * 100 + 300}
            data-aos-duration="500"
          >
            Read Article
            <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div className="ip-card" style={{ pointerEvents: 'none' }}>
      <div style={{ height: 200, background: 'linear-gradient(90deg,#E5E7EB 25%,#F3F4F6 50%,#E5E7EB 75%)', backgroundSize: '200% 100%', animation: 'ip-shimmer 1.4s infinite' }} />
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ height: 11, width: '40%', background: '#E5E7EB', borderRadius: 4 }} />
        <div style={{ height: 18, width: '80%', background: '#E5E7EB', borderRadius: 4 }} />
        <div style={{ height: 13, width: '100%', background: '#F3F4F6', borderRadius: 4 }} />
        <div style={{ height: 13, width: '65%',  background: '#F3F4F6', borderRadius: 4 }} />
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [allPosts,    setAllPosts]    = useState([]);
  const [activeTab,   setActiveTab]   = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);

  useEffect(() => {
    getAllPosts()
      .then(setAllPosts)
      .catch(() => setError('Could not load articles. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  // Derive unique categories from fetched posts
  const categories = ['all', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))];

  // Filter by active tab + search query
  const filtered = allPosts.filter(p => {
    const matchCat    = activeTab === 'all' || p.category === activeTab;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Career Insights | Coach Lilian</title>
        <meta
          name="description"
          content="Discover expert insights, proven strategies, and practical guidance to help you land your first remote job. Learn from certified coaches, access valuable resources, and start your career journey with Coach Lilian."
        />
        <meta
          name="keywords"
          content="remote job insights, how to get a remote job, entry level remote jobs, career coaching, remote work tips, Coach Lilian, job placement support"
        />
        <meta name="author" content="Coach Lilian" />
        <meta property="og:title" content="Remote Job Insights & Career Tips | Coach Lilian" />
        <meta
          property="og:description"
          content="Ready to land your first remote job? Explore expert coaching insights, beginner-friendly strategies, and resources designed to help you succeed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coachlilian.com/insights" />
        <meta property="og:image" content="https://coachlilian.com/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Insights | Coach Lilian" />
        <meta name="twitter:description" content="Learn how to land your first remote job with expert coaching, actionable tips, and career insights." />
        <link rel="canonical" href="https://coachlilian.com/insights" />
      </Helmet>

      <Navbar />
      
      <style>{`
        .ip-root    { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        .ip-display { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }

        .ip-hero {
          background: #13262F;
          background-image: radial-gradient(ellipse 70% 60% at 50% 100%, #13262F 0%, transparent 70%);
          position: relative; overflow: hidden;
        }
        .ip-hero-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.07);
          pointer-events: none;
        }

        .ip-tab {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 8px 18px; border: 1px solid #E5E7EB; background: white;
          color: #6B7280; cursor: pointer; white-space: nowrap;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ip-tab:hover { background: #F3F4F6; color: #0A1F44; }
        .ip-tab.active { background: #0A1F44; color: white; border-color: #0A1F44; }

        .ip-search {
          display: flex; align-items: center; gap: 10px;
          background: white; border: 1px solid #E5E7EB;
          padding: 10px 16px; flex: 1; max-width: 320px;
          transition: border-color 0.2s;
        }
        .ip-search:focus-within { border-color: #0A1F44; }
        .ip-search input {
          flex: 1; border: none; outline: none; background: transparent;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px; color: #374151;
        }
        .ip-search input::placeholder { color: #9CA3AF; }

        .ip-card {
          display: flex; flex-direction: column;
          background: white; border: 1px solid #E5E7EB;
          overflow: hidden; text-decoration: none; color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ip-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(10,31,68,0.1); }

        .ip-img-wrap { overflow: hidden; position: relative; height: 200px; flex-shrink: 0; }
        .ip-img      { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.55s ease; }
        .ip-card:hover .ip-img { transform: scale(1.05); }
        .ip-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7,21,46,0.45) 100%);
        }
        .ip-cat-badge {
          position: absolute; bottom: 10px; left: 10px;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
          background: rgba(7,21,46,0.72); backdrop-filter: blur(4px);
          border-left: 2px solid; padding: 3px 9px;
        }

        .ip-card-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .ip-meta-row  { display: flex; align-items: center; gap: 7px; }
        .ip-meta-item { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #9CA3AF; font-weight: 500; }
        .ip-meta-dot  { width: 3px; height: 3px; border-radius: 50%; background: #D1D5DB; }
        .ip-title {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-weight: 700;
          text-transform: uppercase; color: #0A1F44; line-height: 1.25;
          font-size: 16px; letter-spacing: 0.01em; transition: color 0.2s;
        }
        .ip-card:hover .ip-title { color: #EE7B30; }
        .ip-excerpt { font-size: 13px; color: #6B7280; line-height: 1.65; flex: 1; }
        .ip-rule    { height: 1px; background: linear-gradient(90deg, #E5E7EB, transparent); }

        .ip-footer      { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .ip-author      { display: flex; align-items: center; gap: 8px; }
        .ip-avatar      { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; border: 2px solid #E5E7EB; flex-shrink: 0; }
        .ip-avatar-fallback {
          background: #0A1F44; color: white; display: flex; align-items: center; justify-content: center;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-weight: 700; font-size: 13px;
        }
        .ip-author-name { font-size: 11px; font-weight: 600; color: #374151; }
        .ip-author-role { font-size: 10px; color: #9CA3AF; }
        .ip-read-more {
          display: inline-flex; align-items: center; gap: 4px;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; transition: gap 0.2s;
        }
        .ip-card:hover .ip-read-more { gap: 7px; }

        .ip-label::before {
          content: ''; display: inline-block;
          width: 36px; height: 3px; background: #EE7B30; border-radius: 2px;
          vertical-align: middle; margin-right: 12px;
        }

        @keyframes ip-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .ip-results-count {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #9CA3AF;
        }
      `}</style>

      <div className="ip-root">
        {/* ── HERO ── */}
        <div className="ip-hero pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#13262F] via-[#0B1922] to-[#13262F]">
          <div className="ip-hero-ring" style={{ width: 500, height: 500, top: -200, right: -200 }} />
          <div className="ip-hero-ring" style={{ width: 280, height: 280, bottom: -60, left: -80, borderColor: 'rgba(59,130,246,0.05)' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <p 
              data-aos="zoom-in"
              data-aos-duration="600"
              className="ip-label ip-display uppercase tracking-[0.2em] text-[#EE7B30] font-600 mb-3" 
              style={{ fontSize: '11px' }}
            >
              Career Insights
            </p>
            <h1 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              className="ip-display font-800 uppercase text-white leading-none mb-4" 
              style={{ fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '-0.01em' }}
            >
              Remote Job
              <br /><span style={{ color: '#EE7B30' }}>Success Hub</span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="800"
              className="text-blue-200/65 leading-relaxed max-w-xl" 
              style={{ fontSize: '16px' }}
            >
              Actionable insights, expert coaching tips, and proven strategies to help you land your first remote job no experience required.
            </p>
          </div>
        </div>

        {/* ── FILTER BAR ── */}
        <div 
          data-aos="fade-down"
          data-aos-duration="800"
          style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 70, zIndex: 40 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
            {/* Tabs */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {categories.map((cat, index) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  data-aos-duration="500"
                  className={`ip-tab ${activeTab === cat ? 'active' : ''}`}
                >
                  {CATEGORY_LABELS[cat] || cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="600"
              className="ip-search"
            >
              <svg style={{ width: 16, height: 16, color: '#9CA3AF', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 1 }}>
                  <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── ARTICLES GRID ── */}
        <div style={{ background: '#F3F4F6', backgroundImage: 'linear-gradient(rgba(10,31,68,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(10,31,68,0.03) 1px,transparent 1px)', backgroundSize: '48px 48px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* results count */}
            {!loading && !error && (
              <p 
                data-aos="fade-right"
                data-aos-duration="600"
                className="ip-results-count mb-8"
              >
                {filtered.length} {filtered.length === 1 ? 'Article' : 'Articles'}
                {activeTab !== 'all' && ` in ${CATEGORY_LABELS[activeTab]}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            )}

            {/* loading skeletons */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            )}

            {/* error */}
            {error && (
              <div 
                data-aos="fade-up"
                data-aos-duration="600"
                style={{ textAlign: 'center', padding: '80px 20px', color: '#6B7280' }}
              >
                <p className="ip-display font-700 uppercase text-[#0A1F44] mb-2" style={{ fontSize: '20px' }}>{error}</p>
              </div>
            )}

            {/* empty */}
            {!loading && !error && filtered.length === 0 && (
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                style={{ textAlign: 'center', padding: '80px 20px', border: '1px dashed #E5E7EB', background: '#fff' }}
              >
                <p className="ip-display font-700 uppercase text-[#0A1F44] mb-2" style={{ fontSize: '22px' }}>
                  {allPosts.length === 0 ? 'Articles Coming Soon' : 'No articles found'}
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
                  {allPosts.length === 0
                    ? 'Our team is working on the first articles. Check back soon.'
                    : 'Try a different category or search term.'}
                </p>
              </div>
            )}

            {/* articles */}
            {!loading && !error && filtered.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((post, index) => (
                  <ArticleCard key={post._id} post={post} index={index} />
                ))}
              </div>
            )}

          </div>
        </div>

        {/* ── BACK TO HOME ── */}
        <div style={{ background: '#13262F', padding: '40px 24px', textAlign: 'center' }}>
          <Link
            to="/"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            className="ip-display"
            style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
          >
            <svg style={{ width: 13, height: 13 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}