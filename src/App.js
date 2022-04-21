import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import History from "./components/history/History";
import Aside from "./components/aside/Aside";

function App() {
    return (
        <>
            <Sidebar />
            <main className="main d-flex">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recent" element={<History />} />
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "5rem" }}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                </div>
                <Aside />
            </main>
        </>
    );
}

export default App;
