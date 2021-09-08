import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, Text, View } from 'react-native'
import CustomHeaders from '../../Compos/CustomHeaders'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import OrderItems from '../../Compos/OrderItems'

function Order() {

    const orders = useSelector(state => state.order.orders);
    console.log("orders", orders)


    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <OrderItems amount={item.totalAmount} date={item.date} items={item.items} />}
        />
    )
}

Order.navigationOptions = nav => {
    return {
        headerTitle: 'Orders',
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaders}>
            <Item title="menu" iconName="md-menu" onPress={() => { nav.navigation.toggleDrawer() }} />
        </HeaderButtons>

    }
}

export default Order