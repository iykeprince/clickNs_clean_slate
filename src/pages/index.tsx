import Head from "next/head"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import styles from '../styles/index.module.css'
import HomeBodyTop from "../components/HomeBodyTop/HomeBodyTop"
import BodyNav from "../components/BodyNav/BodyNav"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Woozeee</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i" />
      </Head>
      <Header/>
      <HomeBodyTop/>
      <BodyNav/>
      <Footer/>
      

    </div>
  )
}
