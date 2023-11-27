import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	TextInput,
	FlatList,
	Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../themes";
import { Feather, Ionicons } from "@expo/vector-icons";
import { categories, watchItems } from "../const";
import WatchItem from "../component/WatchItem";

const Home = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(1);
	const [filteredWatchItems, setFilteredWatchItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	const toggleSearch = () => {
		setIsSearchOpen((prev) => !prev);
	};

	const handleSearch = () => {
		// Filter watch items based on the search query
		const filteredItems = watchItems.filter((item) =>
			item.description.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredWatchItems(filteredItems);
	};

	useEffect(() => {
		// Filter watch items based on the selected category and search query
		const filteredItems = watchItems.filter(
			(item) =>
				item.category ===
					categories.find((cat) => cat.id === selectedCategory)
						?.title &&
				item.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase())
		);
		setFilteredWatchItems(filteredItems);
	}, [selectedCategory, searchQuery]);

	const renderCategoryItem = ({ item }) => (
		<Pressable
			onPress={() => setSelectedCategory(item.id)}
			style={[
				styles.categoryItemContainer,
				{
					backgroundColor:
						selectedCategory === item.id
							? colors.secondary
							: "transparent",
					borderColor:
						selectedCategory === item.id ? "black" : colors.gray,
				},
			]}
		>
			<Text
				style={[
					styles.categoryItem,
					{
						color:
							selectedCategory === item.id
								? colors.white
								: colors.gray,
					},
				]}
			>
				{item?.title}
			</Text>
		</Pressable>
	);

	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Feather name="menu" size={24} color={colors.secondary} />
				<View style={styles.otherIconsContainer}>
					<TouchableOpacity onPress={toggleSearch}>
						<Feather
							name="search"
							size={24}
							color={colors.secondary}
						/>
					</TouchableOpacity>
					<Ionicons name="cart" size={24} color={colors.secondary} />
				</View>
			</View>
			{isSearchOpen && (
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.searchInput}
						placeholder="Search..."
						placeholderTextColor={colors.lightGray}
						value={searchQuery}
						onChangeText={setSearchQuery}
						onSubmitEditing={handleSearch} // Trigger search on Enter
					/>
					<TouchableOpacity onPress={toggleSearch}>
						<Ionicons name="close" size={24} color="#B31312" />
					</TouchableOpacity>
				</View>
			)}
			<View>
				<FlatList
					data={categories}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderCategoryItem}
					horizontal
					contentContainerStyle={styles.flatListContainer}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
			<View>
				<FlatList
					data={filteredWatchItems}
					renderItem={({ item }) => <WatchItem item={item} />}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2}
					contentContainerStyle={[
						styles.flatListContainer,
						{ justifyContent: "space-between" },
					]}
				/>
			</View>
			<StatusBar hidden={false} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light,
		paddingVertical: 20,
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		alignItems: "center",
	},
	otherIconsContainer: {
		flexDirection: "row",
		alignItems: "center",
		columnGap: 10,
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		marginTop: 10,
	},
	searchInput: {
		flex: 1,
		height: 40,
		borderWidth: 1,
		borderColor: colors.gray,
		borderRadius: 8,
		paddingHorizontal: 10,
		marginRight: 10,
		color: colors.gray,
	},
	flatListContainer: {
		padding: 20,
		alignItems: "center",
	},
	categoryItemContainer: {
		paddingHorizontal: 15,
		paddingVertical: 8,
		backgroundColor: colors.primary,
		borderRadius: 20,
		marginRight: 20,
		borderWidth: 1,
		borderColor: colors.secondary,
	},
	item: { color: colors.secondary, fontSize: 16 },
});
