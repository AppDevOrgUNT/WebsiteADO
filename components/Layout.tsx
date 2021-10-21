import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'
import styles from "../styles/Home.module.css";

interface LayoutProps {
    title?: string;
    description?: string;
    children: any
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
    return(
        <>

            <Header />
            <SideBar>
                <main className={styles.main}>{children}</main>
            </SideBar>
            <Footer />
        </>
    )
}

export default Layout