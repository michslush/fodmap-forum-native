import { createStackNavigator, createAppContainer } from 'react-navigation';

import MyPlacesScreen from './src/screens/MyPlacesScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    MyPlaces: MyPlacesScreen,
    Search: SearchScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Search',
  }
);

export default createAppContainer(AppNavigator);
