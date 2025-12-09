// src/app/layout.tsx
import type { Metadata } from 'next';
import Favicon from '../components/Favicon/Favicon';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Myrtle Solutions',
  description: 'Your trusted partner for innovative business solutions',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <Favicon />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}