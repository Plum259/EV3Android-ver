import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'evaluacion3.intento2',
  appName: 'evaluacion3-intento2',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    CapacitorHttp:{
      enabled:true
    }
  }
};

export default config;
