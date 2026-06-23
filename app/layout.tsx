import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const arabic = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://container3.jahdev.com'),
  title: 'The Container — Jeddah · Red Sea Port',
  description:
    "Jeddah's raw industrial techno & house venue on the Red Sea port. Licensed live electronic-music events inside Shams Container Terminal.",
  openGraph: {
    title: 'The Container — Jeddah · Red Sea Port',
    description:
      "Jeddah's raw industrial techno & house venue on the Red Sea port.",
    images: ['/photos/hero-port.jpg'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#04090c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${display.variable} ${body.variable} ${arabic.variable} bg-abyss text-bone antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
