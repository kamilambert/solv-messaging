import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'
import PhoneNumberInput from './src/components/PhoneNumberInput'
import { Header } from './src/components/common'

export default class App extends Component {
	render() {
		return (
			<View>
				<Header headerText={'Solv.'} />
				<Text style={styles.textStyle}>
					Tell your friends about Solv.
				</Text>
				<PhoneNumberInput />
			</View>
		)
	}
}

const styles = {
	textStyle: {
		paddingTop: 20,
		paddingBottom: 10,
		paddingLeft: 15,
		fontSize: 20
	}
}

AppRegistry.registerComponent('solv', () => App)
