import { IonContent,  IonPage } from '@ionic/react';
import HomeContainer from '../../components/HomeContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className={"background-image"} fullscreen>
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
