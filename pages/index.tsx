import Footer from "../components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import MemberScroll from "../components/whoWeAreComponents/MemberScroll";
import WhoWeAreCarousel from "../components/WhoWeAreCarousel";
import ProjectCarousel from "../components/ProjectCarousel";

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
        {/* <div className={styles.row}> */}
          {/* <div className={styles.columnItem}>
            <ul className={styles.navBar}>
              <li><a href="#welcome">App Dev Org</a></li>
              <li><a href="#whoweare">Who We Are</a></li>
              <li><a href="#projshowcase">Project Showcase</a></li>
              <li><a href="#events">Upcoming Events</a></li>
            </ul>
          </div> */}

          {/* Welcome Area */}
          <div className={styles.sectionContainer} id="welcome">
          <h2 className={styles.weAreUNT}>
              We are UNT&apos;s
            </h2>
            <h1 className={styles.clubName}>
              Application Development Organization
            </h1>
            <p className={styles.clubDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* Maybe add a hover functionality later */}
            <button className={styles.primaryButton} type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://discord.gg/eg3KqNsXEc';
            }}>JOIN OUR DISCORD</button>
            <button className={styles.secondaryButton} type="button" onClick={(e) => {
              // e.preventDefault();
              // window.location.href = 'https://discord.gg/eg3KqNsXEc';
            }}>LEARN MORE</button>
          </div>
          

          {/* Who we are */}
          <div className={styles.sectionContainer} id="whoweare">
            <h2 className={styles.sectionTitle}>
              Who We Are
            </h2>
            <p className={styles.sectionDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <WhoWeAreCarousel/>
            {/* <div className={styles.pictureDecor}>
              {/* Have a horizontal scrolling bar here - may have to leave it for later }
              <MemberScroll/>
              
            </div> */}
          </div>

          {/* Project Showcase */}
          <div className={styles.sectionContainer} id="projshowcase">
            <h2 className={styles.sectionTitle}>
              Project Showcase
            </h2>
            <ProjectCarousel/>
          </div>

          {/* Upcoming Events */}
          <div className={styles.sectionContainer} id="events">
          <h2 className={styles.sectionTitle}>
              Upcoming Events
            </h2>
            <p className={styles.sectionDescription}>
              We'll put meeting times and other events. Create a table similar to what's in the Figma
            </p>
          </div>
          {/* Get in Touch */}
          <div className={styles.sectionContainer} id="getInTouch">
            <h2 className={styles.sectionTitle}>
              Get in Touch!
            </h2>
            <p className={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

        {/* </div> Row Div - may rename later */}
      </Layout>
    </>
  );
};

// Always export component functions so it can be used in other files
export default Home;
