// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyDZRH2sXgm0Zf7QbWSCNQnnCfKNT91HY98',
      authDomain: 'ecommerce-97a51.firebaseapp.com',
      projectId: 'ecommerce-97a51',
      storageBucket: 'ecommerce-97a51.appspot.com',
      messagingSenderId: '209803497870',
      appId: '1:209803497870:web:def33ab8a81c8145f894df',
    },
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
