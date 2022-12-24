import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ThemeProvider>
  )
}
