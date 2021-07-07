import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from '../components/NavBar';
import DescriptionPage from "../components/DescriptionPage";
import ResultPage from "../components/ResultPage";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/items/:id/description">
                        <DescriptionPage />
                    </Route>
                    <Route path="/items">
                        <ResultPage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2></h2>;
}
