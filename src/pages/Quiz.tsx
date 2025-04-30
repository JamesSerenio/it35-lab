import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { questions } from "../data/questions";

const Quiz: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const history = useHistory();
  const location = useLocation(); // ✅ gets a unique key on every visit

  const categoryKey = category.toLowerCase() as keyof typeof questions;
  const categoryQuestions = questions[categoryKey] || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  // ✅ Reset when the route is visited again (e.g., user taps English again)
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  }, [location.key]); // ✅ triggered every time route is re-visited

  const currentQuestion = categoryQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = selectedAnswers.filter(
        (answer, index) => answer === categoryQuestions[index]?.answer
      ).length;
      history.push(`/result/${score}`);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{category.charAt(0).toUpperCase() + category.slice(1)} Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {currentQuestion ? (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{currentQuestion.question}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {currentQuestion.options.map((option, idx) => (
                <IonButton
                  key={idx}
                  expand="block"
                  onClick={() => handleAnswerSelect(option)}
                  color={selectedAnswers[currentQuestionIndex] === option ? "primary" : "light"}
                >
                  {option}
                </IonButton>
              ))}
            </IonCardContent>
          </IonCard>
        ) : (
          <p>No questions available for this category.</p>
        )}
        <IonButton expand="block" onClick={handleNext}>
          {currentQuestionIndex < categoryQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Quiz;
