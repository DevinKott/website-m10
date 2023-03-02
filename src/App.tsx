import React from "react";
import "./App.css";

function App() {
    return (
        <div
            id="page-container"
            className="container mx-auto font-display max-w-4xl"
        >
            <div
                id="page-header"
                className="text-3xl flex flex-row justify-around p-10"
            >
                <span>
                    Devin Kott
                </span>
                <span>
                    Colorado, US
                </span>
            </div>
            <div
                id="page-body"
                className="leading-relaxed px-10"
            >
                <section className="my-4">
                    <span className="text-lg">
                        Brief Description
                    </span>
                    <p className="pl-2">
                        I work as a software development engineer at Kodak Alaris, specializing in backend services.
                        I&apos;m passionate about writing clean, reusable, and efficient code that&apos;s resilient and secure, ensuring that our products deliver optimal performance.
                        My education at RIT has taught me the significance of creating strong and safe code, and I&apos;m continuously learning new technologies to incorporate the latest advancements into our products.
                    </p>
                </section>
                <section className="my-4">
                    <span className="text-lg">
                        Education
                    </span>
                    <p className="pl-2">
                        M.S./B.S. in Computer Science, Rochester Institute of Technology
                    </p>
                    <p className="pl-2">
                        Graduate GPA: 4.00, Undergraduate GPA: 3.71, Aug 2016 - May 2021
                    </p>
                </section>
            </div>
        </div>
    );
}

export default App;
