import React, { useState } from "react";
import "./App.css";
import NavButton from "./components/NavButton";
import Page from "./components/Page";
import Education from "./pages/education";
import Home from "./pages/home";

function App() {
    const [page, setPage] = useState(1);

    const updatePage = (idx: number) => {
        if (!(idx >= 1 && idx <= 4)) {
            console.error(`Cannot set page to unknown page ID: ${idx}`);
            return;
        }

        setPage(idx);
    };

    return (
        <div
            id="page-container"
            className="container mx-auto font-display max-w-4xl"
        >
            <div
                id="page-header"
                className="flex flex-row justify-between p-10 border-b-2 border-neutral-100"
            >
                <span className="text-xl">devinkott.com</span>
                <nav className="text-lg">
                    <NavButton
                        title={"home"}
                        pageID={1}
                        updatePage={updatePage}
                        selected={page === 1}
                    />
                    <NavButton
                        title={"education"}
                        pageID={2}
                        updatePage={updatePage}
                        selected={page === 2}
                    />
                    <NavButton
                        title={"work"}
                        pageID={3}
                        updatePage={updatePage}
                        selected={page === 3}
                    />
                    <NavButton
                        title={"more"}
                        pageID={4}
                        updatePage={updatePage}
                        selected={page === 4}
                    />
                </nav>
            </div>
            <div
                id="page-body"
                className="leading-relaxed px-10"
            >
                {
                    page === 1 && <Home/>
                }
                {
                    page === 2 && <Education/>
                }
            </div>
        </div>
    );
}

export default App;
