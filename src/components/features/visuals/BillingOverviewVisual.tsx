import React from 'react';
import './visuals.css';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

export const BillingOverviewVisual: React.FC = () => {
  return (
    <div className="visual-card billing-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Firm Financial Overview // Q3 Performance</span>
        <span className="visual-badge-shield">
          <TrendingUp size={12} />
          <span>Real-time Financials</span>
        </span>
      </div>

      <div className="billing-body">
        {/* KPI Metrics */}
        <div className="billing-kpis-grid">
          <div className="kpi-card">
            <span className="kpi-label">Total Billed (This Quarter)</span>
            <div className="kpi-value-row">
              <span className="kpi-currency">₹</span>
              <span className="kpi-value">48,50,000</span>
            </div>
            <span className="kpi-trend positive">+18% vs last quarter</span>
          </div>

          <div className="kpi-card">
            <span className="kpi-label">Collections Received</span>
            <div className="kpi-value-row">
              <span className="kpi-currency">₹</span>
              <span className="kpi-value text-gold-dark">42,10,000</span>
            </div>
            <span className="kpi-status-tag">87% Realization</span>
          </div>

          <div className="kpi-card">
            <span className="kpi-label">Unbilled Work-in-Progress</span>
            <div className="kpi-value-row">
              <span className="kpi-currency">₹</span>
              <span className="kpi-value">6,40,000</span>
            </div>
            <span className="kpi-sub">14 Active Retainers</span>
          </div>
        </div>

        {/* Matter Billing Breakdown */}
        <div className="billing-matters-breakdown">
          <div className="breakdown-header">
            <span>Recent Matter Invoices</span>
            <span className="breakdown-total">3 Issued This Week</span>
          </div>

          <div className="breakdown-row">
            <div className="breakdown-info">
              <span className="breakdown-name">Apex Global Technologies — NCLT Defense</span>
              <span className="breakdown-meta">Invoice #INV-2026-104 • 36 Billable Hours</span>
            </div>
            <span className="breakdown-amount">₹4,20,000</span>
            <span className="breakdown-status paid"><CheckCircle2 size={12} /> Paid</span>
          </div>

          <div className="breakdown-row">
            <div className="breakdown-info">
              <span className="breakdown-name">Vanguard Logistics — Arbitration Proceeding</span>
              <span className="breakdown-meta">Invoice #INV-2026-105 • Retainer Tranche 2</span>
            </div>
            <span className="breakdown-amount">₹2,80,000</span>
            <span className="breakdown-status pending"><Clock size={12} /> Sent</span>
          </div>
        </div>
      </div>
    </div>
  );
};
