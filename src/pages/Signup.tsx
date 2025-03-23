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
    IonFooter,
    IonModal,
    IonText
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const Signup: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleRegister = async () => {
        if (!email.includes('@')) {
            setToastMessage("Invalid email format!");
            setShowToast(true);
            return;
        }

        if (password !== confirmPassword) {
            setToastMessage("Passwords do not match!");
            setShowToast(true);
            return;
        }

        const { error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            setToastMessage(error.message);
        } else {
            setToastMessage("Account created successfully! Check your email to verify your account.");
            setShowModal(true);
        }
        setShowToast(true);
    };

    const handleConfirm = () => {
        setShowModal(false);
        history.push('/it35-lab');
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
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput 
                            type="email" 
                            value={email} 
                            onIonChange={e => setEmail(e.detail.value!)} 
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput 
                            type="password" 
                            value={password} 
                            onIonChange={e => setPassword(e.detail.value!)} 
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput 
                            type="password" 
                            value={confirmPassword} 
                            onIonChange={e => setConfirmPassword(e.detail.value!)} 
                        />
                    </IonItem>
                </IonList>
                <IonButton onClick={handleRegister} expand="full">Create Account</IonButton>
                <IonButton onClick={() => history.push('/it35-lab')} expand="full" color="light">Back to Login</IonButton>
            </IonContent>
            <IonFooter>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                />
            </IonFooter>

            <IonModal isOpen={showModal}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Confirm Registration</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonText>
                        <h2>Registration Successful!</h2>
                        <p>Please check your email to verify your account before logging in.</p>
                    </IonText>
                </IonContent>
                <IonFooter>
                    <IonButton expand="full" onClick={handleConfirm}>Go to Login</IonButton>
                </IonFooter>
            </IonModal>
        </IonPage>
    );
};

export default Signup;
