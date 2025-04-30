import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

// List of categories
const categories = ["English", "Math", "Science", "Leadership", "Communication"];

const Categories: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Select Category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {categories.map((category) => (
            <IonItem
              key={category}
              button
              onClick={() => history.push(`/quiz/${category.toLowerCase()}`)} // Ensure the category is passed in lowercase
            >
              <IonLabel>{category}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Categories;
