module.exports = () => {
  return {
    // Setup auto detect based on jest config
    autoDetect: true,
    testFramework: {
      configFile: './jest.config.js',
    },

    // Sets up smart start to run tests when opening those in the IDE
    // https://wallabyjs.com/docs/intro/smart-start.html
    smartStart: [{ startMode: 'open' }],

    // Ensure wallaby is only run when saving files
    // Otherwise, the tests feel very long to run as the previous run is not cancelled when saving
    runMode: 'onsave',

    env: {
      params: {
        // set base TZ to UTC to match the CI
        env: 'TZ=UTC',
      },
    },
  };
};