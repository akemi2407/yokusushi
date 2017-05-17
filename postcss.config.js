module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#2D2626",
            colorPrimary: "#2D2626",
            colorSecondaryDark: "#2D2626",
            colorSecondary: "#2D2626",
            colorNeutralDark: "#2D2626",
            colorNeutral: "#2D2626",
            colorNeutralLight: "#FBFCFC",
            colorText: "#EFEFEF",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
