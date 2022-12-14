import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Elements/Layout";
import { TestPage } from "./pages/TestPage";


export function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<TestPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}