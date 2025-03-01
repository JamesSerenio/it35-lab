import pics from "../../assets/pics.png";
import "../../styles/Portfolio.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="custom-title">Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="feed-container">
      <h3 className="feed-title">Welcome</h3>
      <h3 className="feed-title">To</h3>
      <h3 className="feed-title">James Serenio</h3>
      <h3 className="feed-title">Portfolio</h3>
          <img src={pics} alt="James Serenio" className="feed-image" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
