# React Native Template

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Usage

#### Use Template button

Click the "Use this template" button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.

### Option 2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `routes`: Folder to store the navigators.  
  - `hooks`: Folder contains all custom hooks. 
  - `utils`: Folder contains all helper functions & utils.  
  - `views`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.js`
      - `Screen.styles.js`
      - `Screen.test.js`
  - `store`: Folder to put all redux middlewares and the store.
    - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
    - `selectors`: Folder to store your selectors for each reducer.
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `types`   - `routes`: Folder to store the types related to redux.
  - `models` : Folder to contains all types related to apis
  - `test-utils`: Folder to store tests-related utilities and components.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`


DEV: `yarn ios` or `yarn android`

STG: `yarn ios:staging` or `yarn android:staging`

PROD: `yarn ios:prod` o `yarn android:prod`

Also, you can use npm following the same rule as before: `npm run ios:staging`

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)


#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu
  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.
- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu
  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

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

