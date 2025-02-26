import "../../styles/AboutMe.css";
import { 
    IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const AboutMe: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>About Me</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <section className="about fade-in" id="About">
                    <div className="row fade-in">
                        <div className="info fade-in">
                            <h3><span> Name:</span> James M. Serenio </h3>
                            <h3><span> Age: </span> 22 </h3>
                            <h3><span> Post:</span> Front End Developer, Web Designer, Programmer, Web Developer </h3>
                            <h3><span> Language: </span> English </h3>
                        </div>
                        
                        <div className="counter fade-in">
                            <div className="box fade-in">
                                <span>5+</span>
                                <h3>Project Completed</h3>
                            </div>

                            <div className="box fade-in">
                                <span>2+</span>
                                <h3>Years Of Studying</h3>
                            </div>

                            <div className="box fade-in">
                                <span>5+</span>
                                <h3>Certificate Awards</h3>
                            </div>

                            <div className="box fade-in">
                                <span>5+</span>
                                <h3>Satisfied Customers</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </IonContent>
        </IonPage>
    );
};

export default AboutMe;
