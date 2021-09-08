import React from 'react';
import { FlatList, Button, } from 'react-native';
import ProductItems from '../../Compos/ProductItems';
import { useDispatch, useSelector } from 'react-redux';
import { addingToCart } from '../../Store/actions/CartAct';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import Colors from '../../Constants/Colors';
import CustomHeaders from '../../Compos/CustomHeaders';



function ProductOverView(props) {

    const products = useSelector(state => state.product.availableProducts);
    const dispatch = useDispatch();




    return (
        <FlatList
            data={products}
            renderItem={({ item }) => <ProductItems
                item={item}
                onselect={() => {
                    props.navigation.navigate('details', { prodId: item.id, title: item.title })
                }}
            >
                <Button title="View Detial" color={Colors.dark} onPress={() => {
                    props.navigation.navigate('details', { prodId: item.id, title: item.title })
                }} />
                <Button title="To Cart" color={Colors.dark} onPress={() => { dispatch(addingToCart(item)) }} />
            </ProductItems>
            }
        />
    )
};

ProductOverView.navigationOptions = nav => {
    return {
        headerTitle: 'Products',
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaders} >
            <Item title="Cart" iconName="md-cart" onPress={() => { nav.navigation.navigate('cart') }} />
        </HeaderButtons>,
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaders}>
            <Item title="menu" iconName="md-menu" onPress={() => { nav.navigation.toggleDrawer() }} />
        </HeaderButtons>

    }
}


export default ProductOverView
