import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import ExplorePage from './components/explore_page/ExplorePage';

const MainNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		ExplorePage: { screen: ExplorePage },
	},
	{ initialRouteName: 'Home' }
);

const AppContainer = createAppContainer(MainNavigator);

export default App = () => {
	return <AppContainer />;
};
