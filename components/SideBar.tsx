import styles from "../styles/Home.module.css";


const SideBar = () => (
  <sidebar className={styles.sidebar}>
        {/* For navigation bar - temp ui */}
        <div className={styles.row}>
          <div className={styles.columnItem}>
            <ul className={styles.navBar}>
              <li><a href="">App Dev Org</a></li>
              <li><a href="">Who We Are</a></li>
              <li><a href="">Project Showcase</a></li>
              <li><a href="">Upcoming Events</a></li>
            </ul>
          </div>
        </div>
  </sidebar>
)

export default SideBar


