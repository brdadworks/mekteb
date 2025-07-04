import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mektebiirfan.app.v2",
  appName: "mekteb-i irfan",
  webDir: "dist",
  server: {
    cleartext: true,
    iosScheme: "capacitor",
    androidScheme: "capacitor",
  },
  android: {
    minSdkVersion: 21,
    targetSdkVersion: 34,
  },
  cordova: {
    preferences: {
      AutoUpdate: "none",
    },
  },
};

export default config;
