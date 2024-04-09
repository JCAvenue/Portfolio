import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

import NavigationBar from '@/app/_components/NavigationBar';

export const metadata: Metadata = {
  title: 'Jcavenue',
  authors: [{ name: 'John Carlo Fababeir' }],
  description: 'Reactive Pawn Personal Web Portfolio made using NextJS',
  keywords: [
    'Frontend Developer Portfolio',
    'Portfolio',
    'NextJS',
    'Jcavenue',
    'Personal Portfolio',
  ],
};

const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={bodyFont.style}>
        <AntdRegistry>
          <NavigationBar />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
