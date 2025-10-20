import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";

interface SearchFilterProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSearch?: () => void;
  onFilterPress?: () => void;
  containerStyle?: ViewStyle;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  placeholder = "Search here",
  value,
  onChangeText,
  onSearch,
  onFilterPress,
  containerStyle,
}) => {
  return (
    <View style={[styles.searchRow, containerStyle]}>
      <View style={styles.searchBox}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color="#fff"
          style={{ marginHorizontal: 6 }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSearch}
        />
      </View>

      <TouchableOpacity
        style={styles.filterBox}
        onPress={onFilterPress}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  searchRow: { flexDirection: "row", alignItems: "center", paddingTop: 20 },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 8,
    height: 42,
    marginRight: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    paddingLeft: 6,
  },
  filterBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
