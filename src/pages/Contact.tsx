import pGif from "../assets/p.gif";
import React from "react";
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
  IonInput,
  IonButton,
  IonTextarea,
} from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="contact">
          <IonGrid>
            <IonRow className="row">
              {/* Contact Info */}
              <IonCol size="12" sizeMd="6" className="content">
                <h3 className="title">Contact Info</h3>
                <div className="info">
                  <h3>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:sereniojames363@gmail.com">
                      sereniojames363@gmail.com
                    </a>
                  </h3>
                  <h3>
                    <FontAwesomeIcon icon={faFacebook} />
                    <a
                      href="https://www.facebook.com/JamesManayagaSerenio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      James Manayaga Serenio
                    </a>
                  </h3>
                  <h3>
                    <FontAwesomeIcon icon={faPhone} /> 09264686973 - TM
                  </h3>
                  <h3>
                    <FontAwesomeIcon icon={faPhone} /> 09308887220 - Smart
                  </h3>
                  <h3>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <a
                      href="https://www.google.com/maps?q=Tankulan,Manolo+Fortich,Bukidnon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tankulan, Manolo Fortich, Bukidnon
                    </a>
                  </h3>
                </div>
              </IonCol>

              {/* Contact Form */}
              <IonCol size="12" sizeMd="6">
                <form id="contactForm" action="submit_form.php" method="post">
                  <IonInput className="box" name="name" placeholder="Name:" required></IonInput>
                  <IonInput className="box" name="email" type="email" placeholder="Email:" required></IonInput>
                  <IonInput className="box" name="project_name" placeholder="Project Name:" required></IonInput>
                  <IonTextarea className="box message" name="message" placeholder="Message:" required></IonTextarea>
                  <IonButton expand="block" className="btn" type="submit">
                    Send <FontAwesomeIcon icon={faPaperPlane} />
                  </IonButton>
                </form>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
