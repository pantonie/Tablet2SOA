### Prerequisites for React Native application (you should have node.js installed):
1. Install Android Studio with Adroid SDK and Android Virtual Device
2. Install react-native cli (npm install -g react-native-cli)
3. Create new project (react-native init projectNameHere)
4. If you want to create some non default virtual device:
4.1 Download emulator skin (i.e. for sumsong you can find skin here http://developer.samsung.com/galaxy/emulator-skin/tab)
4.2 Copy skin to c:\Program Files\Android\Android Studio\plugins\android\lib\device-art-resources\ and use it in the next step
4.3 In Android studion open Tools -> AVD Manager -> Create New Virtual Device and create new hardware with options needed.
4.4 Then install version of android you need and finish creation
4.5 Now you can start emulator with your non default device
(video with details https://www.youtube.com/watch?v=sSc9D4rrOxw)
5. Install JAVA JDK if you don't have yet (you need to have JAVA_HOME system variable)
6. Check that you have ANDROID_HOME system variable which points to "c:\Program Files (x86)\Android\android-sdk\"
(ANDROID_HOME="c:\Program Files (x86)\Android\android-sdk\")
 Add also tools and platform-tools to PATH
(set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools)

Site to generate icons:
(http://fa2png.io/) size is 256px. 2S colors - #cf022b/red, #ef7d00/orange.

To start app on emulator start emulator in AVD (Android studio -> Tools -> AVD) then run "npm run android" from command line

### Debugging
+ react-devtools
+ react-native log-android (run from working directory to be able to use console.log)

### Tips and tricks

Since Android AVD is in fact another machine to be able to send requests to localhost you need to use 10.0.2.2 address (AVD ip address) instead of localhost or 127.0.0.1;

### Related repos
+ [Calendar API](https://github.com/pantonie/2S_lab_calendar_api)
+ [Music player](https://github.com/2s-lab/PlayerMiddleware)
+ [Trello API](https://github.com/pantonie/2S_lab_trello_api)