import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Elements/Layout";
import { MainPage } from "./pages/MainPage";
import { useState } from 'react';
import { ProjectsPage } from "./pages/ProjectsPage";



export function App() {
    const [theme, setTheme] = useState('dark');
    return (
        <BrowserRouter>
            <Layout theme={theme}>
                <Routes>
                    <Route path="/" element={<MainPage theme={theme} setTheme={setTheme} />} />
                    <Route path="/projects_page" element={<ProjectsPage theme={theme} setTheme={setTheme} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}