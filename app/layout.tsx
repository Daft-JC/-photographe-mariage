import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Lamartina Studio — Photographe de Mariage',
    template: '%s — Lamartina Studio',
  },
  description:
    'Alessio Lamartina, photographe de mariage haut de gamme en France, Italie et Europe. Reportages élégants, émotionnels et intemporels.',
  keywords: ['photographe mariage', 'mariage haut de gamme', 'photographe France', 'photographe Italie', 'Lamartina Studio'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Lamartina Studio',
    title: 'Lamartina Studio — Photographe de Mariage',
    description: 'Photographe de mariage haut de gamme en France, Italie et Europe.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
}
