import { 
    IonAlert,
    IonButton,
    IonButtons,
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonMenu, 
    IonMenuButton, 
    IonMenuToggle, 
    IonPage, 
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToast, 
    IonToolbar, 
    useIonRouter
  } from '@ionic/react';
  import { homeOutline, logOutOutline, rocketOutline, settingsOutline } from 'ionicons/icons';
  import { Redirect, Route } from 'react-router';
  import Home from './Home';
  import About from './Leaderboard';
  import Details from './Details';
  import { supabase } from '../utils/supabaseClient';
  import { useState } from 'react';
  import EditProfilePage from './EditProfilePage';
  
  const Menu: React.FC = () => {
    const navigation = useIonRouter();
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
  
    const path = [
      { name: 'Home', url: '/it35-lab/app/home', icon: 'https://media.tenor.com/-oHw-ghEEQgAAAAm/finaly-mood.webp' },
      { name: 'Leaderboard', url: '/it35-lab/app/leaderboard', icon: 'https://media.tenor.com/QP_YoQt9DZwAAAAM/tweek-smash-bros-tweek.gif' },
      { name: 'Profile', url: '/it35-lab/app/profile', icon: 'https://media.tenor.com/a5a4uCOYfygAAAAM/profile-picture-rock.gif' },
    ];
  
    const handleLogout = async () => {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        setShowToast(true);
        setTimeout(() => {
          navigation.push('/it35-lab', 'back', 'replace');
        }, 300);
      } else {
        setErrorMessage(error.message);
        setShowAlert(true);
      }
    };
  
    return (
      <IonPage>
        <IonSplitPane contentId="main">
          <IonMenu contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              {path.map((item, index) => (
                <IonMenuToggle key={index}>
                  <IonItem routerLink={item.url} routerDirection="forward">
                    {typeof item.icon === 'string' && item.icon.startsWith('http') ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        slot="start"
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          marginRight: '10px',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <IonIcon icon={item.icon} slot="start" />
                    )}
                    {item.name}
                  </IonItem>
                </IonMenuToggle>
              ))}
  
              {/* Logout Button */}
              <IonButton expand="full" onClick={handleLogout}>
                <IonIcon icon={logOutOutline} slot="start" />
                Logout
              </IonButton>
            </IonContent>
          </IonMenu>
  
          <IonRouterOutlet id="main">
            <Route exact path="/it35-lab/app/home" component={Home} />
            <Route exact path="/it35-lab/app/home/details" component={Details} />
            <Route exact path="/it35-lab/app/leaderboard" component={About} />
            <Route exact path="/it35-lab/app/profile" component={EditProfilePage} />
            <Route exact path="/it35-lab/app">
              <Redirect to="/it35-lab/app/home" />
            </Route>
          </IonRouterOutlet>
  
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Logout Failed"
            message={errorMessage}
            buttons={['OK']}
          />
  
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Logout Successful"
            duration={1500}
            position="top"
            color="primary"
          />
        </IonSplitPane>
      </IonPage>
    );
  };
  
  export default Menu;
  