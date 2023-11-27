import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "react-native";
import React from "react";
import { colors } from "../themes";

const Onboarding = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.leadText}>TIME PIECE</Text>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/image/rolex-watch.png")}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>
			<Pressable
				onPress={() => navigation.navigate("home")}
				style={styles.btnContainer}
			>
				<Text style={styles.btnText}>Shop Now</Text>
			</Pressable>
			<StatusBar hidden />
		</View>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.secondary,
		paddingVertical: 20,
	},
	leadText: {
		fontSize: 30,
		fontWeight: "bold",
		color: colors.white,
	},

	imageContainer: {
		height: "60%",
		marginVertical: 40,
	},

	image: {
		height: "100%",
	},
	btnContainer: {
		width: "90%",
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: colors.primary,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
	btnText: {
		color: colors.secondary,
		fontSize: 20,
		fontWeight: "bold",
	},
});
