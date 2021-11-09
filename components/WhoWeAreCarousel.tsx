import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// This is used for either who we are and or project showcase. It'll show more when the screen size is bigger
const WhoWeAreCarousel = () => {
    const [isDesktop, setDesktop] = useState(false);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
        if (window.innerWidth > 600) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 1450) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        };
        
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            {isDesktop ? (
                // For bigger screen
                <div className={styles.whoWeAreContainer}>
                    {/* Add button here to iterate left of class member array */}
                    <div className={styles.wireframe}></div>
                    <div className={styles.wireframe}></div>
                    <div className={styles.wireframe}></div>
                    <div className={styles.wireframe}></div>
                    {/* add button here to iterate right of the class member array */}
                </div>
                
            ) : (
                // For smaller screen
                // <div>I show on 1450px or lower</div>
                <div className={styles.wireframe}></div>
            )}
        </div>
    );
}

export default WhoWeAreCarousel;