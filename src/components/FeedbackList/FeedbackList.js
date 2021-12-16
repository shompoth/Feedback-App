import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

// Context
import FeedbackContext from "../../context/FeedbackContext";

// Composants
import FeedbackItem from "./FeedbackItem/FeedbackItem";

function FeedbackList() {
    // Context
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>Pas de feedback</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;
