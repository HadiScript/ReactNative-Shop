import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Cartitems from '../../Compos/Cartitems';

import Colors from "../../Constants/Colors"
import { removingFromCart } from '../../Store/actions/CartAct';
import { addingOrder } from '../../Store/actions/OrderAct';

function CartScreen() {

    const dispatch = useDispatch();
    const cartTotal = useSelector(state => state.cart.totalamount);


    const cartItems = useSelector(state => {// this is an abject
        let transformCartItems = [];
        for (const key in state.cart.items) {
            transformCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            });
        }
        return transformCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });

    console.log(cartItems)



    return (
        <View style={styles.cartscreen} >
            <View style={styles.summary} >
                <Text style={styles.summaryText} > Total : <Text style={styles.amount} > ${cartTotal.toFixed(2)} </Text> </Text>
                <Button title="Order Now" color={Colors.dark} disabled={cartItems.length === 0} onPress={() => dispatch(addingOrder(cartItems, cartTotal))} />
            </View>

            <FlatList
                data={cartItems}
                key={item => item.productId}
                renderItem={({ item }) => <Cartitems deletable qty={item.quantity} title={item.productTitle} amount={item.sum} onRemove={() => { dispatch(removingFromCart(item.productId)) }} />}
            />

        </View>
    )
}

CartScreen.navigationOptions = nav => {
    return {
        headerTitle: 'Cart'
    }
}

const styles = StyleSheet.create({
    cartscreen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        elevation: 8,
        backgroundColor: 'white'
    },
    summaryText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.dark
    },
    amount: {}
})

export default CartScreen