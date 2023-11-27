import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { colors } from "../themes";
import {
	SimpleLineIcons,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
	const menuIcons = (route, focused) => {
		let icon;

		if (route.name === "Home") {
			icon = focused ? (
				<MaterialCommunityIcons
					name="home-outline"
					size={32}
					color={colors.secondary}
				/>
			) : (
				<MaterialCommunityIcons
					name="home-outline"
					size={28}
					color={colors.gray}
				/>
			);
		}
		if (route.name === "cart") {
			icon = focused ? (
				<SimpleLineIcons
					name="handbag"
					size={28}
					color={colors.secondary}
				/>
			) : (
				<SimpleLineIcons name="handbag" size={24} color={colors.gray} />
			);
		}
		if (route.name === "Favourite") {
			icon = focused ? (
				<MaterialIcons
					name="favorite-border"
					size={28}
					color={colors.secondary}
				/>
			) : (
				<MaterialIcons
					name="favorite-border"
					size={24}
					color={colors.gray}
				/>
			);
		}

		return icon;
	};

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				headerShown: false,
				tabBarIcon: ({ focused }) => menuIcons(route, focused),
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="cart" component={Home} />
			<Tab.Screen name="Favourite" component={Home} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigation;
