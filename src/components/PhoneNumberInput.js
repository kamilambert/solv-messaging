import React, { Component } from 'react'
import { TextInput, Text, View, Image } from 'react-native'
import PhoneInput from 'react-native-phone-input'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

export default class PhoneNumberInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'Enter Phone Number'
		}
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Text>Hey there!</Text>
				</CardSection>

				<CardSection>
					<Button />
				</CardSection>
			</Card>

		)
	}
}

const styles = {
	viewStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: '#FFF'
	}
}
