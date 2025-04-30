import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Self-Assessment App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => history.push("/categories")}>
          Start New Assessment
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
