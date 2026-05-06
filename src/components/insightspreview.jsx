// ─────────────────────────────────────────────────────────────────────────────
// Homepage section — shows the 3 latest articles fetched live from Sanity.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLatestPosts, urlFor } from '../lib/sanity';

// ── Category label map 
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
  'remote-work':          '#3B82F6',
  'career-growth':        '#3B82F6',
  'financial-freedom':    '#3B82F6',
  'freelancing':          '#3B82F6',
  'interview-tips':       '#3B82F6',
  'mindset-motivation':   '#3B82F6',
  'success-stories':      '#3B82F6',
  'announcements':        '#3B82F6',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  });
}

// ── Skeleton loader card ─────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="ins-card" style={{ pointerEvents: 'none' }}>
      <div style={{ height: 220, background: 'linear-gradient(90deg,#E5E7EB 25%,#F3F4F6 50%,#E5E7EB 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite' }} />
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ height: 12, width: '40%', background: '#E5E7EB', borderRadius: 4 }} />
        <div style={{ height: 20, width: '85%', background: '#E5E7EB', borderRadius: 4 }} />
        <div style={{ height: 14, width: '100%', background: '#F3F4F6', borderRadius: 4 }} />
        <div style={{ height: 14, width: '70%',  background: '#F3F4F6', borderRadius: 4 }} />
      </div>
    </div>
  );
}

// ── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({ post, featured = false, index = 0 }) {
  const accent = CATEGORY_COLORS[post.category] || '#F59E0B';
  const label  = CATEGORY_LABELS[post.category]  || post.category;

  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(featured ? 900 : 600).height(featured ? 400 : 260).fit('crop').auto('format').url()
    : `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop`;

  return (
    <Link 
      to={`/insights/${post.slug.current}`} 
      className={`ins-card ${featured ? 'ins-card-featured' : ''}`}
      data-aos={featured ? "fade-right" : "fade-up"}
      data-aos-delay={index * 100}
      data-aos-duration="800"
      data-aos-offset="100"
    >
      {/* image */}
      <div className="ins-img-wrap" style={{ height: featured ? 280 : 220 }}>
        <img 
          src={imageUrl} 
          alt={post.coverImage?.alt || post.title} 
          className="ins-img"
          data-aos="zoom-in"
          data-aos-delay={index * 100 + 50}
          data-aos-duration="600"
        />
        <div className="ins-img-overlay" />
        {/* category badge */}
        <span 
          className="ins-cat-badge" 
          style={{ borderColor: accent, color: accent }}
          data-aos="fade-left"
          data-aos-delay={index * 100 + 100}
          data-aos-duration="500"
        >
          {label}
        </span>
        {featured && (
          <span 
            className="ins-featured-badge"
            data-aos="zoom-in"
            data-aos-delay={index * 100 + 150}
            data-aos-duration="500"
          >
            Featured
          </span>
        )}
      </div>

      {/* content */}
      <div className="ins-card-body">
        {/* meta row */}
        <div className="ins-meta-row">
          <span className="ins-meta-item">
            <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {formatDate(post.publishedAt)}
          </span>
          <span className="ins-meta-dot" />
          <span className="ins-meta-item">
            <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
        </div>

        {/* title */}
        <h3 
          className="ins-title" 
          style={{ fontSize: featured ? '20px' : '16px' }}
          data-aos="fade-right"
          data-aos-delay={index * 100 + 200}
          data-aos-duration="600"
        >
          {post.title}
        </h3>

        {/* excerpt */}
        <p 
          className="ins-excerpt"
          data-aos="fade-up"
          data-aos-delay={index * 100 + 250}
          data-aos-duration="600"
        >
          {post.excerpt}
        </p>

        <div className="ins-rule" />

        {/* author + read more */}
        <div className="ins-footer">
          <div className="ins-author">
            {post.author?.photo?.asset ? (
              <img
                src={urlFor(post.author.photo).width(40).height(40).fit('crop').url()}
                alt={post.author.name}
                className="ins-author-avatar"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 300}
                data-aos-duration="500"
              />
            ) : (
              <div 
                className="ins-author-avatar ins-author-fallback"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 300}
                data-aos-duration="500"
              >
                {post.author?.name?.[0] ?? 'R'}
              </div>
            )}
            <div>
              <p className="ins-author-name">{post.author?.name ?? 'Coach Lilian'}</p>
              <p className="ins-author-role">{post.author?.role ?? 'Founder'}</p>
            </div>
          </div>
          <span 
            className="ins-read-more" 
            style={{ color: accent }}
            data-aos="fade-left"
            data-aos-delay={index * 100 + 350}
            data-aos-duration="500"
          >
            Read
            <svg style={{ width: 13, height: 13 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function InsightsPreview() {
  const [posts,   setPosts]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    getLatestPosts()
      .then(setPosts)
      .catch(() => setError('Could not load articles. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .ins-root    { font-family: 'Barlow', sans-serif; }
        .ins-display { font-family: 'Barlow Condensed', sans-serif; }

        .ins-section {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── Card ── */
        .ins-card {
          display: flex; flex-direction: column;
          background: #fff;
          border: 1px solid #E5E7EB;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ins-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(10,31,68,0.11);
        }

        /* image */
        .ins-img-wrap { overflow: hidden; position: relative; flex-shrink: 0; }
        .ins-img      { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.55s ease; }
        .ins-card:hover .ins-img { transform: scale(1.05); }
        .ins-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7,21,46,0.5) 100%);
          transition: opacity 0.3s;
        }
        .ins-card:hover .ins-img-overlay { opacity: 0.8; }

        /* badges */
        .ins-cat-badge {
          position: absolute; bottom: 12px; left: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
          background: rgba(7,21,46,0.7); backdrop-filter: blur(4px);
          border-left: 2px solid; padding: 3px 10px;
        }
        .ins-featured-badge {
          position: absolute; top: 12px; right: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
          background: #F59E0B; color: #07152E; padding: 3px 10px;
        }

        /* body */
        .ins-card-body  { padding: 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .ins-meta-row   { display: flex; align-items: center; gap: 8px; }
        .ins-meta-item  { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #9CA3AF; font-weight: 500; }
        .ins-meta-dot   { width: 3px; height: 3px; border-radius: 50%; background: #D1D5DB; }
        .ins-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; text-transform: uppercase;
          color: #0A1F44; line-height: 1.25; letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .ins-card:hover .ins-title { color: #F59E0B; }
        .ins-excerpt  { font-size: 13.5px; color: #6B7280; line-height: 1.65; flex: 1; }
        .ins-rule     { height: 1px; background: linear-gradient(90deg, #E5E7EB, transparent); }

        /* footer */
        .ins-footer      { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .ins-author      { display: flex; align-items: center; gap: 8px; }
        .ins-author-avatar {
          width: 32px; height: 32px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
          border: 2px solid #E5E7EB;
        }
        .ins-author-fallback {
          background: #0A1F44; color: white; display: flex; align-items: center; justify-content: center;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px;
        }
        .ins-author-name { font-size: 12px; font-weight: 600; color: #374151; }
        .ins-author-role { font-size: 10px; color: #9CA3AF; }
        .ins-read-more {
          display: inline-flex; align-items: center; gap: 4px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          transition: gap 0.2s;
        }
        .ins-card:hover .ins-read-more { gap: 7px; }

        /* section label */
        .ins-label::before {
          content: ''; display: inline-block;
          width: 36px; height: 3px; background: #F59E0B; border-radius: 2px;
          vertical-align: middle; margin-right: 12px;
        }

        /* CTA button */
        .ins-cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #07152E; background: #F59E0B; padding: 13px 32px;
          text-decoration: none; position: relative; overflow: hidden;
          transition: background 0.2s;
        }
        .ins-cta:hover { background: #FBBF24; }
        .ins-cta::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .ins-cta:hover::before { transform: translateX(130%) skewX(-15deg); }

        /* shimmer skeleton */
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <section id="insights" className="ins-root ins-section py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* ── HEADER with AOS ── */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
          >
            <div>
              <p 
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="600"
                className="ins-label ins-display uppercase tracking-[0.2em] text-amber-500 font-600 mb-3" 
                style={{ fontSize: '11px' }}
              >
                Career Insights
              </p>
              <h2 
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="800"
                className="ins-display font-800 uppercase text-[#0A1F44] leading-none" 
                style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: '-0.01em' }}
              >
                Remote Job
                <br /><span style={{ color: '#4B5563' }}>Insights</span>
              </h2>
            </div>
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
              className="flex flex-col gap-4 max-w-sm"
            >
              <p 
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="600"
                className="text-[#6B7280] leading-relaxed" 
                style={{ fontSize: '15px' }}
              >
                Practical tips, job search strategies, and remote career insights from the coach lilian's team. Published regularly to help you land your first remote job.
              </p>
              <Link 
                to="/insights" 
                data-aos="flip-up"
                data-aos-delay="300"
                data-aos-duration="600"
                className="ins-cta self-start"
              >
                View All Articles
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── ERROR STATE ── */}
          {error && (
            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}
            >
              <p className="ins-display font-700 uppercase text-[#0A1F44]" style={{ fontSize: '20px' }}>{error}</p>
            </div>
          )}

          {/* ── LOADING: skeleton cards ── */}
          {loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <SkeletonCard /><SkeletonCard /><SkeletonCard />
            </div>
          )}

          {/* ── EMPTY STATE ── */}
          {!loading && !error && posts.length === 0 && (
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              style={{ textAlign: 'center', padding: '80px 20px', border: '1px dashed #E5E7EB', background: '#fff' }}
            >
              <p className="ins-display font-700 uppercase text-[#0A1F44] mb-2" style={{ fontSize: '22px' }}>Articles Coming Soon</p>
              <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Check back soon — our team is working on the first articles.</p>
            </div>
          )}

          {/* ── ARTICLES GRID with AOS ── */}
          {!loading && !error && posts.length > 0 && (
            <>
              {/* If there's a featured post, show it large + 2 side cards */}
              {posts[0] ? (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
                  <div 
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    className="lg:col-span-3"
                  >
                    <ArticleCard post={posts[0]} featured index={0} />
                  </div>
                  <div className="lg:col-span-2 flex flex-col gap-5">
                    {posts[1] && <ArticleCard post={posts[1]} index={1} />}
                    {posts[2] && <ArticleCard post={posts[2]} index={2} />}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {posts.map((p, idx) => (
                    <div 
                      key={p._id}
                      data-aos="fade-up"
                      data-aos-delay={idx * 100 + 400}
                      data-aos-duration="800"
                    >
                      <ArticleCard post={p} index={idx} />
                    </div>
                  ))}
                </div>
              )}

              {/* bottom CTA */}
              <div className="mt-10 flex justify-center">
                <Link 
                  to="/insights" 
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="800"
                  className="ins-cta"
                >
                  Browse All Articles
                  <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}