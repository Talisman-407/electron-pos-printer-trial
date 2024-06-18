const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
    icon :path.resolve(__dirname, 'assets/Frame 2608228'),
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://raw.githubusercontent.com/Talisman-407/electron-pos-printer-trial/main/assets/Frame%202608228.ico', // URL to your .ico file on GitHub
        setupIcon: path.resolve(__dirname, 'assets/Frame 2608228.ico'),
        authors: 'Shoopy Inc',
        description: 'A simple POS printing utility',
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: path.resolve(__dirname, 'assets/pos%20printer%20background.png'),
        icon: path.resolve(__dirname, 'assets/icon-mac.icns'),
        overwrite: true,
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Talisman-407',
          name: 'electron-pos-printer-trial',
        },
        prerelease: true, // Set to true for prerelease versions
        draft: false, // Set to true to create a draft release
        tag: process.env.GITHUB_REF?.replace('refs/tags/', ''), // Get the current tag from the environment variable
      },
    },
  ],
};
