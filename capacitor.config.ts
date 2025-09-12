// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mektebiirfan.app.v2',
  appName: 'mekteb-i irfan',
  webDir: 'dist',
  server: {
    cleartext: true,
    iosScheme: 'capacitor',
    androidScheme: 'capacitor',
  },
  cordova: {
    preferences: {
      AutoUpdate: 'none',
    },
  },
  plugins: {
    LocalNotifications: {
      // ANDROID: varsayılan kanalın sesi (dosya: android/app/src/main/res/raw/azan.wav)
      sound: 'azan.wav',
    },
  },
};

export default config;
