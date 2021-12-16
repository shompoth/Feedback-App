import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div>
            <Card>
                <div className="about">
                    <h1>A propos de ce projet</h1>
                    <p>
                        Cette application en React permet de laisser un avis sur mes
                        prestations de coachings
                    </p>
                    <p>Version: 1.0.0</p>
                    <p>
                        <Link to="/">Retour à l'accueil</Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default AboutPage;
