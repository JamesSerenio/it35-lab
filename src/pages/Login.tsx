import React, { useState } from 'react';
import { 
    IonButton,
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonToast,
    IonFooter
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Login: React.FC = () => {
    const history = useHistory(); // Initialize useHistory
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);

    const doLogin = () => {
        // Add your login logic here
        if (username && password) {
            // Navigate to the app page (replace with your actual app route)
            history.push('/it35-lab/app'); // Use history.push for navigation
        } else {
            setShowToast(true); // Show toast if login fails (for example, empty fields)
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
                    </IonItem>
                </IonList>
                <IonButton onClick={doLogin} expand="full">Login</IonButton>
                <IonButton onClick={() => history.push('/signup')} expand="full" color="secondary">Register</IonButton> {/* Use history.push for navigation */}
            </IonContent>
            <IonFooter>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Please enter your username and password."
                    duration={2000}
                />
            </IonFooter>
        </IonPage>
    );
};

export default Login;