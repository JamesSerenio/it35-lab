import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Page imports */
import Get_started from './pages/Get_started';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* IT35 Welcome Page */}
        <Route exact path="/it35-lab" component={Get_started} />

        {/* Self-Assessment Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/quiz/:category" component={Quiz} />
        <Route path="/result/:score" component={Result} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
