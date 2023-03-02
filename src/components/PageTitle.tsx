import React from "react";

function PageTitle(props: any) {
    const title: string | undefined = props.title as string || "";

    return (
        <div className="text-3xl mb-4">{title}</div>
    );
}

export default PageTitle;