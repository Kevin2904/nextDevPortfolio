import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./shared/footer";
import Navbar from "./shared/navbar";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [windowState, setWindowState] = useState(undefined);
  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    setWindowState(typeof windowState);
    if (typeof windowState !== "undefined") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [windowState]);

  return (
    <div>
      <Head>
        <title>Kevin Herrera - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="/assets/icons/pageIco.png
        "
        />
      </Head>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />
          <main className="w-full h-full pt-20">
            <About />

            <Skills />

            <Projects />
            <div id="contact" className=" w-full h-screen bg-[#02072f]  ">
              <p className=" text-black">contact</p>
            </div>

            <div className="icon-bar bg-white py-2 px-2 rounded-md ">
              <Link href="#" className="mb-2">
                <img
                  src="assets/icons/github.png"
                  className=" w-10 h-10 animate-waving-hand ease-in-out"
                />
              </Link>
              <Link href="#" className="mb-2">
                <img
                  src="assets/icons/twitter.png"
                  className=" w-10 h-10 animate-waving-hand ease-in-out"
                />
              </Link>
              <Link href="#" className="">
                <img
                  src="assets/icons/linkedin.png"
                  className=" w-10 h-10 animate-waving-hand ease-in-out"
                />
              </Link>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

/*

<>
          {" "}
         
        </>
*/
