import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
    return (
        <BrowserRouter>
        
                <AppRoutes />
         
        </BrowserRouter>
    );
}

export default App;
