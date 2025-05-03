import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonText,
  IonButton,
} from "@ionic/react";
import { useParams, useHistory, useLocation } from "react-router-dom";

const Result: React.FC = () => {
  const { score } = useParams<{ score: string }>();
  const location = useLocation<{ category: string; level: number }>();
  const history = useHistory();

  const category = location.state?.category;
  const level = location.state?.level ?? 1;

  const numericScore = parseInt(score);

  const getFeedback = (score: number) => {
    if (score === 5) return "Excellent!";
    if (score >= 4) return "Great job!";
    if (score >= 3) return "Not bad. Keep improving!";
    return "Keep practicing!";
  };

  const handleNextLevel = () => {
    if (level < 5) {
      history.push({
        pathname: `/quiz/${category}`,
        state: { level: level + 1 },
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Assessment Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonText color="primary">
          <h1>Your Score: {numericScore}/5</h1>
          <h2>{getFeedback(numericScore)}</h2>
        </IonText>
        {level < 5 ? (
          <IonButton expand="block" onClick={handleNextLevel}>
            Next Level
          </IonButton>
        ) : (
          <IonText>
            <p>You have completed all levels!</p>
          </IonText>
        )}
        <IonButton expand="block" onClick={() => history.push("/categories")}>
          Try Another Category
        </IonButton>
        <IonButton expand="block" fill="outline" onClick={() => history.push("/")}>
          Back to Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Result;
