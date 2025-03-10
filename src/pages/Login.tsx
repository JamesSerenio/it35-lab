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
    const [toastMessage, setToastMessage] = useState('');

    const doLogin = () => {
        // Retrieve stored credentials
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Check if the entered credentials match the stored ones
        if (!storedUsername || !storedPassword) {
            setToastMessage("No account found. Please register first.");
            setShowToast(true);
            return; // Exit the function if no account exists
        }

        if (username === storedUsername && password === storedPassword) {
            setToastMessage("Login Successful!"); // Set success message
            setShowToast(true); // Show the toast

            // Delay navigation to the app page
            setTimeout(() => {
                history.push('/it35-lab/app'); // Navigate to the app page
            }, 2000); // Delay for 2 seconds to show the toast
        } else {
            setToastMessage("Invalid username or password.");
            setShowToast(true); // Show toast if login fails
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
                    message={toastMessage}
                    duration={2000}
                />
            </IonFooter>
        </IonPage>
    );
};

export default Login;