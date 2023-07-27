import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  flexContainer: {
    paddingBottom: Constants.statusBarHeight,
    flexDirection: 'row', // Align tab horizontally
    justifyContent: 'center', // Center the tab horizontally
    alignItems: 'center', 
    backgroundColor: 'white', // Add a background color for the AppBar
    borderTopWidth: 1, // Add a border at the top to separate AppBar from the content
    borderTopColor: 'red', // Border color
    paddingVertical: 5, // Add some vertical padding for the tab
  },
  tab: {
    // Add styles for the tab
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff', // Blue color for the tab background
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold', // Make the text bold
  },
})

const AppBar = () => {
  return <View style={styles.flexContainer}>
    <Pressable onPress={() => console.log('Tab Pressed')}>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Repositories</Text>
        </View>
      </Pressable>
  </View>
}

export default AppBar