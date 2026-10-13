import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Hephzibah Ikhioda — Software Engineer', template: '%s | Hephzibah Ikhioda' },
  description: 'Software engineer in Lagos building thoughtful web experiences, cross-platform mobile applications, and reliable backend systems.',
  openGraph: { title: 'Hephzibah Ikhioda — Software Engineer', description: 'Selected work across mobile, web, and backend engineering.', type: 'website' },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
