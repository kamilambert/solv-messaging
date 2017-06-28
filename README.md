# Solv Messaging

This app allows users to share Solv via text with their friends using native iOS Messages.

## Initial Setup

1. `$ git clone https://github.com/kamilambert/solv-messaging.git`
2. `$ cd solv-messaging`
3. `$ npm install`
4. `$ react-native run-ios`

After waiting a minute (or two) for bundling to finish, Xcode iOS simulator should open. If the solv app does not open automatically, swipe left on home screen to the second pane and double-click on the solv app to open.

## Notes on Simulator View

1. This app uses `react-native-communications` to open iOS Messages app to send the text. Small caveat is that full functionality is only available on actual devices, and does not fully render in the iOS simulator. See Usage section in [react-native-communications documentation](https://www.npmjs.com/package/react-native-communications) for details.

2. This app presents the number-pad for phone number input. This is also only viewable on actual devices. To enter phone number, click in input field and enter numbers then click 'Send Text'.

	Note - numbers less than 10 characters long will get a warning box to complete the phone number.

## Full Functionality on Device

![solv demo](http://i.imgur.com/3KphfEn.gif)
