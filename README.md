# Wowza Flowplayer React Native SDK

The Wowza Flowplayer React Native SDK allows you to seamlessly integrate the Wowza Flowplayer into native Android and iOS applications that leverage the React Native framework for development.

The SDK provides an easy-to-use API that wraps our native [Android](https://github.com/flowplayer/flowplayer-android-sdk-demo) and [Apple SDKs](https://github.com/flowplayer/apple-sdk-releases) in a JavaScript layer that's exposed via Node Package Manager (npm). This enables you to develop cross-platform native mobile applications using only JavaScript. Ultimately, you can take advantage of the features that ship with our native Android and Apple SDKs as you enhance the video playback experience for your users.

See our official [Wowza Flowplayer React Native SDK](https://developer.wowza.com/docs/wowza-flowplayer/react-native-sdk/) documentation for more.

## Supported platforms

The Wowza Flowplayer React Native SDK currently supports these platforms:

* Android 4.4+ (API level 19+)
* iOS 14.0+ and iPadOS 14.0+

There's no current support for TV platforms, such as tvOS and Android TV.

## Supported features

For a list of supported features, check our [official documentation](https://developer.wowza.com/docs/wowza-flowplayer/react-native-sdk/about-the-react-native-sdk/#supported-features).

## Before you start

Before you start with the latest version of the Wowza Flowplayer React Native SDK, check the requirements in the following tables.

### For iOS

| Requirement | Version information |
| :----- | :----- |
| **Supported platforms** | OS 14.0+, iPadOS 14.0+ |
| **Minimum system requirements** | Swift 5.7+, macOS 13.0+ |
| **Software requirements** | [Xcode 15](https://developer.apple.com/download/all/?q=xcode) and later |

For more, see [About the Apple SDK > Before you start](https://developer.wowza.com/docs/wowza-flowplayer/apple-sdk/about-the-apple-sdk/#before-you-start).

### For Android

| Requirement | Version information |
| :----- | :----- |
| **Supported platforms** | Android 4.4+ (API level 19+) |
| **Minimum system requirements** | Java 8+, Kotlin 1.9 |
| **Software requirements** | [Android Studio Giraffe](https://developer.android.com/studio) |

For more, see [About the Android SDK > Before you start](https://developer.wowza.com/docs/wowza-flowplayer/android-sdk/about-the-android-sdk/#before-you-start).

## Get started

Before you can get started with the SDK, you must set up your development environment, add the SDK to your project, and configure your token to enable player content.

### Set up your environment

Working with our React Native SDK library requires:

* At least React Native version `0.72.x` and React version `v18.2.x.`
* Node `20` or later for all target operating systems.
* The Java Development Kit (JDK) and at least Java `8` for the Android installation.
* CocoaPods version `1.14` or later for the iOS installation.

If you need some help setting up your environment, we recommend this [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup?guide=native). Once you select your **Development OS** and **Target OS** in the the React Native CLI Quickstart, you can see the required dependencies to work with the Wowza Flowplayer React Native SDK.

## Setup Dependencies

1. Install `package.json` dependencies

```bash
npm install
# or
yarn install
```

2. Install iOS CocoaPods

```bash
cd ios
bundle install # Install Bundler
bundle exec pod install # Install iOS Depenendecies
```

3. Continue to set an access token.

### Set an access token

To allow the player to display content in your iOS or Android application, you have to set an access token. For platform-specific instructions, see [Set an access token](http://developer.wowza.com/docs/wowza-flowplayer/react-native-sdk/get-started/#set-an-access-token).

### Run the demo application

```bash
npm start
# or
yarn start
```

### Use the SDK

To learn how to import and use the player component, see the following pages in our official documentation:

* [Set up the player with the React Native SDK](http://developer.wowza.com/docs/wowza-flowplayer/react-native-sdk/set-up-the-player/)
* [Listen for events with the React Native SDK](http://developer.wowza.com/docs/wowza-flowplayer/react-native-sdk/listen-for-events/)
* [Manage the player with the React Native SDK](http://developer.wowza.com/docs/wowza-flowplayer/react-native-sdk/manage-the-player/)

## Support

For support, please open an issue in our GitHub repository or contact us directly at <support@flowplayer.com>.

## Contributing

We welcome contributions from the community! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.
