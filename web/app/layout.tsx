import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: 'Prexam',
  description: 'The ultimate national exam prcaticing app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="h-full">{children}</body>
    </html>
  )
}
