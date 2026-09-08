'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { SolutionsFinalCTA } from '../components/solutions/SolutionsFinalCTA';
import '../components/blog/Blog.css';

interface ArticleDetailViewProps {
  post: BlogPost;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({ post }) => {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <main className="article-page-main">
      {/* ============================================================== */}
      {/* 01. ARTICLE HEADER / HERO                                      */}
      {/* ============================================================== */}
      <section className="article-hero-section" aria-label="Article Header">
        <div className="content-container">
          <div className="article-back-nav">
            <Link href="/blog" className="article-back-link">
              <ArrowLeft size={15} />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="article-header-box">
            <div className="article-badge-row">
              <span className="article-category-badge">{post.category}</span>
              <span className="article-read-time">
                <Clock size={13} style={{ display: 'inline', marginRight: 4 }} />
                {post.readTime}
              </span>
            </div>

            <h1 className="article-main-title">{post.title}</h1>

            <p className="article-intro-text">{post.content.introduction}</p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 02. ARTICLE BODY CONTENT & SIDEBAR                             */}
      {/* ============================================================== */}
      <section className="article-body-section" aria-label="Article Content">
        <div className="content-container">
          <div className="article-layout-grid">
            {/* Main Content Column */}
            <article className="article-content-col">
              {post.content.sections.map((section, idx) => (
                <div key={idx} className="article-section-block">
                  <h2 className="article-section-heading">{section.heading}</h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="article-paragraph">
                      {p}
                    </p>
                  ))}

                  {section.keyTakeaway && (
                    <div className="article-takeaway-box">
                      <strong>Key Insight</strong>
                      <span>{section.keyTakeaway}</span>
                    </div>
                  )}
                </div>
              ))}

              <div className="article-conclusion-block">
                <h3>Conclusion</h3>
                <p className="article-paragraph">{post.content.conclusion}</p>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="article-sidebar-col" aria-label="Article Sidebar">
              {/* Product Promo Card */}
              <div className="sidebar-promo-card">
                <span className="sidebar-promo-tag">BrilliusLaw Platform</span>
                <h3 className="sidebar-promo-title">Modern Legal Intelligence. Built for Indian Law.</h3>
                <p className="sidebar-promo-desc">
                  Explore how BrilliusLaw brings research, drafting, case tracking, and firm operations into one workspace.
                </p>
                <Link href="/platform" className="sidebar-promo-btn">
                  <span>Explore Platform</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Other Articles List */}
              <div className="sidebar-articles-card">
                <span className="sidebar-articles-title">More Legal Insights</span>
                <div className="sidebar-articles-list">
                  {otherPosts.map((op) => (
                    <Link key={op.slug} href={`/blog/${op.slug}`} className="sidebar-article-link">
                      <span>{op.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
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
