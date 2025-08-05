import type { Metadata } from 'next';
import { manRope, geistMono, geistSans, inter } from '@/app/utils/font';
import { ThemeProvider } from '@/app/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: "Deborah's Portfolio",
  description: 'A Professional Business Analyst',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manRope.className} ${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
