import Head from 'next/head'
import styles from '@/styles/Home.module.css'

//Componets
import VideoContainer from "../containers/VideoContainer";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Convin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <VideoContainer />
      </main>
    </>
  )
}