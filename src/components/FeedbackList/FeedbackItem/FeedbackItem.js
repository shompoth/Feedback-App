import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";

// Context
import FeedbackContext from "../../../context/FeedbackContext";

// Composants
import Card from "../../../shared/Card";

function FeedbackItem({ item }) {
    // Context
    const { deleteFeedbackItem, editFeedback } = useContext(FeedbackContext);

    return (
        <Card className="card">
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedbackItem(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple" />
            </button>

            <div className="text-display"> {item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
