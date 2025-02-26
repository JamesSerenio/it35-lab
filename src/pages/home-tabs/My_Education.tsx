import "../../styles/MyEducation.css";
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const educationData = [
  { year: "2018", title: "Sports", description: "This year, I joined the swimming team for our school, and we practiced for a year for the upcoming competition." },
  { year: "2019", title: "Sports", description: "This year, we competed in the games, and I won three gold medals and other events. Although it wasn't bad, I also secured one silver and two bronze medals in the qualifying rounds for the Philippine team as a first-timer." },
  { year: "2020", title: "A.B.M", description: "This year, I have graduated, and the strand I took was A.B.M (Accountancy, Business, and Management) because I know I can use it in the future." },
  { year: "2021", title: "A.B.M", description: "This year, I am an incoming graduate, and I will be taking the entrance exams for my college." },
  { year: "2022", title: "Information Technology", description: "This year, I passed the exam and qualified for almost all courses. I chose Information Technology and have already registered for my incoming first year in college." },
  { year: "2023", title: "Information Technology", description: "This year, I am not yet in my second year of college, but I am still in the learning phase. We have completed several projects, and I am currently studying front-end development. Next in line is back-end development as well." }
];

const MyEducation: React.FC = () => {
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonMenuButton />
                  </IonButtons>
                  <IonTitle>My Education</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <section className="education fade-in" id="Education">
                  <div className="box-container fade-in">
                      {educationData.map((item, index) => (
                          <div className="box fade-in" key={index}>
                              <i className="hi fade-in"></i>
                              <span>{item.year}</span>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                          </div>
                      ))}
                  </div>
              </section>
          </IonContent>
      </IonPage>
  );
};

export default MyEducation;
