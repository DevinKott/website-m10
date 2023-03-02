import React from "react";

function Page(props: any) {
    const title: string | undefined = props.title as string || "";

    return (
        <section
            className="mt-4"
        >
            <span className="text-3xl">{title}</span>
        </section>
    );
}

export default Page;