import React, { useState, useEffect } from 'react';
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

type PageRoute =
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
  | 'contact';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Detect route from URL hash or pathname on initial load and popstate
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (
        hash.startsWith('#/features/document-storage') ||
        path === '/features/document-storage' ||
        hash === '#/features/document-storage' ||
        hash.startsWith('#/features/documents') ||
        path === '/features/documents' ||
        hash === '#/features/documents'
      ) {
        setCurrentPage('document-storage');
      } else if (
        hash.startsWith('#/features/whatsapp-alerts') ||
        path === '/features/whatsapp-alerts' ||
        hash === '#/features/whatsapp-alerts' ||
        hash.startsWith('#/features/whatsapp') ||
        path === '/features/whatsapp'
      ) {
        setCurrentPage('whatsapp-alerts');
      } else if (
        hash.startsWith('#/features/case-drafts') ||
        path === '/features/case-drafts' ||
        hash === '#/features/case-drafts' ||
        hash.startsWith('#/features/drafts') ||
        path === '/features/drafts'
      ) {
        setCurrentPage('case-drafts');
      } else if (
        hash.startsWith('#/features/ecourts') ||
        path === '/features/ecourts' ||
        hash === '#/features/ecourts-sync' ||
        path === '/features/ecourts-sync'
      ) {
        setCurrentPage('ecourts');
      } else if (
        hash.startsWith('#/features/billing') ||
        path === '/features/billing' ||
        hash === '#/features/billing'
      ) {
        setCurrentPage('billing');
      } else if (
        hash.startsWith('#/features/firm-management') ||
        path === '/features/firm-management' ||
        hash === '#/features/firm-management'
      ) {
        setCurrentPage('firm-management');
      } else if (
        hash.startsWith('#/features/legal-research') ||
        path === '/features/legal-research' ||
        hash === '#/features/legal-research'
      ) {
        setCurrentPage('legal-research');
      } else if (
        hash.startsWith('#/features/my-journal') ||
        path === '/features/my-journal' ||
        hash === '#/features/my-journal'
      ) {
        setCurrentPage('my-journal');
      } else if (
        hash.startsWith('#/features/law-library') ||
        path === '/features/law-library' ||
        hash === '#/features/law-library'
      ) {
        setCurrentPage('law-library');
      } else if (
        hash.startsWith('#/features/drafting-lab') ||
        path === '/features/drafting-lab' ||
        hash === '#/features/drafting-lab'
      ) {
        setCurrentPage('drafting-lab');
      } else if (
        hash.startsWith('#/features/compare-review') ||
        path === '/features/compare-review' ||
        hash === '#/features/compare-review'
      ) {
        setCurrentPage('compare-review');
      } else if (
        hash.startsWith('#/features/evidence') ||
        path === '/features/evidence' ||
        hash === '#/features/evidence'
      ) {
        setCurrentPage('evidence');
      } else if (
        hash.startsWith('#/features/hearings') ||
        path === '/features/hearings' ||
        hash === '#/features/hearings'
      ) {
        setCurrentPage('hearings');
      } else if (
        hash.startsWith('#/features/cases') ||
        path === '/features/cases' ||
        hash === '#/features/cases'
      ) {
        setCurrentPage('cases');
      } else if (
        hash.startsWith('#/features/clients') ||
        path === '/features/clients' ||
        hash === '#/features/clients'
      ) {
        setCurrentPage('clients');
      } else if (
        hash.startsWith('#/features/document-analyzer') ||
        path === '/features/document-analyzer' ||
        hash === '#/features/document-analyzer'
      ) {
        setCurrentPage('document-analyzer');
      } else if (
        hash.startsWith('#/features/ai-assistant') ||
        path === '/features/ai-assistant' ||
        hash === '#/features/ai-assistant'
      ) {
        setCurrentPage('ai-assistant');
      } else if (hash.startsWith('#/features') || path === '/features') {
        setCurrentPage('features');
      } else if (hash.startsWith('#/solutions') || path === '/solutions') {
        setCurrentPage('solutions');
      } else if (hash.startsWith('#/about') || path === '/about' || hash === '#about') {
        setCurrentPage('about');
      } else if (hash.startsWith('#/contact') || path === '/contact' || hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    if (page === 'document-storage') {
      window.location.hash = '/features/documents';
    } else if (page === 'whatsapp-alerts') {
      window.location.hash = '/features/whatsapp-alerts';
    } else if (page === 'case-drafts') {
      window.location.hash = '/features/case-drafts';
    } else if (page === 'ecourts') {
      window.location.hash = '/features/ecourts-sync';
    } else if (page === 'billing') {
      window.location.hash = '/features/billing';
    } else if (page === 'firm-management') {
      window.location.hash = '/features/firm-management';
    } else if (page === 'legal-research') {
      window.location.hash = '/features/legal-research';
    } else if (page === 'my-journal') {
      window.location.hash = '/features/my-journal';
    } else if (page === 'law-library') {
      window.location.hash = '/features/law-library';
    } else if (page === 'drafting-lab') {
      window.location.hash = '/features/drafting-lab';
    } else if (page === 'compare-review') {
      window.location.hash = '/features/compare-review';
    } else if (page === 'evidence') {
      window.location.hash = '/features/evidence';
    } else if (page === 'hearings') {
      window.location.hash = '/features/hearings';
    } else if (page === 'cases') {
      window.location.hash = '/features/cases';
    } else if (page === 'clients') {
      window.location.hash = '/features/clients';
    } else if (page === 'document-analyzer') {
      window.location.hash = '/features/document-analyzer';
    } else if (page === 'ai-assistant') {
      window.location.hash = '/features/ai-assistant';
    } else if (page === 'features') {
      window.location.hash = '/features';
    } else if (page === 'solutions') {
      window.location.hash = '/solutions';
    } else if (page === 'about') {
      window.location.hash = '/about';
    } else if (page === 'contact') {
      window.location.hash = '/contact';
    } else if (page === 'home') {
      window.location.hash = '/';
    }
  };

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

