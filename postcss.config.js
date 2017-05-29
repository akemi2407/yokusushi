module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorDark: "#201C1C",
            colorPrimaryDark: "#2D2626",
            colorPrimary: "#2D2626",
            colorSecondaryDark: "#2D2626",
            colorSecondary: "#2D2626",
            colorNeutralDark: "#2D2626",
            colorNeutral: "#947E7E",
            colorNeutralLight: "#FBFCFC",
            colorText: "#EFEFEF",
            colorHighlight: "#A70000",
            colorBright: "#FF0000"
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
