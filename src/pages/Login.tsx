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
import { useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
    const navigation = useIonRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);

    const doLogin = () => {
        // Add your login logic here
        navigation.push('/it35-lab/app', 'forward', 'replace');
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
                <IonButton onClick={() => navigation.push('/signup')} expand="full" color="secondary">Register</IonButton>
            </IonContent>
            <IonFooter>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Account created successfully!"
                    duration={2000}
                />
            </IonFooter>
        </IonPage>
    );
};

export default Login;