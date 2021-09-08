import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image, Text } from 'react-native-elements';
import { StyleSheet, View, ScrollView, ActivityIndicator, } from 'react-native'

import Colors from '../../Constants/Colors';
import { addingToCart } from '../../Store/actions/CartAct';


function ProductDetail(props) {

    const dispatch = useDispatch();

    const productId = props.navigation.getParam('prodId');
    const avalalProd = useSelector(state => state.product.availableProducts);
    const items = useSelector(state => state.cart.items);
    const totalamount = useSelector(state => state.cart.totalamount);
    const seletecprods = avalalProd.find(f => f.id === productId);

    
    console.log(items, totalamount)



    return (
        <ScrollView>
            <View style={styles.imgContainer}>

                <Image
                    source={{ uri: seletecprods.imageUrl }}
                    style={styles.img}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>

            <View style={styles.details} >
                <Text h3 style={styles.title} > {seletecprods.title} </Text>
                <Text h5 style={styles.price} > ${seletecprods.price} </Text>
            </View>
            <Button type="clear" style={{ text: Colors.dark }} title="To Cart" onPress={() => { dispatch(addingToCart(seletecprods)) }} />
            <Text style={styles.des}  > {seletecprods.description} </Text>

        </ScrollView>
    )
}

ProductDetail.navigationOptions = nav => {
    const title = nav.navigation.getParam('title');
    return {
        headerTitle: title
    }
}

const styles = StyleSheet.create({
    imgContainer: { margin: 10 },
    img: {
        height: 400,
        width: '100%',

    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 18,
        color: Colors.dark,
        fontWeight: 'bold'
    },
    price: {
        color: '#888'
    },
    des: {
        // height: 300,
        textAlign: 'center',

        backgroundColor: "rgba(0,0,0,0.1)",
        color: Colors.dark,
        margin: 5,
        borderRadius: 15,
        padding: 3
    }
})

export default ProductDetail