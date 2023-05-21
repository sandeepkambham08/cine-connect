import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sveltekit_capacitor_skeleton.app',
  appName: 'sveltekit-capacitor-skeleton',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
