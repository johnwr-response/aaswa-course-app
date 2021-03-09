export const environment = {
  production: true,
  name: 'prod',
  firebase: {
    config: {
      apiKey: 'YOUR apiKey HERE',
      authDomain: 'YOUR authDomain HERE',
      projectId: 'YOUR projectId HERE',
      storageBucket: 'YOUR storageBucket HERE',
      messagingSenderId: 'YOUR messagingSenderId HERE',
      appId: 'YOUR appId HERE',
    },
    actionCodeSettings: {
      url: 'http://localhost:5200/demo',
      handleCodeInApp: true
    }
  }
};


