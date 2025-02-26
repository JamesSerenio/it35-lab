import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import f from "../../assets/f.png";
import g from "../../assets/g.png";
import h from "../../assets/h.png";
import i from "../../assets/i.png";
import "../../styles/My_Portfolio.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const portfolioItems = [
  { img: a, title: "Front End", description: "I was in my second year during that time. This is the project I worked on, a book borrowing system where users can choose the categories they are interested in. It's also a part of the booking appointment system." },
  { img: b, title: "Front End", description: "I was in my second year during that time. This is what you'll see first when you open the book appointment system there, you'll find the email, password, and other details. It's the initial step before proceeding to the home page once you have an account." },
  { img: c, title: "Front End", description: "I was in my second year during that time. Once you're done with the login, you'll be directed to the home page, which includes sections like 'About Us,' 'Contact Us,' and others. This is also a part of our book appointment system." },
  { img: d, title: "Front End", description: "I am a second-year student and this is from our home page. When you select 'About Us,' this is what appears, with a description of our book appointment system." },
  { img: f, title: "Full Stack", description: "I am a first-year student and this is the first thing I worked on, a chess game, when we presented our game dev. However, we didn't present that." },
  { img: g, title: "Full Stack", description: "I am a first-year student, and this is the second project I worked on, a chess game, which we presented for our game dev." },
  { img: h, title: "Full Stack", description: "I am a first-year student, and this is something I worked on just for my own enjoyment. I created a Flappy Bird-style game called 'Fluppy Box." },
  { img: i, title: "Full Stack", description: "I Was Also In My First Year During That Time. That Was The Period When My Friend And I, Just For Fun, Decided To Create A Game. We Were Just Enjoying Ourselves, And We Had Talked About Becoming Game Developers In The Future, So We Made A Game Called 'Lost Game." },
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="custom-title">My Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="feed-container">
          <div className="portfolio-container"style={{ marginTop: "250px" }}>
            {portfolioItems.map((item, index) => (
              <div className="flip-box" key={index}>
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={item.img} alt={item.title} className="portfolio-image" />
                  </div>
                  <div className="flip-box-back">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;