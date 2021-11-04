import Image from 'next/image'
import styles from '../styles/Home.module.css'

const VercelFooter = ()=>{
  return (
    <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by{" "}
    <span className={styles.logo}>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </span>
  </a>
  );
};

const NetlifyFooter =()=>{
  return (
    <a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
</a>
  );
};
const Footer = () => {
  return (
    <footer className={styles.footer}>
     <div children={platform=="vercel":<VercelFooter/>?<NetflifyFooter/>}>
       </div
    </footer>
  );
};

export default Footer;