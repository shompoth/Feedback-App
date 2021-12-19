import { createContext, useState, useEffect } from "react";

// Context
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // Variables
    const initialFeedbackEdit = {
        item: {},
        edit: false,
    };

    // States
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState(initialFeedbackEdit);

    // UseEffect
    useEffect(() => {
        fetchFeedback();
    }, []);

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    };

    // Fonctions
    const addFeedback = async newFeedback => {
        const response = await fetch(`/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
    };

    const updateFeedbackItem = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updItem),
        });

        const data = await response.json();

        setFeedback(
            feedback.map(item => (item.id === id ? { ...item, ...data } : { ...item })),
        );
        setFeedbackEdit(initialFeedbackEdit);
    };

    const deleteFeedbackItem = async id => {
        if (window.confirm("Êtes-vous sur de supprimer ce commentaire ?")) {
            await fetch(`/feedback/${id}`, { method: "DELETE" });

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
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
