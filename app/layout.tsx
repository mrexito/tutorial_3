import Link from 'next/link';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <u1>
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/about"> About Page</Link>
              </li>
            <li>
              <Link href="/posts"> Posts</Link>
              </li>
          </u1>
        </nav>
          <main> {children}</main>
      </body>
    </html>
  )
}
