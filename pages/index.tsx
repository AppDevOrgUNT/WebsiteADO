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
        {/* For navigation bar - temp ui; make this sticky*/}
        <div className={styles.row}>
          <div className={styles.columnItem}>
            <ul className={styles.navBar}>
              <li><a href="#welcome">App Dev Org</a></li>
              <li><a href="#whoweare">Who We Are</a></li>
              <li><a href="#projshowcase">Project Showcase</a></li>
              <li><a href="#events">Upcoming Events</a></li>
            </ul>
          </div>

          {/* Welcome Area */}
          <div className={styles.sectionContainer} id="welcome">
            <h2>
              We are UNT&apos;s
            </h2>
            <h1 className={styles.clubName}>
              App Development Org
            </h1>
            <p className={styles.clubDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* Maybe add a hover functionality later */}
            <button className={styles.button} type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://discord.gg/eg3KqNsXEc';
            }}>Join our Discord</button>
          </div>
          

          {/* Who we are */}
          <div className={styles.sectionContainer} id="whoweare">
            <h2>
              Who We Are
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Project Showcase */}
          <div className={styles.sectionContainer} id="projshowcase">
            <h2>
              Project Showcase
            </h2>
            <p>
              MyChef, FindMyClass, etc
            </p>
          </div>

          {/* Upcoming Events */}
          <div className={styles.sectionContainer} id="events">
            <h2>
              Upcoming Events
            </h2>
            <p>
              We'll put meeting times and other events
            </p>
          </div>

        </div> {/* Row Div - may rename later */}
      </Layout>
    </>
  );
};

// Always export component functions so it can be used in other files
export default Home;
