import React from 'react'
import { FlatList, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';



import Colors from '../../Constants/Colors';
import ProductItems from '../../Compos/ProductItems';
import CustomHeaders from '../../Compos/CustomHeaders';
import { deletingProduct } from '../../Store/actions/ProductAct';

function UserProduct(props) {

    const dispatch = useDispatch();
    const productitems = useSelector(state => state.product.userProducts);



    return (
        <FlatList
            data={productitems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductItems item={item} onselect={() => props.navigation.navigate('edit', { prodId: item.id })} >
                <Button title="Edit" color={Colors.dark} onPress={() => props.navigation.navigate('edit', { prodId: item.id })} />
                <Button title="Delete" color={Colors.dark} onPress={() => { dispatch(deletingProduct(item.id)) }} />
            </ProductItems>}
        />
    )
}

UserProduct.navigationOptions = nav => {

    

    return {
        headerTitle: "Yours Product",
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaders} >
            <Item title="Cart" iconName="md-create" onPress={() => { nav.navigation.navigate('edit') }} />
        </HeaderButtons>,
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaders}>
            <Item title="menu" iconName="md-menu" onPress={() => { nav.navigation.toggleDrawer() }} />
        </HeaderButtons>
    }
}


export default UserProduct