import { useState, useContext, useEffect } from "react";

// Context
import FeedbackContext from "../../context/FeedbackContext";

// Composants
import Card from "../../shared/Card";
import Button from "../../shared/Button";
import RatingSelect from "../RatingSelect/RatingSelect";

function FeedbackForm() {
    // States
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    // Context
    const { addFeedback, feedbackEdit, updateFeedbackItem } = useContext(FeedbackContext);

    // UseEffect
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    // Fonction
    const handleTextChange = e => {
        if (e.target.value === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (e.target.value !== "" && e.target.value.trim().length < 10) {
            setBtnDisabled(true);
            setMessage("Votre avis doit contenir au moins 10 charactères");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim().length > 9) {
            const newFeedback = {
                text,
                rating,
            };

            if (feedbackEdit.edit === true) {
                updateFeedbackItem(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            setText("");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Quel note me donneriez-vous au sujet de mon coaching sportif ?</h2>
                <RatingSelect handleSelectRating={num => setRating(num)} />
                <div className="input-group">
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Mettez un avis"
                    />
                    <Button type="submit" version="primary" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
