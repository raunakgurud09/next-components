import Head from 'next/head'
import FirstCard from '../components/ui/Cards/first'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">&crarr; Next.js! &#8599; </a>
        </h1>

        
        <FirstCard
          title="New title"
          link="http://localhost:3000"
          date="03/12/2022"
          image={'/../public/mypic.jpg'}
          icon={'/../public/mypic.jpg'}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta harum, earum alias sapiente minudunt inventore harum impedit provident consequatur quis!"
        />
      </main>
      
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
