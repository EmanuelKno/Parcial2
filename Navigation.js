import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import Home from './src/screens/Home'
import Stack from './src/screens/Stack'

const TabNav = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScren(){
    return(
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={Home}/>
            <HomeStack.Screen name="Stack" component={Stack}/>
        </HomeStack.Navigator>
    )
}
function RoutingTabs() {
    return(
        <TabNav.Navigator 
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor:'blue',   
            }}
        >
            <TabNav.Screen 
                name="Home" 
                component={HomeStackScren}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false
                }}
            />
        </TabNav.Navigator>
    )
}
export default function Navigation() {
  return (
    <NavigationContainer>
        <RoutingTabs/>
    </NavigationContainer>
  )
}