import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/footer";


export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <meta name="keywords" content="Public survey website"/>
    <meta name="description" content="These you got some questions which you can give answer and making public awearness"/>
    <meta name="author" content="Abubakar Afzal"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <link rel="icon" href="./survey-logo.png" />
    <title>Public Survey</title>
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  
  </>
}
