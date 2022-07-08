import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import AppProvaider from "./contexts";

function App() {
    return (
        <BrowserRouter>
            <AppProvaider>
                <AppRoutes />
            </AppProvaider>
        </BrowserRouter>
    );
}

export default App;
