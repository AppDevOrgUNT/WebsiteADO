import Footer from "../components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UNT App Development Org</title>
        <meta name="description" content={"UNT's premier App Dev Org"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
            <h2>
              We are UNT&apos;s
            </h2>
            <h1>
              App Development Org
            </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
