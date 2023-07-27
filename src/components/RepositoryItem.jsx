import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    fullName: {
      fontSize: 20,
    },
    flexContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 10,
      backgroundColor: '#f9c2ff',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    description: {
      fontSize: 18,
      color: 'white',
    },
    language: {
        fontWeight: 'bold',
    }, 
    bigText: {
        fontSize: 24,
        fontWeight: '700',
      },
 
  })

  const FancyText = ({ isWhite, isBig, children }) => {
    const textStyles = [
      styles.description,
      isWhite && styles.description,
      isBig && styles.bigText,
    ]
  
    return <Text style={textStyles}>{children}</Text>
  }
  


  const RepositoryItem = ({ item }) => {
    return (
      <View style={styles.flexContainer}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
        <Text style={styles.forksCount}>{item.forksCount}</Text>
        <Text style={styles.stargazersCount}>{item.stargazersCount}</Text> 
        <FancyText isBig> BigText</FancyText>
      </View>
    )
  }
  
  export default RepositoryItem