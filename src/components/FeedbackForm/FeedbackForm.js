import { useState } from "react";

// Composants
import Card from "../../shared/Card";
import Button from "../../shared/Button";

function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

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

    return (
        <Card>
            <form>
                <h2>Quel note me donneriez-vous au sujet de mon coaching sportif ?</h2>
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
