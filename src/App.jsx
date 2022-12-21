import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Elements/Layout";
import { TestPage } from "./pages/TestPage";
import { useState } from 'react';
import { ProjectsPage } from "./pages/ProjectsPage";



export function App() {
    const [theme, setTheme] = useState('dark');
    return (
        <BrowserRouter>
            <Layout theme={theme} setTheme={setTheme}>
                <Routes>
                    <Route path="/" element={<TestPage theme={theme} />} />
                    <Route path="/projects_page" element={<ProjectsPage theme={theme} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}