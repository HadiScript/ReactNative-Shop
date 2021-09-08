import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';



import Colors from '../Constants/Colors'
import CartScreen from '../Screens/Shop/CartScreen';
import Order from '../Screens/Shop/Orders';
import ProductDetail from '../Screens/Shop/ProductDetail';
import ProductOverView from '../Screens/Shop/ProductOverView';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import UserProduct from '../Screens/User/UserProduct';
import EditProduct from '../Screens/User/EditProducts';
import AuthScreen from '../Screens/User/AuthScreen';

const mainNavigation = createStackNavigator({
    Product: ProductOverView,
    details: ProductDetail,
    cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: config => <Ionicons name="md-create" color={config.tintColor} size={23} />
    },
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: "while"
        },
        headerTintColor: Colors.dark,
    }
});


const orderStack = createStackNavigator({
    orders: Order
},

    {
        navigationOptions: {
            drawerIcon: config => <Ionicons name="md-list" color={config.tintColor} size={23} />
        },
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "while"
            },
            headerTintColor: Colors.dark,
        }
    });


const users = createStackNavigator({
    user: UserProduct,
    edit: EditProduct
},
    {
        navigationOptions: {
            drawerIcon: config => <Ionicons name="md-person" color={config.tintColor} size={23} />
        },
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "while"
            },
            headerTintColor: Colors.dark,
        }
    }
)

const drawerNav = createDrawerNavigator({
    product: mainNavigation,
    orders: orderStack,
    user: users
}, {
    contentOptions: {
        activeTintColor: Colors.dark
    }
});

const authnav = createStackNavigator({
    Auth: AuthScreen
})


const Main = createSwitchNavigator({
    Auth: authnav,
    shop: drawerNav
})

export default createAppContainer(Main);