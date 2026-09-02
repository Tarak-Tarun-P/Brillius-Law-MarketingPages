import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import './ResearchAuthorities.css';

export const ResearchAuthorities: React.FC = () => {
  const authorities = [
    {
      court: 'Supreme Court of India',
      citation: '(2018) 7 SCC 639',
      title: 'Ameer Minhaj v. Dierdre Elizabeth (Wright) Steen & Ors.',
      bench: 'Kurian Joseph, Sanjay Kishan Kaul, JJ.',
      summary: 'Held: An unregistered agreement to sell can be received in evidence to prove the agreement in a suit for specific performance under the Proviso to Section 49 of the Registration Act.',
      statute: 'Registration Act § 49 Proviso',
    },
    {
      court: 'Supreme Court of India',
      citation: '(2008) 8 SCC 564',
      title: 'K.B. Saha and Sons Pvt. Ltd. v. Development Consultant Ltd.',
      bench: 'Tarun Chatterjee, Dalveer Bhandari, JJ.',
      summary: 'Lays down five core principles on when an unregistered document required to be registered can be admitted in evidence for collateral purposes.',
      statute: 'Registration Act § 17, § 49',
    },
    {
      court: 'Supreme Court of India',
      citation: 'AIR 2003 SC 2508 • (2003) 7 SCC 350',
      title: 'Ramesh Chand Ardawatiya v. Anil Panjwani',
      bench: 'R.C. Lahoti, Ashok Bhan, JJ.',
      summary: 'Examines the doctrine of part performance under Section 53A of the Transfer of Property Act and the protection of lawful possession under contract.',
      statute: 'Transfer of Property Act § 53A',
    },
  ];

  return (
    <section className="research-auth-section" aria-labelledby="auth-heading">
      <div className="content-container">
        <div className="auth-header">
          <span className="auth-eyebrow">PRECEDENT DISCOVERY</span>
          <h2 id="auth-heading" className="auth-title">
            Find the Authorities You Need.
          </h2>
          <p className="auth-desc">
            Explore authoritative Supreme Court and High Court decisions directly connected to the legal proposition you are researching.
          </p>
        </div>

        <div className="auth-cards-grid">
          {authorities.map((item, idx) => (
            <div key={idx} className="auth-result-card">
              <div className="auth-card-topbar">
                <span className="auth-court-tag">{item.court}</span>
                <span className="auth-citation-pill">{item.citation}</span>
              </div>

              <h3 className="auth-case-name">{item.title}</h3>
              <span className="auth-bench-text">Bench: {item.bench}</span>

              <p className="auth-summary-p">{item.summary}</p>

              <div className="auth-card-footer">
                <span className="auth-statute-badge">
                  <BookOpen size={11} />
                  <span>{item.statute}</span>
                </span>
                <span className="btn-open-decision">
                  <span>Read Full Decision</span>
                  <ExternalLink size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
