import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Content Republish Scheduler — Auto-republish evergreen content across platforms',
  description: 'Schedules and automatically republishes evergreen content to Twitter, LinkedIn, and Medium with optimal timing. Built for content creators and marketers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2fb0e63f-842e-4702-b792-915a1a22b1ef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
