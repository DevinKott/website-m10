import React from "react";
import PageTitle from "../components/PageTitle";

function Education() {
    return (
        <section
            className={"mt-4 text-lg"}
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