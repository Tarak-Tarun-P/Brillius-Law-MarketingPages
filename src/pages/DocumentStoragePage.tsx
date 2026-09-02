import React, { useEffect } from 'react';
import { DocStorageHero } from '../components/document-storage/DocStorageHero';
import { DocStorageValue } from '../components/document-storage/DocStorageValue';
import { DocStorageSearch } from '../components/document-storage/DocStorageSearch';
import { DocStorageFinalCTA } from '../components/document-storage/DocStorageFinalCTA';

export const DocumentStoragePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Document Storage | BrilliusLaw Legal Technology';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="document-storage-page-main">
      {/* 01. Hero with Document Storage Preview */}
      <DocStorageHero />

      {/* 02. Simple Value Section: Store, Find, Retrieve */}
      <DocStorageValue />

      {/* 03. Document Search & Discovery */}
      <DocStorageSearch />

      {/* 04. Final Call to Action */}
      <DocStorageFinalCTA />
    </main>
  );
};
