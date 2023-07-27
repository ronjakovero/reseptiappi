import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import PressableText from './PressableTest';
import AppBar from './appBar';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
  },
  flexItemA: {
    flexGrow: 1,
    backgroundColor: 'pink',
  },
  flexItemB: {
    flexGrow: 0,
    backgroundColor: 'gray',
  },
  flexItemBar: {
    flexGrow:1,
  }
})

const Main = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
      <Text>Rate Repository Application, hellooo</Text>
      <PressableText />
      </View>
      <View style={styles.flexItemB}>
      <RepositoryList />
      </View>
      <View style={styles.flexItemBar}>
      <AppBar />
      </View>
    </View>
  )
}

export default Main