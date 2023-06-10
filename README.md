## Prerequisites

- Please Visit https://reactnative.dev/docs/environment-setup for environmet setup

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/mohamed3asem/fixedSolutionTask.git

# Navigate to clonned folder and Install dependencies
cd fixedSolutionTask && yarn install

# Install Pods
cd ios && bundle install && pod install
```

#### 2. Open RNS in your iOS simulator

Run this command to start the development server and to start your app on iOS simulator:
```
yarn run ios
```

Or, if you prefer Android:
```
yarn run android
```

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `routes`: Folder to store the navigators.  
  - `hooks`: Folder contains all custom hooks. 
  - `utils`: Folder contains all helper functions & utils.  
  - `screens`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.ts`
      - `Screen.styles.ts`
      - `Screen.test.ts`
  - `store`: Folder to put all redux middlewares and the store.
    - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
    - `selectors`: Folder to store your selectors for each reducer.
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `types`   - `routes`: Folder to store the types related to redux.
  - `models` : Folder to contains all types related to apis
  - `App.ts`: Main component that starts your whole app.
  - `index.ts`: Entry point of your application as per React-Native standards.

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Styleguide

For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).

