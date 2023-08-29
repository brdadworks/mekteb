import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { Motion } from '@capacitor/motion';

const QiblaAngle = 39.8; // Qibla direction angle in degrees clockwise from North

const Pusula: React.FC = () => {
    const [compassHeading, setCompassHeading] = useState<number>(0);
    const [qiblaDirection, setQiblaDirection] = useState<number>(0);

    useEffect(() => {
        const watchCompass = Motion.addListener('orientation', (eventData) => {
            const newHeading = eventData.alpha || 0;
            const relativeAngle = (QiblaAngle - newHeading + 360) % 360;
            setCompassHeading(newHeading);
            setQiblaDirection(relativeAngle);
        });

        return () => {
            watchCompass.remove();
        };
    }, []);

    return (
        <div className="ion-padding">
            <div className="compass-container">
                <div
                    className="compass-image"
                    style={{
                        backgroundImage: `url('/compass2.png')`,
                        transform: `rotate(${compassHeading}deg)`,
                    }}
                >
                    <img
                        src="/kaaba2.png"
                        alt="Qibla"
                        className="qibla-image"
                        style={{
                            transform: `rotate(${qiblaDirection}deg)`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Pusula;
