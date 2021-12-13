import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brazilian Banks API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="#">Brazilian Banks API!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/docs" className={styles.card}>
            <h2>Documentação &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.credifit.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mantido por{" "}
          <span className={styles.logo}>
            <Image
              src="/credifit.svg"
              alt="Vercel Logo"
              width={90}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;