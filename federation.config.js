const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: "ang-federation-remote",

  exposes: {
    // './Component': './src/app/app.component.ts',
    // './EditLocation': './src/app/pages/edit-location-page/edit-location-page.component.ts',
    "./Button": "./src/app/components/shared/button/button.component.ts",
    "./Kecamatan": "./src/app/components/feature/kecamatan/kecamatan.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
