import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rose Gold Code | Independent Software Studio',
  icons: { icon: '/favicon.svg' },
  description: 'Rose Gold Code LLC is an independent Arizona software studio developing apps for films, budgeting, sports, notes, and social connection.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
