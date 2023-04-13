import './globals.css'

export const metadata = {
  title: 'Tom Dev',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-[#C3C2C5]">{children}</body>
    </html>
  )
}
