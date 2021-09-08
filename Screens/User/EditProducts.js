import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'

import CustomHeaders from '../../Compos/CustomHeaders'
import { creatingProduct, updatingProduct } from '../../Store/actions/ProductAct'



function EditProduct(props) {

    const dispatch = useDispatch();
    const prodId = props.navigation.getParam('prodId');
    const editedprod = useSelector(state => state.product.userProducts.find(p => p.id === prodId));

    const [title, setTitle] = useState(editedprod ? editedprod.title : '');
    const [ImageUrl, setImageUrl] = useState(editedprod ? editedprod.imageUrl : '');
    const [price, setprice] = useState();
    const [description, setdescription] = useState(editedprod ? editedprod.description : '');

    const submitHandler = useCallback(() => {
        if (prodId) {
            dispatch(updatingProduct(prodId, title, ImageUrl, description));
            props.navigation.goBack();
        } else {
            dispatch(creatingProduct(title, description, ImageUrl, +price))
            props.navigation.goBack();
        }


    }, []);

    useEffect(() => {
        props.navigation.setParams({ 'submit': submitHandler })
    }, [submitHandler])


    return (
        <ScrollView>
            <View style={styles.form} >


                <View style={styles.formControl} >
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={t => setTitle(t)}
                        keyboardType="default"
                        returnKeyType="next"
                    />
                </View>

                <View style={styles.formControl} >
                    <TextInput
                        style={styles.input}
                        placeholder="Image Url"
                        value={ImageUrl}
                        onChangeText={t => setImageUrl(t)}
                        returnKeyType="next"
                    />
                </View>

                {
                    editedprod ? null : <View style={styles.formControl} >
                        <TextInput
                            keyboardType="decimal-pad"
                            style={styles.input}
                            placeholder="Price"
                            value={price}
                            onChangeText={t => setprice(t)}
                            returnKeyType="next"

                        />
                    </View>
                }

                <View style={styles.formControl} >
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        value={description}
                        onChangeText={t => setdescription(t)}
                    />
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    form: {
        margin: 20,

    },
    formControl: {
        width: '100%',
        marginBottom: 5
    },
    input: {
        paddingHorizontal: 3,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1

    }
});

EditProduct.navigationOptions = nav => {

    const title = nav.navigation.getParam('prodId') ? 'Edit' : 'Create';
    const subFn = nav.navigation.getParam('submit')
    return {
        headerTitle: title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaders} >
            <Item
                title="save"
                iconName="md-checkmark-circle-outline"
                onPress={subFn}
            />
        </HeaderButtons>

    }
}

export default EditProduct