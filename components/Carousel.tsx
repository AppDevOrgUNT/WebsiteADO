import { useEffect, useState } from "react";


// This is used for either who we are and or project showcase. It'll show more when the screen size is bigger
const Carousel = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            {isDesktop ? (
                <div>I show on 1451px or higher</div>
            ) : (
                <div>I show on 1450px or lower</div>
            )}
        </div>
    );
}

export default Carousel;