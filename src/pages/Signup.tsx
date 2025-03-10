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
import { useHistory } from 'react-router-dom';

const Signup: React.FC = () => {
    const history = useHistory();
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleRegister = () => {
        if (regPassword === confirmPassword) {
            // Store the user credentials in local storage (or any other method)
            localStorage.setItem('username', regUsername);
            localStorage.setItem('password', regPassword);
            setShowToast(true);
            history.push('/it35-lab'); // Redirect to login after successful registration
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput value={regUsername} onIonChange={e => setRegUsername(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" value={regPassword} onIonChange={e => setRegPassword(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
                    </IonItem>
                </IonList>
                <IonButton onClick={handleRegister} expand="full">Create Account</IonButton>
                <IonButton onClick={() => history.push('/it35-lab')} expand="full" color="light">Back to Login</IonButton>
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

export default Signup;