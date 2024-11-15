import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mektebiirfan.app",
  appName: "mekteb-i irfan",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  android: {
    minSdkVersion: 21,
    targetSdkVersion: 34,
  },
};

export default config;
