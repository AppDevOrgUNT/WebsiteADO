import Header from './Header'
import Footer from './Footer'
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
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout