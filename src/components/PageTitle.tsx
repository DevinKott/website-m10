import React from "react";

function PageTitle(
    {
        title
    }: {
        title: string
    }
) {
    return (
        <div className="text-3xl mb-4 font-semibold">{title}</div>
    );
}

export default PageTitle;