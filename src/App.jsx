import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Elements/Layout";
import { TestPage } from "./pages/TestPage";
import { useState } from 'react';



export function App() {
    const [theme, setTheme] = useState('dark');
    return (
        <BrowserRouter>
            <Layout theme={theme}>
                <Routes>
                    <Route path="/" element={<TestPage theme={theme} setTheme={setTheme}/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}