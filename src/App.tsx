import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserT } from "../types";
import "./App.css";
import Login from "./pages/Login";
import Todos from "./pages/Todos";

function App() {
    const [user, setUser] = useState<UserT | undefined>();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? (
                            <Todos setUser={setUser} />
                        ) : (
                            <Login setUser={setUser} />
                        )
                    }
                />
            </Routes>
        </>
    );
}

export default App;
