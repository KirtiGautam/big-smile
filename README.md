# Big Smile

This repository contains the frontend for the Big Smile project, built with Ionic.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)
- [Updating](#updating)
- [Testing on iOS and Android](#testing-on-ios-and-android)

## Installation

Follow these steps to set up the project locally:

1. **Install nvm**:
   ```sh
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```

2. **Install and use Node.js 20.14.0**:
   ```sh
   nvm install 20.14.0
   nvm use 20.14.0
   ```

3. **Install Ionic globally**:
   ```sh
   npm install -g @ionic/cli
   ```

4. **Install the required packages**:
   ```sh
   npm install
   ```

## Running the Application

To run the application locally:

1. **Serve the app**:
   ```sh
   ionic serve
   ```
   
2. The app will open in a browser window. For a mobile experience, change the device view in the browser's developer tools.

## Development

For development, you can use the following commands:

- **Generate a new page**:
  ```sh
  ionic generate page PageName
  ```

- **Generate a new component**:
  ```sh
  ionic generate component ComponentName
  ```

- **Generate a new service**:
  ```sh
  ionic generate service ServiceName
  ```

- **Lint the code**:
  ```sh
  npm run lint
  ```

## Testing

To run tests for your application:

- **Unit tests**:
  ```sh
  npm run test
  ```

- **End-to-end tests**:
  ```sh
  npm run e2e
  ```

## Building

To create a production build of the application:

1. **Build the project**:
   ```sh
   ionic build --prod
   ```

2. The production build will be created in the `www` directory.

## Updating

To update the project dependencies:

1. **Update npm packages**:
   ```sh
   npm update
   ```

2. **Update the Ionic CLI** (if needed):
   ```sh
   npm install -g @ionic/cli
   ```

## Testing on iOS and Android

To test the application on iOS and Android, follow these steps:

### Prerequisites

1. **Install Capacitor CLI**:
   ```sh
   npm install @capacitor/cli @capacitor/core
   ```

2. **Add the platforms**:
   ```sh
   npx cap add android
   npx cap add ios
   ```

3. **Build the project**:
   ```sh
   ionic build
   ```

4. **Sync the project**:
   ```sh
   npx cap sync
   ```

### Testing on Android

1. **Open the project in Android Studio**:
   ```sh
   npx cap open android
   ```

2. **Run the app**:
   - In Android Studio, click on the 'Run' button or select `Run > Run 'app'`.
   - Ensure that you have an Android device connected or an emulator running.

### Testing on iOS

1. **Open the project in Xcode**:
   ```sh
   npx cap open ios
   ```

2. **Run the app**:
   - In Xcode, select your target device from the top device toolbar.
   - Click on the 'Run' button or select `Product > Run`.
   - Ensure that you have an iOS device connected or use an iOS simulator.
