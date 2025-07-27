import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '日置市100人カイギ',
  description: '火、起きし街。日置市。日置市に関わる面白い活動をしている人々を紹介し、緩やかなコミュニティ形成を目指すイベントサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}