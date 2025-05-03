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
  IonModal,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Categories.css"; // Import the CSS

// List of categories
const categories = ["Sql", "Frontend", "Hardware"];

const Categories: React.FC = () => {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Level options for each category
  const levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];

  // Function to handle category click
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // Set the selected category
    setIsModalOpen(true); // Open the modal for level selection
  };

  // Function to handle level selection
  const handleLevelClick = (category: string, level: string) => {
    const levelNumber = parseInt(level.split(" ")[1]); // Extracts "1" from "Level 1"
    history.push(`/quiz/${category.toLowerCase()}`, {
      level: levelNumber,
    });
    setIsModalOpen(false); // Close the modal after selection
  };

  return (
    <IonPage className="categories-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Select Category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="category-card">
          <IonList>
            {categories.map((category) => (
              <IonItem
                key={category}
                button
                onClick={() => handleCategoryClick(category)}
              >
                <IonLabel>{category}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>

        {/* Modal for level selection */}
        <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Select Level for {selectedCategory}</IonTitle>
              <IonButtons slot="start">
                <IonButton onClick={() => setIsModalOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="level-modal ion-padding">
            <IonList>
              {levels.map((level) => (
                <IonItem
                  key={level}
                  button
                  onClick={() => handleLevelClick(selectedCategory!, level)}
                >
                  <IonLabel>{level}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Categories;
