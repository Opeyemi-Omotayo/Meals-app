import { FlatList, View , StyleSheet} from "react-native"
import { CATEGORIES } from "../data/DummyData"
import CategoryGrid from "../components/CategoryGrid";

const renderCategory = (itemData) => {
    return <CategoryGrid title={itemData.item.title} color={itemData.item.color}/>;
}

const Categories = () => {
  return (
    <View>
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategory} numColumns={2}/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    
});