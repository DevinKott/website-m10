import React from "react";

function NavButton(props: any) {
    const title: string | undefined = props.title as string || "";
    const pageID: number = props.pageID as number;
    const updatePage: any = props.updatePage;
    const selected: boolean = props.selected as boolean;

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