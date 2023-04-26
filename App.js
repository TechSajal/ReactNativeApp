import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'
import ImageScreen from "./src/screens/ImageScreen";
import countscreen from "./src/screens/CountScreen";
import addcolor from "./src/screens/AddColor"
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen,
    imagescreen:ImageScreen,
    countscreen:countscreen,
    addcolor:addcolor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
