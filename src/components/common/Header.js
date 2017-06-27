import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
	const { textStyle, viewStyle } = styles

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		backgroundColor: '#FF0E88',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 25,
		paddingBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 25,
		color: '#FFF'
	}
}

export { Header }
