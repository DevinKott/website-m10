import React from "react";
import PageTitle from "../components/PageTitle";

function Home() {
    return (
        <section className="mt-4">
            <PageTitle title={"Hi there!"}/>
            <p>
                My name is Devin, and I&apos;m a 25-year-old software developer from Colorado.
            </p>
            <p>
                I work as a software development engineer at Kodak Alaris, specializing in backend services.
                I&apos;m passionate about writing clean, reusable, and efficient code that&apos;s resilient and secure, ensuring that our products deliver optimal performance.
                My education at RIT has taught me the significance of creating strong and safe code, and I&apos;m continuously learning new technologies to incorporate the latest advancements into our products.
            </p>
        </section>
    );
}

export default Home;