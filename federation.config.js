const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: "ang-federation-remote",

  exposes: {
    // './Component': './src/app/app.component.ts',
    // './EditLocation': './src/app/pages/edit-location-page/edit-location-page.component.ts',
    "./Button": "./src/app/components/shared/button/button.component.ts",
    "./Provinsi": "./src/app/components/feature/provinsi/provinsi.component.ts",
    "./Kota": "./src/app/components/feature/kota/kota.component.ts",
    "./Kecamatan": "./src/app/components/feature/kecamatan/kecamatan.component.ts",
    "./Profile": "./src/app/components/page/profile/profile.component.ts"
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
