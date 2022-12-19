import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Elements/Layout";
import { TestPage } from "./pages/TestPage";
import {ProjectsPage} from "./pages/ProjectsPage";




export function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<TestPage/>}/>
                    <Route path="/projects_page" element={<ProjectsPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}