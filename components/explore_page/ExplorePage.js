import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ExplorePage extends React.Component {
	static navigationOptions = {
		header: null,
	};
	render() {
		return (
			<View>
				<Text>This is the Explore Page</Text>
			</View>
		);
	}
}

export default ExplorePage;
