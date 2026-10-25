import type { Metadata, Viewport } from 'next';
import '../globals.css';
import './override.css';

export const metadata: Metadata = {
  title: 'Jubayer — AI Developer',
  description: 'Portfolio of Jubayer, an AI-focused developer building intelligent, multilingual and user-centered software experiences.',
  applicationName: 'Jubayer Portfolio',
  keywords: ['Jubayer', 'AI Developer', 'Full-stack', 'Joonexa', 'Artificial Intelligence', 'Software Development'],
  openGraph: {
    title: 'Jubayer — AI Developer',
    description: 'Exploring the intersection of AI, software and human connection.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#080d1a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
