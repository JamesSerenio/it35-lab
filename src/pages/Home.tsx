import { 
  IonLabel, 
  IonRouterOutlet, 
  IonTabBar, 
  IonTabButton, 
  IonTabs 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Categories from './home-tabs/Categories';
import Quiz from './home-tabs/Quiz';
import Result from './home-tabs/Result';

const Home: React.FC = () => {

  const tabs = [
    {
      name: 'Categories',
      tab: 'categories',
      url: '/it35-lab/app/home/categories',
      icon: 'https://media.tenor.com/sFnwJ46F4bMAAAAm/pengu-penguin.webp',
    },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

        <Route exact path="/it35-lab/app/home/Categories" render={() => <Categories />} />
        <Route exact path="/quiz/:category" render={() => <Quiz />} />
        <Route exact path="/result/:score" render={() => <Result />} />

          {/* Redirect to categories tab by default */}
          <Route exact path="/it35-lab/app/home">
            <Redirect to="/it35-lab/app/home/categories" />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <img src={item.icon} alt={item.name} style={{ width: '30px', height: '30px' }} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
