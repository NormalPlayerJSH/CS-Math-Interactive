import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '수학-정보 융합 교육을 위한 인터랙티브 데이터 시각화 수업 도구',
  description: '수학-정보 융합 교육을 위한 인터랙티브 데이터 시각화 수업 도구',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
