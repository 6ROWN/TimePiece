import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	Platform,
} from "react-native";
import React from "react";
import { colors } from "../themes";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WatchItem = ({ item }) => {
	const navigation = useNavigation();

	return (
		<Pressable
			style={styles.container}
			onPress={() => navigation.navigate("watchDetails", item)}
		>
			<View style={styles.imageContainer}>
				<Image
					source={item?.image}
					resizeMode="contain"
					style={styles.image}
				/>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.title}>{item?.title}</Text>
				<View style={styles.rowContainer}>
					<Text style={styles.price}>${item?.price}</Text>
					<Feather name="heart" size={18} color={colors.primary} />
				</View>
			</View>
		</Pressable>
	);
};

export default WatchItem;

const styles = StyleSheet.create({
	container: {
		width: "45%",
		backgroundColor: colors.light,
		borderRadius: 10,
		marginHorizontal: 10,
		marginBottom: 20,
		padding: 10,

		...Platform.select({
			android: {
				elevation: 3, // Add elevation for a subtle shadow on Android
			},
			ios: {
				shadowColor: colors.primary,
				shadowOffset: { width: 1, height: 1 },
				shadowOpacity: 0.2,
				shadowRadius: 10,
			},
		}),
	},
	imageContainer: { aspectRatio: 1 },

	image: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
	},
	textContainer: {
		padding: 10,
		alignItems: "center",
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		color: colors.text,
		marginBottom: 5,
	},
	price: {
		fontSize: 14,
		color: colors.secondary,
	},
});
