import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import WatchDetails from "./screens/WatchDetails";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="onboarding"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="onboarding" component={Onboarding} />
				<Stack.Screen name="home" component={BottomTabNavigation} />
				<Stack.Screen name="watchDetails" component={WatchDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
