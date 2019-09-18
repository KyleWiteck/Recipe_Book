import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './Header';
import ButtonGrid from './ButtonGrid';
import {
	faSearch,
	faListAlt,
	faShoppingBasket,
	faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
	static navigationOptions = {
		header: null,
	};
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<View style={styles.buttonGridArea}>
					<ImageBackground
						source={require('../imgs/bell-pepper.jpg')}
						style={{ flex: 1 }}
					>
						<View style={styles.buttonGridArea}>
							<Text style={styles.buttonGridAreaText}>
								This is a place a message will go
							</Text>
							<ButtonGrid
								buttons={buttons}
								navigation={route => this.props.navigation.navigate(route)}
							/>
						</View>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

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
		route: 'ExplorePage',
	},
	{
		key: 1,
		icon: faLayerGroup,
		text: 'Categories',
		route: 'ExplorePage',
	},
	{
		key: 2,
		icon: faListAlt,
		text: 'My Recipes',
		route: 'ExplorePage',
	},
	{
		key: 3,
		icon: faShoppingBasket,
		text: 'Shopping List',
		route: 'ExplorePage',
	},
];
