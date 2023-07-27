import { Text, Pressable, Alert, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
  },
})

const PressableText = () => {
  return (
    <Pressable
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text style={styles.text}>You can press me</Text>
    </Pressable>
  );
};

export default PressableText