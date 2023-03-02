import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";

function Education() {
    const [showFade, setShowFade] = useState<boolean>(false);
    const DURATION = 100;

    useEffect(
        () => {
            setTimeout(
                () => {
                    setShowFade(true);
                },
                50
            );
        },
        []
    );

    return (
        <section
            className={`mt-4 transition-opacity ease-in duration-${DURATION} opacity-${showFade ? "100" : "0"}`}
        >
            <PageTitle title={"Education"}/>
            <p>
                M.S./B.S. in Computer Science, Rochester Institute of Technology
            </p>
            <p>
                Graduate GPA: 4.00, Undergraduate GPA: 3.71, Aug 2016 - May 2021
            </p>
        </section>
    );
}

export default Education;