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
import { useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

const Result: React.FC = () => {
  const { score } = useParams<{ score: string }>();
  const location = useLocation<{ category: string; level: number }>();
  const history = useHistory();

  const category = location.state?.category;
  const level = location.state?.level ?? 1;
  const numericScore = parseInt(score);

  const userId = parseInt(localStorage.getItem("user_id") || "0");

  useEffect(() => {
    const insertResult = async () => {
      if (!category || !level) return;
  
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
  
      if (userError || !user) {
        console.error("User not logged in");
        return;
      }
  
      // Fetch the user_id from your custom `users` table using the authenticated user's email
      const { data: userData, error: fetchError } = await supabase
        .from("users")
        .select("user_id")
        .eq("user_email", user.email)
        .single(); // Fetch the first matching record
  
      if (fetchError || !userData) {
        console.error("Failed to find user in users table:", fetchError?.message);
        return;
      }
  
      const { error: insertError } = await supabase.from("results").insert([
        {
          user_id: userData.user_id, // Integer user_id from the users table
          category,
          level,
          score: numericScore, // Ensure numericScore is properly parsed as a number
        },
      ]);
  
      if (insertError) {
        console.error("Failed to insert result:", insertError.message);
      } else {
        console.log("Result inserted successfully");
      }
    };
  
    insertResult();
  }, [category, level, numericScore]);
  

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

        <IonButton
          expand="block"
          onClick={() => history.push("/it35-lab/app/home/categories")}
        >
          Try Another Category
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Result;
