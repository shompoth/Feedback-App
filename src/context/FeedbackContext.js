import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

// Data
import FeedbackData from "../data/FeedbackData";

// Context
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // Variables
    const initialFeedbackEdit = {
        item: {},
        edit: false,
    };

    // States
    const [feedback, setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState(initialFeedbackEdit);

    // Fonctions
    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const updateFeedbackItem = (id, updItem) => {
        setFeedback(
            feedback.map(item =>
                item.id === id ? { ...item, ...updItem } : { ...item },
            ),
        );
        setFeedbackEdit(initialFeedbackEdit);
    };

    const deleteFeedbackItem = id => {
        if (window.confirm("Êtes-vous sur de supprimer ce commentaire ?")) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    const editFeedback = item => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedbackItem,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedbackItem,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
