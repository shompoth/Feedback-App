import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

// Composants
import Card from "../../../shared/Card";

function FeedbackItem({ item, handleDeleteFeedbackItem }) {
    return (
        <Card className="card">
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDeleteFeedbackItem(item.id)} className="close">
                <FaTimes color="purple" />
            </button>

            <div className="text-display"> {item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;