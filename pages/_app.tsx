import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/core/Footer/Footer'
import Navigation from '@/components/core/Header/Navigation'
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
