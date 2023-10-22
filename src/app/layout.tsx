import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@styles/globals.css";
import Drawer from '@components/shared/Drawer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Bus E-Tickting System',
  description: 'Aleeha tech Bus E-Tickting System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-theme="custom1" className={inter.className}>

        <Drawer>
          {children}</Drawer>
      </body>
    </html>
  )
}
