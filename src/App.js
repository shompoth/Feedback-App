import { useState } from "react";
import "./App.css";

// Composant
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
    // State
    const [feedback, setFeedback] = useState(FeedbackData);

    // Fonction
    const deleteFeedbackItem = id => {
        if (window.confirm("Êtes-vous sur de supprimer ce commentaire ?")) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    handleDeleteFeedbackItem={deleteFeedbackItem}
                    feedback={feedback}
                />
            </div>
        </>
    );
}

export default App;
