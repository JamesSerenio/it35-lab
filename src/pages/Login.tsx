import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose,
}) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Notification"
    message={message}
    buttons={['OK']}
  />
);

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
       className="flex justify-center items-center h-full bg-transparent px-4">
        
      <div className="w-full max-w-md bg-transparent p-6 rounded-2xl shadow-none mt-12 sm:mt-16 sm:mx-auto animate-border">
  <div className="flex flex-col items-center mb-6">
    <img
      src="https://cdn-icons-gif.flaticon.com/15713/15713229.gif"
      alt="Login Icon"
      className="w-32 h-32 mb-4 rounded-full"
    />
    <h1 className="text-3xl font-bold text-white">USER LOGIN</h1>
  </div>

  <IonInput
    label="Email"
    labelPlacement="floating"
    fill="outline"
    type="email"
    placeholder="Enter Email"
    value={email}
    onIonChange={(e) => setEmail(e.detail.value!)}
    className="mb-4 bg-transparent text-white placeholder-gray-400 rounded"
  />
  <IonInput
    fill="outline"
    type="password"
    placeholder="Password"
    value={password}
    onIonChange={(e) => setPassword(e.detail.value!)}
    className="mb-6 bg-transparent text-white placeholder-gray-400 rounded "
  >
    <IonInputPasswordToggle slot="end" />
  </IonInput>

  <IonButton
    onClick={doLogin}
    expand="block"
    fill="clear"
    className="mb-4 border-2 border-white text-white rounded-full"
  >
    Login
  </IonButton>

  <IonButton
    routerLink="/it35-lab/register"
    expand="block"
    fill="clear"
    className="border-2 border-white text-white rounded-full"
  >
    Don't have an account? Register here
  </IonButton>
</div>


        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
