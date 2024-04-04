import { IonContent,  IonPage } from '@ionic/react';
import HomeContainer from '../../components/HomeContainer';
import './Home.css';
import UpdatePopUp from '../../components/UpdatePopUp';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className={"background-image"} fullscreen>
        <UpdatePopUp />
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
