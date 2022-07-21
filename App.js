import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../Education/src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import BiologyScreen from './src/screens/BiologyScreen';
import ChemicalScreen from './src/screens/ChemicalScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import MathScreen from './src/screens/MathScreen';
import PyhsicsScreen from './src/screens/PyhsicsScreen';
import contentDetail from './src/screens/contentDetail';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Biology: BiologyScreen,
    Chemical: ChemicalScreen,
    History: HistoryScreen,
    Math: MathScreen,
    Physics: PyhsicsScreen,
    Content: contentDetail,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Education Demo',
    },
  },
);

export default createAppContainer(navigator);
