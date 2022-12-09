import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
