import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ButtonGrid = props => {
	return (
		<View style={styles.buttonsContainer}>
			{props.buttons.map(button => {
				return (
					<TouchableHighlight
						key={button.key}
						style={styles.button}
						onPress={() => props.navigation(button.route)}
					>
						<View>
							<FontAwesomeIcon
								size={40}
								style={styles.icon}
								icon={button.icon}
							/>
							<Text style={styles.buttonText}>{button.text}</Text>
						</View>
					</TouchableHighlight>
				);
			})}
		</View>
	);
};

export default ButtonGrid;

const styles = StyleSheet.create({
	buttonsContainer: {
		flex: 3,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'space-around',
		padding: 20,
		height: '100%',
	},
	button: {
		alignContent: 'center',
		backgroundColor: 'rgba(214, 25, 25, 1)',
		paddingHorizontal: 30,
		paddingVertical: 30,
		width: 160,
		marginVertical: 10,
		borderRadius: 10,
	},
	icon: {
		color: 'white',
		textAlign: 'center',
		alignSelf: 'center',
		marginBottom: 10,
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
