import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const dostarted = () => {
    navigation.push('/', 'forward', 'replace'); // Navigate to Home
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Get Started</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton onClick={dostarted} expand="full">
          Get Started
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
