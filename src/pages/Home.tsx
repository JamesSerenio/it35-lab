import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonLabel, 
      IonMenuButton, 
      IonPage, 
      IonRouterOutlet, 
      IonTabBar, 
      IonTabButton, 
      IonTabs, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { briefcase, documentOutline, person, school, } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';

import Portfolio from './home-tabs/Portfolio';
import About_me from './home-tabs/About_me';
import My_Education from './home-tabs/My_Education';
import My_Portfolio from './home-tabs/My_Portfolio';
  
  const Home: React.FC = () => {

    const tabs = [
      {name:'Portfolio', tab:'Portfolio',url: '/it35-lab/app/home/Portfolio', icon: documentOutline },
      {name:'About Me', tab:'about_me', url: '/it35-lab/app/home/about_me', icon: person},
      {name:'My Education',tab:'My_Education', url: '/it35-lab/app/home/My_Education', icon: school},
      {name:'My Portfolio',tab:'My_Portfolio', url: '/it35-lab/app/home/My_Portfolio', icon: briefcase},
    ]
    
    return (
      <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="bottom">

            {tabs.map((item, index) => (
              <IonTabButton key={index} tab={item.tab} href={item.url}>
                <IonIcon icon={item.icon} />
                <IonLabel>{item.name}</IonLabel>
              </IonTabButton>
            ))}
            
          </IonTabBar>
        <IonRouterOutlet>

          <Route exact path="/it35-lab/app/home/Portfolio" render={Portfolio} />
          <Route exact path="/it35-lab/app/home/about_me" render={About_me} />
          <Route exact path="/it35-lab/app/home/My_Education" render={My_Education} />
          <Route exact path="/it35-lab/app/home/My_Portfolio" render={My_Portfolio} />
          <Route exact path="/it35-lab/app/home">
            <Redirect to="/it35-lab/app/home/feed" />
          </Route>
        </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    );
  };
  
  export default Home;  