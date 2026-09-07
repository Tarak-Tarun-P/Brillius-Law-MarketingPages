import type { Metadata } from 'next';
import '../styles/all.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'BrilliusLaw — Modern Legal Intelligence. Built for the Law.',
  description:
    'BrilliusLaw brings legal research, document intelligence, and intelligent workflows together in one powerful platform.',
  icons: { icon: '/assets/brilliuslaw-logo.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Cinzel:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page-wrapper">
          {/* Application Transparent Background Overlay */}
          <div className="app-bg-overlay" aria-hidden="true" />

          {/* Floating Modern Legal Header */}
          <Navbar />

          {children}

          {/* Structured Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
