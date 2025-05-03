import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  IonText,
} from "@ionic/react";
import "./Started.css";

const Started: React.FC = () => {
  const navigation = useIonRouter();

  const dostarted = () => {
    navigation.push("/", "forward", "replace"); // Navigate to Home
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="title-center">Self-Assessment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding started-content">
        <div className="started-box">
          <IonText color="dark">
            <h1>Ready to Start?</h1>
            <p>Let's begin your self-assessment journey.</p>
          </IonText>
          <IonButton onClick={dostarted} expand="block" className="start-btn">
            Get Started
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Started;
