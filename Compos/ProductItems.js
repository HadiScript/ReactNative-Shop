import React from 'react'
import { Image } from 'react-native-elements';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    ActivityIndicator
} from 'react-native'
import Colors from '../Constants/Colors';


function ProductItems(props) {

    const { title, imageUrl, price, description } = props.item
    // const priced = price.toFixed(2);

    let TouchCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchCmp = TouchableNativeFeedback
    }

    return (
        <TouchCmp onPress={props.onselect} >
            <View style={styles.proditems} >
                <View style={styles.imgContainer} >
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.img}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View style={styles.details} >
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.title} >${price}</Text>
                </View>
                <View style={styles.btns} >
                    {
                        props.children
                    }
                </View>
            </View>
        </TouchCmp>
    )
}

const styles = StyleSheet.create({
    proditems: {
        height: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        overflow: 'hidden'
    },
    imgContainer: { width: '100%', height: '60%' },
    img: { width: '99%', height: '59%' },
    details: {
        alignItems: 'center',
        height: '15%'
    },
    title: { fontSize: 18, marginVertical: 3 },
    price: { fontSize: 14, color: '#888' },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 10
    },

});

export default ProductItems
