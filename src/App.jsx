import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Elements/Layout";
import { TeamPage } from "./pages/TeamPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';



export function App() {
    const [theme, setTheme] = useState('dark');
    return (
        <BrowserRouter>
            <Layout theme={theme} setTheme={setTheme}>
                <Routes>
                    <Route path="/" element={<TeamPage theme={theme} />} />
                    <Route path="/projects_page" element={<ProjectsPage theme={theme} />} />
                    <Route path="*" element={ <NotFoundPage theme={theme} /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}