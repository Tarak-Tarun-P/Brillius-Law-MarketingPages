import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { DocumentAnalyzerPage } from './pages/DocumentAnalyzerPage';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { ClientManagementPage } from './pages/ClientManagementPage';
import { CaseManagementPage } from './pages/CaseManagementPage';
import { HearingsPage } from './pages/HearingsPage';
import { EvidencePage } from './pages/EvidencePage';
import { CompareReviewPage } from './pages/CompareReviewPage';
import { DraftingLabPage } from './pages/DraftingLabPage';
import { CaseDraftsPage } from './pages/CaseDraftsPage';
import { DocumentStoragePage } from './pages/DocumentStoragePage';
import { LawLibraryPage } from './pages/LawLibraryPage';
import { MyJournalPage } from './pages/MyJournalPage';
import { LegalResearchPage } from './pages/LegalResearchPage';
import { FirmManagementPage } from './pages/FirmManagementPage';
import { BillingInvoicingPage } from './pages/BillingInvoicingPage';
import { ECourtsSyncPage } from './pages/ECourtsSyncPage';
import { WhatsAppAlertsPage } from './pages/WhatsAppAlertsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PartnersPage } from './pages/PartnersPage';
import { SupportPage } from './pages/SupportPage';

export type PageRoute =
  | 'home'
  | 'features'
  | 'clients'
  | 'cases'
  | 'hearings'
  | 'evidence'
  | 'compare-review'
  | 'drafting-lab'
  | 'case-drafts'
  | 'document-storage'
  | 'law-library'
  | 'my-journal'
  | 'legal-research'
  | 'firm-management'
  | 'billing'
  | 'ecourts'
  | 'whatsapp-alerts'
  | 'document-analyzer'
  | 'ai-assistant'
  | 'solutions'
  | 'about'
  | 'contact'
  | 'partners'
  | 'support';

// Single source of truth mapping every page to its clean URL path.
const ROUTE_PATHS: Record<PageRoute, string> = {
  home: '/',
  features: '/features',
  clients: '/client-management',
  cases: '/cases',
  hearings: '/hearings',
  evidence: '/evidence',
  'compare-review': '/compare-review',
  'drafting-lab': '/drafting-lab',
  'case-drafts': '/case-drafts',
  'document-storage': '/document-storage',
  'law-library': '/law-library',
  'my-journal': '/my-journal',
  'legal-research': '/legal-research',
  'firm-management': '/firm-management',
  billing: '/billing-invoicing',
  ecourts: '/ecourts-sync',
  'whatsapp-alerts': '/whatsapp-alerts',
  'document-analyzer': '/document-analyzer',
  'ai-assistant': '/ai-assistant',
  solutions: '/solutions',
  about: '/about',
  contact: '/contact',
  partners: '/partners',
  support: '/support',
};

const PATH_TO_ROUTE: Record<string, PageRoute> = Object.entries(ROUTE_PATHS).reduce(
  (acc, [route, path]) => {
    acc[path] = route as PageRoute;
    return acc;
  },
  {} as Record<string, PageRoute>
);

const resolveRoute = (pathname: string): PageRoute => {
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return PATH_TO_ROUTE[normalized] || 'home';
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() =>
    resolveRoute(window.location.pathname)
  );

  // Keep the rendered page in sync with browser Back / Forward navigation.
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(resolveRoute(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept clicks on same-origin internal links anywhere on the site so
  // navigation always happens client-side via the History API, with no "#".
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor || anchor.hasAttribute('download')) return;
      if (anchor.target && anchor.target !== '_self') return;

      const href = anchor.getAttribute('href') || '';
      // Only intercept absolute internal paths (e.g. "/features"). Same-page
      // anchors ("#get-started") and external/mailto/tel links pass through.
      if (!href.startsWith('/') || href.startsWith('//')) return;

      e.preventDefault();

      const url = new URL(href, window.location.origin);
      const samePath = url.pathname === window.location.pathname;

      if (!samePath) {
        window.history.pushState({}, '', url.pathname + url.search + url.hash);
        setCurrentPage(resolveRoute(url.pathname));
      } else if (url.hash !== window.location.hash) {
        window.history.replaceState({}, '', url.pathname + url.search + url.hash);
      }

      if (url.hash) {
        requestAnimationFrame(() => {
          document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (!samePath) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleNavigate = useCallback((page: PageRoute) => {
    const path = ROUTE_PATHS[page] ?? '/';
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'document-storage':
        return <DocumentStoragePage />;
      case 'whatsapp-alerts':
        return <WhatsAppAlertsPage />;
      case 'case-drafts':
        return <CaseDraftsPage />;
      case 'ecourts':
        return <ECourtsSyncPage />;
      case 'billing':
        return <BillingInvoicingPage />;
      case 'firm-management':
        return <FirmManagementPage />;
      case 'legal-research':
        return <LegalResearchPage />;
      case 'my-journal':
        return <MyJournalPage />;
      case 'law-library':
        return <LawLibraryPage />;
      case 'drafting-lab':
        return <DraftingLabPage />;
      case 'compare-review':
        return <CompareReviewPage />;
      case 'evidence':
        return <EvidencePage />;
      case 'hearings':
        return <HearingsPage />;
      case 'cases':
        return <CaseManagementPage />;
      case 'clients':
        return <ClientManagementPage />;
      case 'document-analyzer':
        return <DocumentAnalyzerPage />;
      case 'ai-assistant':
        return <AIAssistantPage />;
      case 'features':
        return <FeaturesPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'partners':
        return <PartnersPage />;
      case 'support':
        return <SupportPage />;
      default:
        return <LandingPage />;
    }
  };

  const activeNavbarPage =
    currentPage === 'document-storage' ||
    currentPage === 'whatsapp-alerts' ||
    currentPage === 'case-drafts' ||
    currentPage === 'ecourts' ||
    currentPage === 'billing' ||
    currentPage === 'firm-management' ||
    currentPage === 'legal-research' ||
    currentPage === 'my-journal' ||
    currentPage === 'law-library' ||
    currentPage === 'drafting-lab' ||
    currentPage === 'compare-review' ||
    currentPage === 'evidence' ||
    currentPage === 'hearings' ||
    currentPage === 'cases' ||
    currentPage === 'clients' ||
    currentPage === 'document-analyzer' ||
    currentPage === 'ai-assistant'
      ? 'features'
      : currentPage;

  return (
    <div className="page-wrapper">
      {/* Application Transparent Background Overlay */}
      <div className="app-bg-overlay" aria-hidden="true" />

      {/* Floating Modern Legal Header */}
      <Navbar activePage={activeNavbarPage} onNavigate={handleNavigate} />

      {/* Render Active Marketing Page */}
      {renderCurrentPage()}

      {/* Structured Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
