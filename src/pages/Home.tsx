import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Home.css"; 

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="app-title">Self-Assessment App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-background ion-padding">
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardTitle className="gradient-text">Welcome!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="dark">
              <p className="intro-text">
                Assess your <strong>knowledge</strong> and <strong>skills</strong> by taking a quick quiz in different categories.
              </p>
            </IonText>
            <IonButton
              expand="block"
              color="tertiary"
              className="start-button"
              onClick={() => history.push("/categories")}
            >
              🚀 Start New Assessment
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
