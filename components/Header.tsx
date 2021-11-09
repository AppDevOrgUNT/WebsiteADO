
import styles from "../styles/Home.module.css";
import SocialLink from "./SocialLink"
// import DiscordLogo from '../public/Discord-Logo-Color.png'
// import InstagramLogo from '../public/Instagram_Glyph_Gradient_RGB.png'
import DiscordLogo from '../public/glowingDiscord.png'
import InstagramLogo from '../public/glowingInstagram.png'

const Header = () => (
  <header className={styles.header}>
    {/* <Image
        src="http://jquery-az.com/html/images/banana.jpg"
        alt="Landscape picture"
        width={500}
        height={500}
      /> */}
    <h4>
      Discovery Park F285
    </h4>

    <SocialLink icon={InstagramLogo} destination="https://instagram.com/ado_unt" altText="Follow us on instagram" className={styles.push} />
    <SocialLink icon={DiscordLogo} destination="https://discord.gg/eg3KqNsXEc" altText="Join us on discord" />

    {/* <NavBar/> */}
  </header>
)

export default Header