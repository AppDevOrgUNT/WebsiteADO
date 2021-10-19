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
        {/* Welcome Area */}
        <div className={styles.container}>
            <h2>
              We are UNT&apos;s
            </h2>
          <h1 className={styles.clubName}>
              App Development Org
            </h1>
            <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          <button className={styles.button} type="button">Join our Discord</button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
