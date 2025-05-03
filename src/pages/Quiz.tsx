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
  const location = useLocation<{ level?: number }>();

  // Get the selected level from route state or default to level 1
  const level = location.state?.level ?? 1;

  // Get the corresponding category key from the questions object
  const categoryKey = category.toLowerCase() as keyof typeof questions;
  const categoryQuestions = questions[categoryKey];

  // Safely access the correct level of questions
  const levelKey = `level${level}` as keyof typeof categoryQuestions;
  const levelQuestions = categoryQuestions?.[levelKey] ?? [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  }, [location.key]); // Reset when revisiting or navigating to the quiz again

  const currentQuestion = levelQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < levelQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = selectedAnswers.filter(
        (answer, index) => answer === levelQuestions[index]?.answer
      ).length;
      history.push(`/result/${score}`, { category, level });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {category.charAt(0).toUpperCase() + category.slice(1)} Quiz (Level {level})
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {currentQuestion ? (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{currentQuestion.question}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {currentQuestion.options?.map((option, idx) => (
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
          <p>No questions available for this level.</p>
        )}
        <IonButton expand="block" onClick={handleNext}>
          {currentQuestionIndex < levelQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Quiz;
