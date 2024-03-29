import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my BB app!!#" />
        <p className="description">
          <ul>
            <li><a href="/test">View Test Page</a></li>
          </ul>
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
