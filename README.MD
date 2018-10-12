### How to Use this

Windows:
If you do not have choco, install it here. https://chocolatey.org/
choco install -y nodejs.install python2 jdk8
npm install -g react-native-cli

After installing, please following this: 
https://facebook.github.io/react-native/docs/getting-started.html

Before running the app, please use ubuntu or bash and run yarn android-linux (For compiling of Android);

When you can run a android emulator run the following:
cd into the MeeOpp file, then run
react-native run-android

If things failed, please do the following:

react-native start --reset-cache

Note:
The test, i am unable to figure why it would failed the newest javascript syntax. I am still figuring out the answer.