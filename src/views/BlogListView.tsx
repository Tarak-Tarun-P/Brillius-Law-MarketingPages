'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';
import '../components/blog/Blog.css';

export const BlogListView: React.FC = () => {
  return (
    <main className="blog-page-main">
      {/* ============================================================== */}
      {/* 01. BLOG HERO                                                 */}
      {/* ============================================================== */}
      <section className="blog-hero-section" aria-label="BrilliusLaw Insights & Blog">
        <div className="blog-hero-glow glow-gold" aria-hidden="true" />
        <div className="blog-hero-glow glow-navy" aria-hidden="true" />

        <svg
          className="blog-hero-bg-svg"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#091526" strokeWidth="1" opacity="0.04" fill="none">
            <circle cx="720" cy="300" r="280" />
            <circle cx="720" cy="300" r="440" strokeDasharray="4 6" />
            <path d="M 180 520 Q 520 220 720 320 T 1260 180" strokeDasharray="6 6" />
          </g>
        </svg>

        <div className="content-container">
          <div className="blog-hero-content animate-fade-in-up">
            <div className="blog-hero-eyebrow-wrapper">
              <span className="blog-hero-eyebrow">LEGAL PERSPECTIVES &amp; PERSIGHTS</span>
              <span className="blog-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="blog-hero-headline">
              Insights for Modern Legal Work
            </h1>

            <p className="blog-hero-description">
              Practical perspectives on legal research, technology, drafting, and the evolving practice of law.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 02. 6-ARTICLE GRID SECTION                                    */}
      {/* ============================================================== */}
      <section className="blog-grid-section" aria-label="Article Directory">
        <div className="content-container">
          <div className="blog-cards-grid">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="blog-card-top">
                  <span className="blog-card-num">TOPIC {post.number}</span>
                  <span className="blog-card-category">{post.category}</span>
                </div>

                <h2 className="blog-card-title">{post.title}</h2>

                <p className="blog-card-desc">{post.shortDescription}</p>

                <div className="blog-card-footer">
                  <span className="blog-card-meta">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </span>

                  <span className="blog-card-cta">
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 03. FINAL CALL TO ACTION                                       */}
      {/* ============================================================== */}
      <SolutionsFinalCTA />
    </main>
  );
};
