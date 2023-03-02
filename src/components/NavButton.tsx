import React from "react";

function NavButton(
    {
        title,
        pageID,
        updatePage,
        selected
    }: {
        title: string,
        pageID: number,
        updatePage: (idx: number) => void,
        selected: boolean
    }
) {
    const selectedButtonCSS = "border-b-2 border-neutral-700";
    const unselectedButtonCSS = "border-b-2 border-neutral-300 hover:border-neutral-700 transition-colors duration-500";

    return (
        <button
            className={`mx-4 ${selected ? selectedButtonCSS : unselectedButtonCSS}`}
            onClick={
                () => {
                    updatePage(pageID);
                }
            }
        >
            {title}
        </button>
    );
}

export default NavButton;