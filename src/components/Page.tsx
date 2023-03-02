import React from "react";

function Page(
    {
        title
    }: {
        title: string
    }
) {
    return (
        <section
            className="mt-4"
        >
            <span className="text-3xl">{title}</span>
        </section>
    );
}

export default Page;