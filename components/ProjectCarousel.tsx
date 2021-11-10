import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// This is used for either who we are and or project showcase. It'll show more when the screen size is bigger
const ProjectCarousel = () => {
    const[isDesktop, setDesktop] = useState(false);

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
                <div className={styles.projectContainer} id="projshowcase">
                    <div className={styles.projectItem}>
                        
                        {/* make pretty using css */}
                        <p className={styles.projTitle}>
                            MyChef
                        </p>

                        {/* make pretty using css */}
                        <p className={styles.projDate}>
                            Fall 2020
                        </p>

                        {/* make pretty using css */}
                        <p className={styles.projDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        {/* Maybe add a hover functionality later */}
                        <button className={styles.primaryButton} type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://github.com/AppDevOrgUNT';
                        }}>LEARN MORE</button>
                    </div>
                    <div className={styles.projectImage}></div>
                    <div className={styles.projectRightArrow}> &gt; </div>
                </div>

            ) : (
                // For smaller screen
                // <div>I show on 1450px or lower</div>
                <div className={styles.projectContainer} id="projshowcase">
                    <div className={styles.wireframe}></div>

                    {/* make pretty using css */}
                    <p className={styles.projTitle}>
                        MyChef
                    </p>

                    {/* make pretty using css */}
                    <p className={styles.projDate}>
                        Fall 2020
                    </p>

                    {/* make pretty using css */}
                    <p className={styles.projDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* Maybe add a hover functionality later */}
                    <button className={styles.primaryButton} type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/AppDevOrgUNT';
                    }}>LEARN MORE</button>
                </div>
            )}
        </div>
    );
}

export default ProjectCarousel;