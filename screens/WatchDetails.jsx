import {
	Image,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../themes";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

const WatchDetails = ({ route, navigation }) => {
	const item = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.mainIconContainer}>
				<View style={styles.subIconContainer}>
					<Pressable onPress={() => navigation.goBack()}>
						<Feather
							name="arrow-left"
							size={24}
							color={colors.secondary}
						/>
					</Pressable>

					<Text style={styles.titleText}>{item?.title}</Text>
				</View>
				<Ionicons name="cart" size={24} color="black" />
			</View>
			<ScrollView showsHorizontalScrollIndicator={false}>
				<View style={styles.imageContainer}>
					<Image
						source={item?.image}
						resizeMode="contain"
						style={styles.image}
					/>
				</View>
				<View style={styles.reviewContainer}>
					<View style={styles.starContainer}>
						{Array.from({ length: Math.round(item.stars) }).map(
							(_, index) => (
								<FontAwesome
									key={index}
									name="star"
									size={20}
									color="black"
								/>
							)
						)}
						{Array.from({ length: 5 - Math.round(item.stars) }).map(
							(_, index) => (
								<FontAwesome
									key={index + Math.round(item.stars)}
									name="star-o"
									size={20}
									color="black"
								/>
							)
						)}
					</View>

					<View style={styles.reviewTextContainer}>
						<Text style={styles.reviewText}>{item?.stars}</Text>
						<Text style={styles.reviewText}>{`(500 Reviews)`}</Text>
					</View>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.priceText}>$ {item.price}</Text>
					<Text style={styles.titleTextLarge}>{item.title}</Text>
					<Text style={styles.descText}>{item.description}</Text>
				</View>
				<View style={styles.btnContainers}>
					<View style={styles.wishlistBtn}>
						<Feather name="heart" size={24} color="black" />
					</View>
					<View style={styles.cartButton}>
						<Text style={styles.cartText}>Add to cart</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default WatchDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		paddingVertical: 30,
	},
	mainIconContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		justifyContent: "space-between",
	},
	subIconContainer: {
		flexDirection: "row",
		columnGap: 20,
		alignItems: "center",
	},
	titleText: {
		fontSize: 18,
		color: colors.secondary,
		fontWeight: "500",
	},
	imageContainer: {
		height: 300,
		marginVertical: 30,
	},
	image: {
		height: "100%",
		width: "100%",
	},

	reviewContainer: {
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		columnGap: 10,
	},

	starContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	reviewTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		columnGap: 5,
	},
	reviewText: {
		fontWeight: "500",
		fontSize: 16,
	},
	textContainer: {
		padding: 20,
	},
	priceText: {
		fontWeight: "500",
		fontSize: 18,
	},
	titleTextLarge: {
		fontWeight: "bold",
		marginVertical: 20,
		fontSize: 24,
		color: colors.secondary,
	},
	descText: {
		fontSize: 15,
		color: colors.gray,
		lineHeight: 25,
	},
	btnContainers: {
		padding: 20,
		flexDirection: "row",
		columnGap: 20,
		flex: 1,
	},
	wishlistBtn: {
		padding: 20,
		backgroundColor: colors.white,
		borderRadius: 15,
		flex: 0.2,
		alignItems: "center",
	},
	cartButton: {
		backgroundColor: colors.secondary,
		flex: 0.8,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	cartText: {
		color: colors.white,
		fontSize: 20,
		fontWeight: "bold",
	},
});
