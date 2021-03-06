import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
// import "./globalStyles.css";

// NOTE: embrace power of CSS flexbox!
import styles from "./arrowsOnBottomOrTop.module.css";

// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: getId(ind) }));

const MemberScroll= () => {
    const [items] = React.useState(getItems);
    function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    
        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }
    
        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }

    return (
        <>
            <div className="example" style={{ paddingTop: "100px" }}>
                <div>
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        onWheel={onWheel}
                    >
                        {items.map(({ id }) => (
                            <Card
                                title={id}
                                itemId={id} // NOTE: itemId is required for track items
                                key={id}
                            />
                        ))}
                    </ScrollMenu>
                </div>
            </div>
        </>
    );
}
export default MemberScroll;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

// ReactDOM.render(<App />, document.getElementById("root"));

