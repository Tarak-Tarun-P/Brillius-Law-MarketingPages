import React, { useState } from 'react';
import { FileText, Download, Bookmark, CheckCircle2 } from 'lucide-react';
import './ECourtsOrdersJudgments.css';

interface CourtOrder {
  id: string;
  orderType: string;
  date: string;
  pages: string;
  bench: string;
  summary: string;
}

export const ECourtsOrdersJudgments: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<string>('order-1');

  const orders: CourtOrder[] = [
    {
      id: 'order-1',
      orderType: 'Daily Order (Part-Heard Arguments)',
      date: '09 Oct 2023',
      pages: '3 Pages',
      bench: 'Hon’ble Justice R. S. Chauhan & Hon’ble Justice V. K. Iyer',
      summary: '“Heard Learned Senior Counsel Shri S. K. Mehta for Appellant. Submissions concluded on Question of Law No. 1 and No. 2. For Respondent reply, relist on 24.10.2023 as Part-Heard item #14.”',
    },
    {
      id: 'order-2',
      orderType: 'Interlocutory Application Order (Stay Extension)',
      date: '04 Aug 2023',
      pages: '4 Pages',
      bench: 'Division Bench 02',
      summary: '“I.A. No. 03/2023 for interim directions taken up. Interim stay granted vide order dated 14.02.2023 shall continue in operation until the next listing date.”',
    },
    {
      id: 'order-3',
      orderType: 'Notice & Admission Order',
      date: '14 Feb 2023',
      pages: '5 Pages',
      bench: 'Court Hall 04',
      summary: '“Issue notice to Respondent Nos. 1 to 4. Dasti in addition permitted. Matter to be listed upon completion of service.”',
    },
  ];

  const activeOrder = orders.find((o) => o.id === selectedOrder) || orders[0];

  return (
    <section className="ecourts-orders-section" aria-labelledby="orders-heading">
      <div className="content-container">
        <div className="orders-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">OFFICIAL REPOSITORIES</span>
          </div>
          <h2 id="orders-heading" className="orders-title">
            Keep Official Orders Close at Hand.
          </h2>
          <p className="orders-desc">
            Access available court orders and judgments from the court record and keep important documents organized with your matter.
          </p>
        </div>

        {/* Orders Viewer Interface */}
        <div className="orders-viewer-grid">
          {/* Left Orders List */}
          <div className="orders-list-col">
            <span className="orders-col-title">AVAILABLE ORDERS &amp; JUDGMENTS</span>
            <div className="orders-nav-group" role="tablist">
              {orders.map((ord) => (
                <button
                  key={ord.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedOrder === ord.id}
                  className={`order-tab-item ${selectedOrder === ord.id ? 'active-order' : ''}`}
                  onClick={() => setSelectedOrder(ord.id)}
                >
                  <div className="ord-icon-box">
                    <FileText size={16} />
                  </div>
                  <div className="ord-meta-group">
                    <strong className="ord-type-title">{ord.orderType}</strong>
                    <div className="ord-sub-line">
                      <span>{ord.date}</span>
                      <span>•</span>
                      <span>{ord.pages}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Document PDF Preview */}
          <div className="order-preview-col animate-fade-in" key={activeOrder.id}>
            <div className="pdf-mockup-card">
              <div className="pdf-topbar">
                <div className="pdf-meta-left">
                  <span className="pdf-court-header">HIGH COURT OF KARNATAKA AT BENGALURU</span>
                  <strong className="pdf-order-date">Order Dated: {activeOrder.date}</strong>
                </div>
                <div className="pdf-actions-right">
                  <button type="button" className="btn-pdf-action">
                    <Download size={13} />
                    <span>Download PDF</span>
                  </button>
                  <button type="button" className="btn-pdf-action save-matter-btn">
                    <Bookmark size={13} />
                    <span>Save to Matter</span>
                  </button>
                </div>
              </div>

              <div className="pdf-content-paper">
                <div className="paper-header">
                  <span className="paper-court-title">IN THE HIGH COURT OF KARNATAKA AT BENGALURU</span>
                  <span className="paper-case-no">COMMERCIAL APPEAL NO. 142 OF 2023</span>
                  <span className="paper-bench">{activeOrder.bench}</span>
                </div>

                <div className="paper-body-text">
                  <p>{activeOrder.summary}</p>
                </div>

                <div className="paper-footer-sig">
                  <span>(R. S. CHAUHAN, J.)</span>
                  <span>(V. K. IYER, J.)</span>
                </div>
              </div>

              <div className="pdf-card-footer">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Orders are accessible directly alongside your pleadings, journal notes, and hearing briefs.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
