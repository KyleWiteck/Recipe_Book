import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerTitle}>Recipe Book</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#d61919',
		width: '100%',
		height: 90,
		paddingTop: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		color: 'white',
		fontSize: 18,
	},
});
