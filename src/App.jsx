import "./App.css";
import { useState } from "react";

import {
    profile,
    about,
    education,
    experience,
    skills,
    hobbies,
    socialLinks
} from "./data";

import ThemeToggle from "./components/ThemeToggle";
import Profile from "./components/Profile";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Social from "./components/Social";

function App() {
    const [dark, setDark] = useState(true);

    return (
        <div className={`background ${dark ? "dark" : "light"}`}>
            <div className="card animate">
                <ThemeToggle dark={dark} setDark={setDark} />

                <Profile {...profile} />
                <About text={about} />
                <Education {...education} />
                <Experience {...experience} />
                <Skills skills={skills} />
                <Hobbies hobbies={hobbies} />
                <Social links={socialLinks} />
            </div>
        </div>
    );
}

export default App;
