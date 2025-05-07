import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

interface Result {
  category: string;
  level: number;
  score: number;
  taken_at?: string;
  user: {
    username: string;
    user_avatar_url?: string;
  } | null;
}

const Leaderboard: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await supabase
        .from("results")
        .select("score, category, level, taken_at, user:users(username, user_avatar_url)") 
        .order("score", { ascending: false })
        .order("taken_at", { ascending: false });

      if (error) {
        console.error("Error fetching leaderboard:", error);
      } else if (data) {
        setResults(data as Result[]);
      }
    };

    fetchResults();
  }, []);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";

    const date = new Date(dateString);


    const phtDate = new Date(date.getTime() + 8 * 60 * 60 * 1000); 

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };


    const formattedDate = new Intl.DateTimeFormat("en-PH", options).format(phtDate);

    return formattedDate;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Leaderboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {}
        <IonGrid>
          <IonRow>
            <IonCol size="1">
              <strong>Avatar</strong>
            </IonCol>
            <IonCol size="2">
              <strong>Username</strong>
            </IonCol>
            <IonCol size="3">
              <strong>Category</strong>
            </IonCol>
            <IonCol size="2">
              <strong>Level</strong>
            </IonCol>
            <IonCol size="2">
              <strong>Score</strong>
            </IonCol>
            <IonCol size="2">
              <strong>Date</strong>
            </IonCol>
          </IonRow>

          {}
          {results.map((res, index) => (
            <IonRow key={index}>
              {}
              <IonCol size="1">
                <img
                  src={res.user?.user_avatar_url || "/path/to/default-avatar.png"} // Use default avatar if none exists
                  alt="Avatar"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </IonCol>

              {}
              <IonCol size="2">
                <IonLabel>{res.user?.username || "Unknown User"}</IonLabel>
              </IonCol>
              
              {}
              <IonCol size="3">
                <IonLabel>{res.category}</IonLabel>
              </IonCol>
              
              {}
              <IonCol size="2">
                <IonLabel>{res.level}</IonLabel>
              </IonCol>
              
              {}
              <IonCol size="2">
                <IonLabel>{res.score}/5</IonLabel>
              </IonCol>

              {}
              <IonCol size="2">
                <IonLabel>{formatDate(res.taken_at)}</IonLabel>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Leaderboard;
