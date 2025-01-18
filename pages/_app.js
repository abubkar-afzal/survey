import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/footer";
import LoadingBar  from "react-top-loading-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(()=>{
  router.events.on('routeChangeStart',()=>{setProgress(40)});
  router.events.on('routeChangeComplete',()=>{setProgress(100)});
},[router.query])
  return <>
  
  <Head>
    <meta name="keywords" content="Public survey website"/>
    <meta name="description" content="These you got some questions which you can give answer and making public awearness"/>
    <meta name="author" content="Abubakar Afzal"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <link rel="icon" href="./survey-logo.png" />
    <title> Survey</title>
  </Head>
  <LoadingBar color='rgba(0,168,89,255)' progress={progress}
    onLoaderFinished={() => setProgress(0)} />
  <Navbar/>
  
  <Component {...pageProps} />
  <Footer/>
  
  </>
}
