import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Composant
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink/AboutIconLink";

// Pages
import AboutPage from "./pages/AboutPage";

function App() {
    // State
    const [feedback, setFeedback] = useState(FeedbackData);

    // Fonction

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedbackItem = id => {
        if (window.confirm("Êtes-vous sur de supprimer ce commentaire ?")) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    handleDeleteFeedbackItem={deleteFeedbackItem}
                                    feedback={feedback}
                                />
                            </>
                        }
                    ></Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;
