import React, { Component } from 'react'
import { Alert } from 'react-native'
import Communications from 'react-native-communications'
import { Button, Card, CardSection, Input } from './common'

export default class PhoneNumberInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			phone: ''
		}
	}

	onTextPress = () => {
		const { phone } = this.state
		phone.length === 10 ? Communications.text(phone, 'I just booked an appointment using Solv and it was awesome. You should check them out! http://www.solvhealth.com') : Alert.alert('Please Complete Number', 'Phone number must be 10 digits')
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder='555-555-5555'
						label='Phone'
						value={this.state.phone}
						onChangeText={phone => this.setState({ phone })}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						Send Text
					</Button>
				</CardSection>
			</Card>
		)
	}
}
