import { useContext } from "react";
//Context
import FeedbackContext from "../../context/FeedbackContext";

function FeedbackStats() {
    // Context
    const { feedback } = useContext(FeedbackContext);

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

export default FeedbackStats;
