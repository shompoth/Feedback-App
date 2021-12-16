import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Composant
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink/AboutIconLink";

// Pages
import AboutPage from "./pages/AboutPage";

// Context
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
