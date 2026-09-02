import React from 'react';
import { Plus } from 'lucide-react';
import './CompareTableChanges.css';

export const CompareTableChanges: React.FC = () => {
  return (
    <section className="compare-tables-section" aria-labelledby="tables-heading">
      <div className="content-container">
        <div className="tables-header">
          <span className="tables-eyebrow">TABULAR COMPARISON</span>
          <h2 id="tables-heading" className="tables-title">
            See Changes Inside Tables.
          </h2>
          <p className="tables-desc">
            Review when rows or financial line items have been added, updated, or removed from schedule tables.
          </p>
        </div>

        {/* Realistic Table Diff Grid */}
        <div className="table-diff-dual-grid">
          {/* Previous Table */}
          <div className="table-diff-box">
            <div className="table-diff-topbar">
              <span className="t-version-tag">PREVIOUS VERSION</span>
              <span className="t-count-tag">2 Fee Items</span>
            </div>

            <div className="table-container-wrap">
              <table className="diff-schedule-table">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th>Fee Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Legal Services & Drafting</td>
                    <td>₹50,000</td>
                  </tr>
                  <tr>
                    <td>Filing & Court Registry Fees</td>
                    <td>₹10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="t-footer-note">Baseline Fee Schedule (v1.0)</span>
          </div>

          {/* Current Table with Added Row Highlight */}
          <div className="table-diff-box featured-table-box">
            <div className="table-diff-topbar">
              <span className="t-version-tag text-gold">CURRENT VERSION</span>
              <span className="t-added-badge">+ 1 Row Added</span>
            </div>

            <div className="table-container-wrap">
              <table className="diff-schedule-table">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th>Fee Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Legal Services & Drafting</td>
                    <td>₹50,000</td>
                  </tr>
                  <tr>
                    <td>Filing & Court Registry Fees</td>
                    <td>₹10,000</td>
                  </tr>
                  <tr className="table-row-added">
                    <td>
                      <span className="row-ins-badge"><Plus size={10} strokeWidth={2.5} /> Added</span>
                      <strong>Senior Counsel Consultation</strong>
                    </td>
                    <td>
                      <strong className="text-ins-amount">₹15,000</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="t-footer-note text-gold">Revised Fee Schedule with Newly Added Milestone (v2.0)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
