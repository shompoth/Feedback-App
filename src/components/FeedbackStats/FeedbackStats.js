import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
    // Calculate ratings average

    let average =
        feedback.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, "");

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Avis</h4>
            <h4>Note moyenne: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }),
    ),
};

export default FeedbackStats;
