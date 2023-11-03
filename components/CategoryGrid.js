import { Pressable, View, StyleSheet, Text } from "react-native"

const CategoryGrid = ({title, color}) => {
  return (
    <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGrid

const styles = StyleSheet.create({
    
  });