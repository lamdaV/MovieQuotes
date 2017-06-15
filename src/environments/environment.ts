// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA2ZyD5Q_ABbk_xbXAWIiCk4uiYx5S-sEQ',
    authDomain: 'lamd-movie-quotes.firebaseapp.com',
    databaseURL: 'https://lamd-movie-quotes.firebaseio.com',
    projectId: 'lamd-movie-quotes',
    storageBucket: 'lamd-movie-quotes.appspot.com',
    messagingSenderId: '80775520284'
  }
};
