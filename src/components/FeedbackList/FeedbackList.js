import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

// Composants
import FeedbackItem from "./FeedbackItem/FeedbackItem";

function FeedbackList({ feedback, handleDeleteFeedbackItem }) {
    if (!feedback || feedback.length === 0) {
        return <p>Pas de feedback</p>;
    }

    // return (
    //     <div className="feedback-list">
    //         {feedback.map(item => (
    //             <FeedbackItem
    //                 handleDeleteFeedbackItem={handleDeleteFeedbackItem}
    //                 key={item.id}
    //                 item={item}
    //             />
    //         ))}
    //     </div>
    // );
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
                        <FeedbackItem
                            handleDeleteFeedbackItem={handleDeleteFeedbackItem}
                            item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }),
    ),
};

export default FeedbackList;
