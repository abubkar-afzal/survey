import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/footer";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { Fade } from "react-awesome-reveal";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [accountlogo, setaccountlogo] = useState(false);
  const [slowinternet, setslowinternet] = useState(false);
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setLoader(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoader(false);
    });

    const token = localStorage.getItem("token");

    if (token) {
      setaccountlogo(true);
      setUser({ value: token });
      setKey(Math.random);
    } else {
      setaccountlogo("");
    }

    setLoader(false);
  }, [router.query]);
  return (
    <>
      <Head>
        <meta name="keywords" content="Public survey website" />
        <meta
          name="description"
          content="These you got some questions which you can give answer and making public awearness"
        />
        <meta name="author" content="Abubakar Afzal" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:title" content="It's An Survey"></meta>
        <meta
          property="og:description"
          content="There You Can Share Your Opinion 🥰"
        ></meta>
        <meta property="og:image" content="public/survey-logo.png"></meta>

        <meta name="theme-color" content="#1bb566" />
        <link rel="icon" href="./survey-logo.png" />
        <title> Survey</title>
      </Head>

      <LoadingBar
        color="rgba(0,168,89,255)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar accountlogo={accountlogo} user={user} />
      {loader ? (
        <Fade>
          <div className=" mx-auto mt-[40vh] mb-[40vh] justify-items-center">
            <DotLoader
              color="rgba(0,168,89,255)"
              cssOverride={{}}
              loading
              size={60}
              speedMultiplier={1}
            />
            <br />
            <br />
            <p className="font-bold sm:text-[18px] mm:text-[18px] lm:text-[20px] t:text-[22px] l:text-[27px] ll:text-[32px] k:text-[37px]">
              Please Wait !!
            </p>
          </div>
        </Fade>
      ) : (
        <Component {...pageProps} user={user} />
      )}

      <Footer />
    </>
  );
}
