import React from "react";
import PageTitle from "../components/PageTitle";

function Education() {
    return (
        <section
            className={"mt-4 text-lg"}
        >
            <PageTitle title={"Education"}/>
            <div className="flex flex-col mb-4">
                <span className="font-bold">Masters of Science - Computer Science</span>
                <span className="text-base">Rochester Institute of Technology</span>
                <span className="text-base">4.00 - Aug 2019 - May 2021</span>
            </div>
            <div className="flex flex-col mb-4">
                <span className="font-bold">Bachelors of Science - Computer Science</span>
                <span className="text-base">Rochester Institute of Technology</span>
                <span className="text-base">3.71 - Aug 2016 - May 2019</span>
            </div>
            <div>
                My graduate work focused on <i>computing security.</i>
            </div>
        </section>
    );
}

export default Education;