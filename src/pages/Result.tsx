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
  import { useParams, useHistory } from "react-router-dom";
  
  const Result: React.FC = () => {
    const { score } = useParams<{ score: string }>();
    const history = useHistory();
  
    const getFeedback = (score: number) => {
      if (score >= 9) return "Excellent!";
      if (score >= 7) return "Great job!";
      if (score >= 5) return "Not bad. Keep improving!";
      return "Keep practicing!";
    };
  
    const numericScore = parseInt(score);
  
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
            <h1>Your Score: {numericScore}/10</h1>
            <h2>{getFeedback(numericScore)}</h2>
          </IonText>
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
  