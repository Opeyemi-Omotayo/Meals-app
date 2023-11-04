import { Text, View, StyleSheet } from "react-native"

const MealsOverview = ({ route }) => {
    const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
        <Text>Meals Overview - {catId}</Text>
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 16
   } 
});