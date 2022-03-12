import { View, Text, StyleSheet, FlatList } from 'react-native'
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import data from "../data.json"


export default function HomeScreen({navigation}: NativeStackHeaderProps) {

    const renderItem = ({item}: {item :any}) => {
        return (
            <View>
                <Text>{item.name} - {item.difficulty}</Text>  
            </View>  
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.slug}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
