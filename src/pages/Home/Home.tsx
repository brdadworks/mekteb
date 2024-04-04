import { IonButton, IonContent, IonPage } from '@ionic/react';
import HomeContainer from '../../components/HomeContainer';
import './Home.css';
import UpdatePopUp from '../../components/UpdatePopUp';
import { useEffect } from 'react';
import { getStorageData, notificationHandler, testNotificationEveryMinute, testSendNotification } from '../../../utils/functions';

const Home: React.FC = () => {
  useEffect(() => {
    const getNotifications = async () => {
      const notifications = await getStorageData("notifications");
      if (notifications) {
        console.log("notifications", notifications);
        
        notificationHandler(notifications);
      }
    }
    getNotifications();
  }, []);
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
