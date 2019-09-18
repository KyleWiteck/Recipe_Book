import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import ButtonGrid from './components/ButtonGrid';
import {
	faSearch,
	faListAlt,
	faShoppingBasket,
	faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

export default index = () => {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.buttonGridArea}>
				<ImageBackground
					source={require('./imgs/bell-pepper.jpg')}
					style={{ flex: 1 }}
				>
					<View style={styles.buttonGridArea}>
						<Text style={styles.buttonGridAreaText}>
							This is a place a message will go
						</Text>
						<ButtonGrid buttons={buttons} />
					</View>
				</ImageBackground>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	buttonGridArea: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
	buttonGridAreaText: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
		fontSize: 30,
		paddingTop: 40,
		paddingBottom: 20,
		paddingHorizontal: 10,
		alignContent: 'center',
	},
});

const buttons = [
	{
		key: 0,
		icon: faSearch,
		text: 'Explore Recipes',
	},
	{
		key: 1,
		icon: faLayerGroup,
		text: 'Categories',
	},
	{
		key: 2,
		icon: faListAlt,
		text: 'My Recipes',
	},
	{
		key: 3,
		icon: faShoppingBasket,
		text: 'Shopping List',
	},
];

const buttonPress = index => {
	activeButton = index;
};
