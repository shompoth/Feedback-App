import PropTypes from "prop-types";

// Composants
import FeedbackItem from "./FeedbackItem/FeedbackItem";

function FeedbackList({ feedback, handleDeleteFeedbackItem }) {
    if (!feedback || feedback.length === 0) {
        return <p>Pas de feedback</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map(item => (
                <FeedbackItem
                    handleDeleteFeedbackItem={handleDeleteFeedbackItem}
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }),
    ),
};

export default FeedbackList;
